import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { atRoute, signIn } from './helpers/session';

const mount = async () => {
  const { default: App } = await import('../../src/App');
  return render(<App />);
};

beforeEach(() => {
  atRoute('');
});

describe('Archive and Supplier Audit modules populate tables properly', () => {
  test('#/archive renders the sources archive table with records', async () => {
    signIn({ permissions: ['archive.read', 'vendor.read'] as any });
    atRoute('#/archive');
    await mount();

    // Table caption and table elements should exist
    await waitFor(() => {
      const table = screen.getByRole('table');
      expect(table).toBeTruthy();
    }, { timeout: 8000 });

    // Should NOT show "آرشیو خالی است."
    expect(screen.queryByText('آرشیو خالی است.')).toBeNull();
  }, 15000);

  test('#/supplier-audit renders the suppliers monitoring table with records', async () => {
    signIn({ permissions: ['supplier-audit.read', 'vendor.read'] as any });
    atRoute('#/supplier-audit');
    await mount();

    // The supplier directory table should exist and have supplier rows
    await waitFor(() => {
      const table = screen.getByRole('table');
      expect(table).toBeTruthy();
    }, { timeout: 8000 });

    // Should NOT show "تامین‌کننده‌ای یافت نشد"
    expect(screen.queryByText('تامین‌کننده‌ای یافت نشد')).toBeNull();
  }, 15000);
});
