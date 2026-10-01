import { PrismaClient } from "@prisma/client";

/**
 * Access to the one datastore.
 *
 * PostgreSQL is the only source of truth in this system and there is no file
 * fallback — a system that silently serves stale data from somewhere else
 * cannot be an auditable record. `requirePrisma()` therefore throws rather than
 * degrading, so a misconfiguration surfaces on the first request instead of
 * producing a register nobody can trust.
 *
 * Moved out of server.ts unchanged; it was the lowest layer buried in the
 * middle of a 4,500-line file.
 */

export function isValidPostgresUrl(url?: string | null): boolean {
  if (!url || typeof url !== "string" || !url.trim()) return false;
  const trimmed = url.trim();
  const lower = trimmed.toLowerCase();
  if (
    lower.includes("<") ||
    lower.includes("username:password") ||
    lower.includes(":port") ||
    lower.includes("host:port") ||
    lower.includes("database_name") ||
    lower.includes("user:password@host") ||
    lower.includes("@host:") ||
    lower.includes("@host/") ||
    lower.includes("/database")
  ) {
    return false;
  }
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "postgresql:" && parsed.protocol !== "postgres:") {
      return false;
    }
    const hostname = parsed.hostname.toLowerCase();
    if (!hostname || hostname === "host" || hostname === "localhost.invalid") {
      return false;
    }
    if (parsed.port && (isNaN(Number(parsed.port)) || Number(parsed.port) <= 0 || Number(parsed.port) > 65535)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function resolveDatabaseUrl(): string | undefined {
  if (process.env.DATABASE_URL && isValidPostgresUrl(process.env.DATABASE_URL)) {
    return process.env.DATABASE_URL;
  }
  if (process.env.SQL_HOST && process.env.SQL_DB_NAME && (process.env.SQL_USER || process.env.SQL_ADMIN_USER)) {
    const user = process.env.SQL_ADMIN_USER || process.env.SQL_USER;
    const password = encodeURIComponent(process.env.SQL_ADMIN_PASSWORD || process.env.SQL_PASSWORD || "");
    const dbName = process.env.SQL_DB_NAME;
    const socketPath = encodeURIComponent(process.env.SQL_HOST);
    const constructed = `postgresql://${user}:${password}@localhost/${dbName}?host=${socketPath}`;
    if (isValidPostgresUrl(constructed)) {
      process.env.DATABASE_URL = constructed;
      return constructed;
    }
  }
  return process.env.DATABASE_URL;
}

let _prismaInstance: PrismaClient | null = null;
export function getPrismaClient(): PrismaClient | null {
  const dbUrl = resolveDatabaseUrl();
  if (!isValidPostgresUrl(dbUrl)) {
    return null;
  }
  if (!_prismaInstance) {
    try {
      _prismaInstance = new PrismaClient({
        datasources: {
          db: {
            url: dbUrl,
          },
        },
      });
      console.log("[Prisma] Lazily initialized PrismaClient for PostgreSQL.");
    } catch (err: any) {
      console.error("[Prisma] Failed to instantiate PrismaClient:", err.message);
      _prismaInstance = null;
    }
  }
  return _prismaInstance;
}

// PostgreSQL is the single source of truth. Fail fast (rather than silently
// falling back to file storage) so misconfiguration surfaces immediately.
export function requirePrisma(): PrismaClient {
  const prisma = getPrismaClient();
  if (!prisma) {
    throw new Error(
      "DATABASE_URL is missing or invalid. A valid PostgreSQL connection is required.",
    );
  }
  return prisma;
}

