import assert from 'node:assert/strict';
import test from 'node:test';
import { INITIAL_MATERIALS_DB } from '../src/db_materials.js';
import { INITIAL_BUSINESS_PARTNERS_DB } from '../src/db_business_partners.js';
import { INITIAL_VENDORS_DB } from '../src/db_foreign_only.js';
import { FmeaService } from '../src/utils/fmeaService.js';
import { calculateOverallScore } from '../src/utils/vendorUtils.js';
import { gradeForScore, describeVendorRank } from '../src/utils/vendorRank.js';
import { isVendorRejected, isInCategoryRegister } from '../src/utils/vendorState.js';
import { matchMaterialForVendor, resolveMaterialNames } from '../src/utils/materialNames.js';
import { indexSourcesByMaterial, countMaterialsWithSources } from '../src/utils/materialSources.js';
import { resolveVendorPartner } from '../src/utils/vendorPartner.js';
import { canSupplySources, computeSupplierEvaluation } from '../src/utils/sopEvaluation.js';
import { selectionForVendor } from '../src/utils/sourceSelection.js';
import { diffFields } from '../src/utils/auditEvents.js';
import type { Material, BusinessPartner, Vendor, Scores, Category } from '../src/types.js';

test('1. Load Test: Verify 100 Raw Materials Records', () => {
  assert.ok(Array.isArray(INITIAL_MATERIALS_DB), 'Materials must be an array');
  assert.equal(INITIAL_MATERIALS_DB.length, 100, 'Must have exactly 100 raw material records');

  const seenIds = new Set<string>();
  const seenCas = new Set<string>();

  for (const mat of INITIAL_MATERIALS_DB) {
    assert.ok(mat.id && mat.id.trim().length > 0, `Material ${mat.id} must have an ID`);
    assert.ok(!seenIds.has(mat.id), `Material ID ${mat.id} must be unique`);
    seenIds.add(mat.id);

    assert.ok(mat.nameFa && mat.nameFa.trim().length > 0, `Material ${mat.id} must have Persian name`);
    assert.ok(mat.nameEn && mat.nameEn.trim().length > 0, `Material ${mat.id} must have English name`);
    assert.ok(mat.cas && mat.cas.trim().length > 0, `Material ${mat.id} must have CAS number`);
    assert.ok(mat.role, `Material ${mat.id} must have a defined role`);
    assert.ok(mat.pharmacopoeia, `Material ${mat.id} must have pharmacopoeia defined`);
  }
});

test('2. Load Test: Verify 100 Business Partners Records', () => {
  assert.ok(Array.isArray(INITIAL_BUSINESS_PARTNERS_DB), 'Partners must be an array');
  assert.equal(INITIAL_BUSINESS_PARTNERS_DB.length, 100, 'Must have exactly 100 business partner records');

  const seenIds = new Set<string>();
  let manufacturerCount = 0;
  let supplierCount = 0;

  for (const bp of INITIAL_BUSINESS_PARTNERS_DB) {
    assert.ok(bp.id && bp.id.trim().length > 0, `Partner ${bp.id} must have an ID`);
    assert.ok(!seenIds.has(bp.id), `Partner ID ${bp.id} must be unique`);
    seenIds.add(bp.id);

    assert.ok(bp.name && bp.name.trim().length > 0, `Partner ${bp.id} must have a name`);
    assert.ok(bp.country && bp.country.trim().length > 0, `Partner ${bp.id} must have a country`);
    assert.ok(bp.type === 'Manufacturer' || bp.type === 'Supplier', `Partner ${bp.id} type must be Manufacturer or Supplier`);

    if (bp.type === 'Manufacturer') manufacturerCount++;
    if (bp.type === 'Supplier') supplierCount++;
  }

  assert.ok(manufacturerCount > 0, 'Must have manufacturers');
  assert.ok(supplierCount > 0, 'Must have suppliers');
});

test('3. Source Registration with Full Evaluation: Creation & Scoring', () => {
  const selectedMaterial = INITIAL_MATERIALS_DB[0]; // e.g. Paracetamol
  const selectedPartner = INITIAL_BUSINESS_PARTNERS_DB.find(p => p.type === 'Manufacturer')!;

  // Multi-department evaluation scores
  const rawScores = {
    commercial: { price: 85, delivery: 80, reliability: 90 },
    qa: { gmpCompliance: 92, oosHistory: 88, coaAccuracy: 95 },
    planning: { onTimeDelivery: 82, leadTime: 78 },
    finance: { paymentTerms: 80, creditRating: 85 }
  };

  const scores: Scores = {
    commercial: 85,
    qa: 91,
    planning: 80,
    finance: 82
  };

  const overall = calculateOverallScore(scores);
  assert.ok(overall > 80, 'Overall score should reflect weighted calculation');

  const rank = gradeForScore(overall);
  assert.equal(rank, 'A', 'A vendor with >80 across departments should achieve Grade A');

  // FMEA Risk Assessment
  const risk = FmeaService.performAssessment(3, 2, 2, overall);
  assert.ok(risk.riskScore > 0, 'Risk score must be computed');
  assert.ok(['Low', 'Medium', 'High'].includes(risk.riskLevel), 'Risk level must be valid');

  // Create Source 1
  const source1: Vendor = {
    id: 'src_stress_001',
    category: 'foreign',
    materialId: selectedMaterial.id,
    material: selectedMaterial.nameFa,
    materialEn: selectedMaterial.nameEn,
    cas: selectedMaterial.cas,
    irc: '1234567890123456',
    name: selectedPartner.name,
    nameEn: selectedPartner.nameEn || selectedPartner.name,
    country: selectedPartner.country,
    manufacturerId: selectedPartner.id,
    grade: rank,
    status: 'approved',
    scores,
    rawScores,
    riskAssessment: {
      ...risk,
      materialCriticality: 3,
      detectability: 2,
      probability: 2,
      sps: 12,
      date: '1404/07/01',
      evaluator: 'مهندس کیفیت'
    },
    lastAudit: '1404/06/15',
    rejectionReasons: null,
    registrationDate: '1404/07/01',
    isSample: false
  };

  assert.equal(source1.grade, 'A');
  assert.equal(isVendorRejected(source1), false);
  assert.equal(isInCategoryRegister(source1, 'foreign'), true);

  // 4. Create Source 2 (Second Source for the same material from a different partner)
  const supplierPartner = INITIAL_BUSINESS_PARTNERS_DB.find(p => p.type === 'Supplier')!;
  const scores2: Scores = { commercial: 70, qa: 72, planning: 68, finance: 74 };
  const overall2 = calculateOverallScore(scores2);
  const rank2 = gradeForScore(overall2);

  const source2: Vendor = {
    id: 'src_stress_002',
    category: 'foreign',
    materialId: selectedMaterial.id,
    material: selectedMaterial.nameFa,
    materialEn: selectedMaterial.nameEn,
    cas: selectedMaterial.cas,
    irc: '9876543210987654',
    name: supplierPartner.name,
    nameEn: supplierPartner.nameEn || supplierPartner.name,
    country: supplierPartner.country,
    supplierId: supplierPartner.id,
    grade: rank2,
    status: 'conditional',
    scores: scores2,
    lastAudit: null,
    rejectionReasons: null,
    registrationDate: '1404/07/02',
    isSample: false
  };

  assert.equal(source2.grade, 'B');
  assert.ok(overall > overall2, 'Source 1 score must be higher than Source 2');
});

test('4. Cross-Module Verification: Materials, Partners, Category, and Comparisons', () => {
  const materials = [...INITIAL_MATERIALS_DB];
  const partners = [...INITIAL_BUSINESS_PARTNERS_DB];
  const targetMat = materials[10]; // 11th material
  const targetPartner = partners[5];

  const vendor: Vendor = {
    id: 'src_v_test',
    category: 'domestic',
    materialId: targetMat.id,
    material: targetMat.nameFa,
    materialEn: targetMat.nameEn,
    cas: targetMat.cas,
    irc: '1111222233334444',
    name: targetPartner.name,
    nameEn: targetPartner.nameEn || targetPartner.name,
    country: targetPartner.country,
    manufacturerId: targetPartner.id,
    grade: 'A',
    status: 'approved',
    scores: { commercial: 90, qa: 88, planning: 85, finance: 86 },
    lastAudit: '1404/01/01',
    rejectionReasons: null,
    registrationDate: '1404/01/01',
    isSample: false
  };

  // Module A: Material Repository indexing
  const index = indexSourcesByMaterial([vendor], materials);
  assert.equal(index.has(targetMat.id), true, 'Material should index the new vendor');
  assert.equal(index.get(targetMat.id)?.length, 1);
  assert.equal(index.get(targetMat.id)![0].id, vendor.id);

  // Module B: Material name resolution
  const resolvedMat = matchMaterialForVendor(vendor, materials);
  assert.ok(resolvedMat, 'Vendor must resolve to its Material');
  assert.equal(resolvedMat?.id, targetMat.id);

  // Module C: Business Partner resolution
  const partnerInfo = resolveVendorPartner(vendor, partners);
  assert.equal(partnerInfo.name, targetPartner.name);
  assert.equal(partnerInfo.partner?.id, targetPartner.id);

  // Module D: Category Register
  assert.equal(isInCategoryRegister(vendor, 'domestic'), true);
  assert.equal(isInCategoryRegister(vendor, 'foreign'), false);

  // Module E: Source Selection
  const selection = selectionForVendor(vendor, [{
    materialKey: targetMat.nameEn,
    category: 'domestic',
    vendorId: vendor.id,
    reason: 'تأییدیه نهایی واحد کیفیت و کمیسیون خرید',
    decidedBy: 'مدیر بازرگانی',
    decidedAt: '2026-09-28T09:00:00.000Z'
  }]);
  assert.ok(selection, 'Selection should match the vendor and material key');
  assert.equal(selection?.vendorId, vendor.id);
});

test('5. Data Integrity: Cascade Updates on Material & Partner Changes', () => {
  const materials = [...INITIAL_MATERIALS_DB];
  const partners = [...INITIAL_BUSINESS_PARTNERS_DB];
  const targetMat = { ...materials[2] };
  const targetPartner = { ...partners[8] };

  let vendors: Vendor[] = [
    {
      id: 'src_cascade_1',
      category: 'foreign',
      materialId: targetMat.id,
      material: targetMat.nameFa,
      materialEn: targetMat.nameEn,
      cas: targetMat.cas,
      irc: '5555666677778888',
      name: targetPartner.name,
      nameEn: targetPartner.nameEn || '',
      country: targetPartner.country,
      manufacturerId: targetPartner.id,
      grade: 'A',
      status: 'approved',
      scores: { commercial: 85, qa: 85, planning: 85, finance: 85 },
      lastAudit: '1404/01/01',
      rejectionReasons: null,
      isSample: false
    }
  ];

  // --- Step A: Update Material Information ---
  const updatedMaterial: Material = {
    ...targetMat,
    nameFa: 'آموکسی‌سیلین تری‌هیدرات (به‌روزرسانی شده)',
    nameEn: 'Amoxicillin Trihydrate (Updated)',
    cas: '61336-70-7-NEW'
  };

  // Simulate domainWrites handleEditMaterial cascade
  vendors = vendors.map(v => {
    if (v.materialId !== updatedMaterial.id) return v;
    return {
      ...v,
      material: updatedMaterial.nameFa,
      materialEn: updatedMaterial.nameEn,
      cas: updatedMaterial.cas
    };
  });

  // Verify that vendor reflects updated material
  assert.equal(vendors[0].material, 'آموکسی‌سیلین تری‌هیدرات (به‌روزرسانی شده)');
  assert.equal(vendors[0].materialEn, 'Amoxicillin Trihydrate (Updated)');
  assert.equal(vendors[0].cas, '61336-70-7-NEW');

  // Verify resolveMaterialNames with the updated material
  const updatedMaterialsList = materials.map(m => m.id === updatedMaterial.id ? updatedMaterial : m);
  const resolved = resolveMaterialNames(vendors[0], updatedMaterialsList);
  assert.equal(resolved.material?.nameFa, 'آموکسی‌سیلین تری‌هیدرات (به‌روزرسانی شده)');
  assert.equal(resolved.material?.nameEn, 'Amoxicillin Trihydrate (Updated)');

  // --- Step B: Update Business Partner Information ---
  const updatedPartner: BusinessPartner = {
    ...targetPartner,
    name: 'شرکت داروسازی داروپخش نوین',
    nameEn: 'DarouPakhsh Novin Pharma Co.',
    country: 'ایران - البرز'
  };

  // Simulate domainWrites handleEditBusinessPartner cascade
  vendors = vendors.map(v => {
    if (v.manufacturerId !== updatedPartner.id && v.supplierId !== updatedPartner.id) return v;
    return {
      ...v,
      name: updatedPartner.name,
      nameEn: updatedPartner.nameEn || '',
      country: updatedPartner.country
    };
  });

  // Verify that vendor reflects updated partner across views
  assert.equal(vendors[0].name, 'شرکت داروسازی داروپخش نوین');
  assert.equal(vendors[0].nameEn, 'DarouPakhsh Novin Pharma Co.');
  assert.equal(vendors[0].country, 'ایران - البرز');

  // Verify resolveVendorPartner with the updated partner
  const updatedPartnersList = partners.map(p => p.id === updatedPartner.id ? updatedPartner : p);
  const resolvedPartner = resolveVendorPartner(vendors[0], updatedPartnersList);
  assert.equal(resolvedPartner.name, 'شرکت داروسازی داروپخش نوین');
  assert.equal(resolvedPartner.partner?.country, 'ایران - البرز');

  // --- Step C: Audit Trail Diff Check ---
  const diffs = diffFields(targetMat as any, updatedMaterial as any, ['nameFa', 'nameEn', 'cas']);
  assert.equal(diffs.length, 3, 'Audit diff must capture all 3 changed fields');
  const nameFaDiff = diffs.find(d => d.field === 'nameFa');
  assert.equal(nameFaDiff?.to, 'آموکسی‌سیلین تری‌هیدرات (به‌روزرسانی شده)');
});
