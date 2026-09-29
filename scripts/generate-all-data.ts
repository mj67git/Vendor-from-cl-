import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RAW_MATERIALS } from './materials-data.js';
import { ALL_BUSINESS_PARTNERS } from './partners-data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// 1. Prepare Materials
const materials = RAW_MATERIALS.map((m, idx) => ({
  id: m.id,
  nameFa: m.nameFa,
  nameEn: m.nameEn,
  cas: m.cas,
  irc: m.irc,
  role: m.role,
  finalProduct: m.finalProduct,
  finalProductEn: m.finalProductEn,
  pharmacopoeia: m.pharmacopoeia,
  standardNameFa: m.nameFa,
  standardNameEn: m.nameEn,
  specificationFile: `Spec_${m.nameEn.replace(/[^a-zA-Z0-9]/g, '_')}_Rev02.pdf`,
  hasSpecificationFile: true,
  ircReceiveDate: '1403/05/15',
  ircExpiryDate: '1407/05/15',
  createdAt: '2026-01-10T08:00:00.000Z',
  updatedAt: '2026-02-15T10:00:00.000Z'
}));

// 2. Prepare Business Partners
const businessPartners = ALL_BUSINESS_PARTNERS.map(bp => ({
  ...bp,
  createdAt: '2026-01-15T08:00:00.000Z',
  updatedAt: '2026-02-20T11:30:00.000Z'
}));

// Separate manufacturers and suppliers
const manufacturers = businessPartners.filter(bp => bp.type === 'Manufacturer');
const suppliers = businessPartners.filter(bp => bp.type === 'Supplier');

// 3. Generate 105 Sources (Vendors) linking Materials & Partners with complete Evaluations
interface VendorData {
  id: string;
  category: 'foreign' | 'domestic' | 'packaging' | 'veterinary' | 'sample' | 'blacklist';
  materialId: string;
  material: string;
  materialEn: string;
  cas: string;
  irc: string;
  name: string;
  nameEn: string;
  country: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'rejected' | null;
  status: string;
  scores: {
    commercial: number;
    qa: number;
    planning: number;
    finance: number;
  } | null;
  rawScores?: Record<string, Record<string, number>>;
  lastAudit: string | null;
  ircExpiryDate: string | null;
  rejectionReasons: string[] | null;
  contactInfo: string;
  registrationDate: string;
  isSample?: boolean;
  initialSampleStatus?: string;
  rejectedByDecision?: boolean;
  activityLogs: Array<{ id: string; action: string; date: string; user: string }>;
  riskAssessment: {
    materialCriticality: number;
    detectability: number;
    probability: number;
    sps: number;
    riskScore: number;
    sri: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    date: string;
    evaluator: string;
  } | null;
  analysisRecords: Array<{
    id: string;
    date: string;
    qcCode: string;
    decision: 'Pass' | 'Reject' | 'Approved Conditional';
    deviationReason: 'None' | 'NCR' | 'Deviation' | 'OOS' | 'CAPA' | 'OOT' | 'Complaint' | 'Other';
    comments: string;
    recordedBy: string;
  }>;
  manufacturerId?: string;
  supplierId?: string;
  createdAt?: string;
  updatedAt?: string;
}

const vendors: VendorData[] = [];

// Helper for scores
function makeScores(c: number, q: number, p: number, f: number) {
  return { commercial: c, qa: q, planning: p, finance: f };
}

function calcTotal(s: { commercial: number; qa: number; planning: number; finance: number }) {
  // Standard VLSE weights: commercial 30%, QA 30%, planning 20%, finance 20%
  return Math.round((s.commercial * 0.3 + s.qa * 0.3 + s.planning * 0.2 + s.finance * 0.2) * 10) / 10;
}

function calcGrade(total: number): 'A' | 'B' | 'C' | 'D' {
  if (total >= 80) return 'A';
  if (total >= 65) return 'B';
  if (total >= 50) return 'C';
  return 'D';
}

function makeQcRecords(srcId: string, matName: string, passCount = 3) {
  const records = [];
  for (let i = 1; i <= passCount; i++) {
    records.push({
      id: `qc_${srcId}_${i}`,
      date: `1404/0${i + 4}/15`,
      qcCode: `QC-1404-${srcId.replace('src_', '')}0${i}`,
      decision: 'Pass' as const,
      deviationReason: 'None' as const,
      comments: `آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ${matName} مطابق ضوابط پذیرفته شد.`,
      recordedBy: 'دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)'
    });
  }
  return records;
}

function makeLogs(srcName: string, matName: string) {
  return [
    { id: `log_${Math.random().toString(36).substring(2, 9)}`, action: `ثبت اولیه سورس ${srcName} برای ماده ${matName}`, date: '2026-01-10T09:00:00.000Z', user: 'محمد رضایی (واحد بازرگانی)' },
    { id: `log_${Math.random().toString(36).substring(2, 9)}`, action: 'تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA', date: '2026-01-25T14:30:00.000Z', user: 'دکتر مریم حسینی (تضمین کیفیت)' },
    { id: `log_${Math.random().toString(36).substring(2, 9)}`, action: 'تأیید نهایی سورس و اعطای رتبه ارزیابی', date: '2026-02-10T11:00:00.000Z', user: 'دکتر صمدی (مدیر کیفیت)' }
  ];
}

// Generate 105 sources across materials:
for (let i = 0; i < 100; i++) {
  const mat = materials[i];
  const srcId = `src_${String(i + 1).padStart(3, '0')}`;
  
  // Decide category
  let category: 'foreign' | 'domestic' | 'packaging' | 'veterinary' | 'sample' | 'blacklist' = 'foreign';
  if (i >= 88 && i <= 92) {
    category = 'veterinary';
  } else if (i >= 93) {
    category = 'packaging';
  } else if (i >= 30 && i <= 55) {
    category = 'domestic';
  } else {
    category = 'foreign';
  }

  // Pick manufacturer and supplier
  let mfg = manufacturers[i % manufacturers.length];
  let sup = suppliers[i % suppliers.length];

  // Specific categorizations for domestic
  if (category === 'domestic') {
    // pick an Iranian manufacturer and domestic supplier
    const domesticMfgs = manufacturers.filter(m => m.country === 'ایران');
    const domesticSups = suppliers.filter(s => s.country === 'ایران');
    mfg = domesticMfgs[i % domesticMfgs.length];
    sup = domesticSups[i % domesticSups.length];
  } else if (category === 'packaging') {
    // packaging partners
    const pkgMfgs = manufacturers.filter(m => m.id === 'bp_mfg_048' || m.id === 'bp_mfg_049' || m.id === 'bp_mfg_050' || m.country === 'ایران');
    mfg = pkgMfgs[i % pkgMfgs.length] || manufacturers[0];
  }

  const partnerName = sup.name;
  const partnerNameEn = sup.nameEn;
  const country = mfg.country;

  // Department scores
  // High scores for majority, varying for realism
  const comm = 78 + ((i * 7) % 21); // 78-98
  const qa = 75 + ((i * 11) % 23);   // 75-97
  const plan = 72 + ((i * 13) % 25); // 72-96
  const fin = 76 + ((i * 17) % 22);  // 76-97
  const scoreObj = makeScores(comm, qa, plan, fin);
  const total = calcTotal(scoreObj);
  const grade = calcGrade(total);

  // Status
  const status = total >= 80 ? 'تأیید نهایی (معتبر)' : 'مشروط';

  // Risk assessment
  const crit = 2 + (i % 4); // 2-5
  const det = 1 + ((i * 2) % 3); // 1-3
  const prob = 1 + ((i * 3) % 3); // 1-3
  const sps = crit * det;
  const riskScore = sps * prob;
  const sri = Math.round((sps / prob) * 10) / 10;
  const riskLevel: 'Low' | 'Medium' | 'High' = riskScore > 20 ? 'High' : riskScore > 10 ? 'Medium' : 'Low';

  vendors.push({
    id: srcId,
    category,
    materialId: mat.id,
    material: mat.nameFa,
    materialEn: mat.nameEn,
    cas: mat.cas,
    irc: mat.irc,
    name: partnerName,
    nameEn: partnerNameEn,
    country,
    grade,
    status,
    scores: scoreObj,
    rawScores: {
      commercial: { price: comm, delivery: comm - 2, reliability: comm + 1 },
      qa: { gmpCompliance: qa, oosHistory: qa + 2, coaAccuracy: qa - 1 },
      planning: { onTimeDelivery: plan, leadTime: plan + 1 },
      finance: { paymentTerms: fin, creditRating: fin - 2 }
    },
    lastAudit: '1404/02/10',
    ircExpiryDate: '1407/05/15',
    rejectionReasons: null,
    contactInfo: `تلفن: ${sup.phone} | ایمیل: ${sup.email} | رابط: ${sup.contactPerson}`,
    registrationDate: '1403/10/01',
    isSample: false,
    rejectedByDecision: false,
    activityLogs: makeLogs(partnerName, mat.nameFa),
    riskAssessment: {
      materialCriticality: crit,
      detectability: det,
      probability: prob,
      sps,
      riskScore,
      sri,
      riskLevel,
      date: '1404/01/20',
      evaluator: 'دکتر صمدی (تضمین کیفیت QA)'
    },
    analysisRecords: makeQcRecords(srcId, mat.nameFa, 3),
    manufacturerId: mfg.id,
    supplierId: sup.id,
    createdAt: '2026-01-10T08:00:00.000Z',
    updatedAt: '2026-02-25T12:00:00.000Z'
  });
}

// Add 3 Sample Sources (under laboratory trial)
const sampleMats = [materials[0], materials[2], materials[6]];
for (let sIdx = 0; sIdx < sampleMats.length; sIdx++) {
  const mat = sampleMats[sIdx];
  const srcId = `src_smp_${sIdx + 1}`;
  vendors.push({
    id: srcId,
    category: 'sample',
    materialId: mat.id,
    material: mat.nameFa,
    materialEn: mat.nameEn,
    cas: mat.cas,
    irc: mat.irc,
    name: suppliers[sIdx + 20].name,
    nameEn: suppliers[sIdx + 20].nameEn,
    country: 'هند',
    grade: null,
    status: 'نمونه در حال بررسی آزمایشگاهی',
    scores: null,
    lastAudit: null,
    ircExpiryDate: null,
    rejectionReasons: null,
    contactInfo: `تلفن: ${suppliers[sIdx + 20].phone} | واحد سمپل`,
    registrationDate: '1404/11/01',
    isSample: true,
    initialSampleStatus: 'conditional',
    rejectedByDecision: false,
    activityLogs: [
      { id: `log_smp_${sIdx}`, action: `ورود نمونه اولیه آزمایشگاهی ${mat.nameFa}`, date: '2026-02-01T10:00:00.000Z', user: 'واحد R&D' }
    ],
    riskAssessment: {
      materialCriticality: 4,
      detectability: 2,
      probability: 2,
      sps: 8,
      riskScore: 16,
      sri: 4,
      riskLevel: 'Medium',
      date: '1404/11/05',
      evaluator: 'دکتر حسینی (آزمایشگاه کنترل کیفیت)'
    },
    analysisRecords: [
      {
        id: `qc_smp_${sIdx}_1`,
        date: '1404/11/10',
        qcCode: `QC-SMP-${sIdx + 1}`,
        decision: 'Approved Conditional',
        deviationReason: 'None',
        comments: 'آزمایش بچ پایلوت آزمایشگاهی انجام شد. بچ اول مورد تایید مشروط قرار گرفت تا نتایج تست‌های تسریع‌شده پایداری ۳ ماهه نهایی گردد.',
        recordedBy: 'دکتر حسینی (سرپرست آزمایشگاه)'
      }
    ],
    manufacturerId: manufacturers[sIdx + 22].id,
    supplierId: suppliers[sIdx + 20].id
  });
}

// Add 2 Blacklisted Sources (for demonstration of blacklist & decision guards)
const blkMat1 = materials[1]; // Ibuprofen
vendors.push({
  id: 'src_blk_001',
  category: 'blacklist',
  materialId: blkMat1.id,
  material: blkMat1.nameFa,
  materialEn: blkMat1.nameEn,
  cas: blkMat1.cas,
  irc: blkMat1.irc,
  name: 'Aceto Corporation API Source',
  nameEn: 'Aceto Corporation',
  country: 'ایالات متحده آمریکا',
  grade: 'D',
  status: 'رد شده (غیرمجاز)',
  scores: makeScores(45, 40, 48, 42),
  lastAudit: '1403/08/10',
  ircExpiryDate: '1404/01/01',
  rejectionReasons: ['رد توسط مدیریت تضمین کیفیت: عدم انطباق اساسی نتایج آزمون خلوص با فارماکوپه و OOS مکرر'],
  contactInfo: 'تلفن: 1-516-627-6000',
  registrationDate: '1403/05/01',
  isSample: false,
  rejectedByDecision: true,
  activityLogs: [
    { id: 'log_blk_1', action: 'ثبت مغایرت بحرانی OOS در سه پارت متوالی', date: '2026-01-15T09:00:00.000Z', user: 'دکتر سلیمانی' },
    { id: 'log_blk_2', action: 'قرارگیری در لیست سیاه (Blacklist) به تصمیم کمیته کیفیت', date: '2026-01-20T11:00:00.000Z', user: 'دکتر صمدی' }
  ],
  riskAssessment: {
    materialCriticality: 5,
    detectability: 4,
    probability: 5,
    sps: 20,
    riskScore: 100,
    sri: 4,
    riskLevel: 'High',
    date: '1403/08/12',
    evaluator: 'دکتر صمدی'
  },
  analysisRecords: [
    {
      id: 'qc_blk_1',
      date: '1403/08/15',
      qcCode: 'QC-1403-OOS-09',
      decision: 'Reject',
      deviationReason: 'OOS',
      comments: 'میزان ناخالصی مرتبط از حد مجاز استاندارد EP فراتر بوده و مردود اعلام شد.',
      recordedBy: 'دکتر حسینی'
    }
  ],
  manufacturerId: manufacturers[1].id,
  supplierId: 'bp_sup_067'
});

const blkMat2 = materials[4]; // Metformin
vendors.push({
  id: 'src_blk_002',
  category: 'blacklist',
  materialId: blkMat2.id,
  material: blkMat2.nameFa,
  materialEn: blkMat2.nameEn,
  cas: blkMat2.cas,
  irc: blkMat2.irc,
  name: 'Global Pharma Chem (Non-compliant)',
  nameEn: 'Global Pharma Chem Unapproved',
  country: 'هند',
  grade: 'D',
  status: 'رد شده (غیرمجاز)',
  scores: makeScores(50, 38, 45, 40),
  lastAudit: '1403/06/10',
  ircExpiryDate: '1403/12/29',
  rejectionReasons: ['رد توسط واحد بازرگانی و کیفیت به دلیل تاخیر مکرر و عدم تمدید گواهی GMP'],
  contactInfo: 'تلفن: +91 22 2800 0000',
  registrationDate: '1403/03/10',
  isSample: false,
  rejectedByDecision: true,
  activityLogs: [
    { id: 'log_blk_3', action: 'رد سورس به دلیل انقضای گواهی GMP تولیدکننده', date: '2026-01-18T10:00:00.000Z', user: 'مدیر کیفیت' }
  ],
  riskAssessment: {
    materialCriticality: 4,
    detectability: 3,
    probability: 4,
    sps: 12,
    riskScore: 48,
    sri: 3,
    riskLevel: 'High',
    date: '1403/06/15',
    evaluator: 'دکتر صمدی'
  },
  analysisRecords: [
    {
      id: 'qc_blk_2',
      date: '1403/06/20',
      qcCode: 'QC-1403-REJ-04',
      decision: 'Reject',
      deviationReason: 'Deviation',
      comments: 'عدم تطابق فیزیکی دانسیته پودر و وجود ناخالصی غیرمجاز.',
      recordedBy: 'دکتر سلیمانی'
    }
  ],
  manufacturerId: manufacturers[24].id,
  supplierId: suppliers[5].id
});

console.log(`Generated ${vendors.length} Vendors/Sources.`);

// 4. Source Selections for Primary Materials
const sourceSelections = [
  { id: 'sel_01', materialKey: 'Paracetamol', category: 'foreign', vendorId: 'src_001', reason: 'بالاترین امتیاز کیفی و اقتصادی در ممیزی جامع، سابقه پنج سال تامین پایدار بدون OOS', decidedBy: 'کمیته بازرگانی و تضمین کیفیت', decidedAt: '2026-02-15T10:00:00.000Z' },
  { id: 'sel_02', materialKey: 'Ibuprofen', category: 'foreign', vendorId: 'src_002', reason: 'تاییدیه کامل فارماکوپه USP و قیمت رقابتی نسبت به سایر گزینه‌ها', decidedBy: 'دکتر صمدی (مدیر کیفیت)', decidedAt: '2026-02-16T11:00:00.000Z' },
  { id: 'sel_03', materialKey: 'Amoxicillin Trihydrate', category: 'foreign', vendorId: 'src_003', reason: 'گرید دارویی استاندارد با اندازه ذرات مناسب کپسوله‌سازی و تاییدیه WHO-GMP', decidedBy: 'کمیته فنی خرید', decidedAt: '2026-02-17T09:30:00.000Z' },
  { id: 'sel_04', materialKey: 'Cefixime Trihydrate', category: 'foreign', vendorId: 'src_004', reason: 'ثبت IRC معتبر و سابقه موفق ترخیص و آزمایش‌های آزمایشی', decidedBy: 'مهندس رضایی', decidedAt: '2026-02-18T14:00:00.000Z' },
  { id: 'sel_05', materialKey: 'Metformin Hydrochloride', category: 'foreign', vendorId: 'src_005', reason: 'سورس تایید شده با گرید A و مدارک کامل معتبرسازی', decidedBy: 'کمیته خرید راهبردی', decidedAt: '2026-02-19T10:15:00.000Z' },
  { id: 'sel_06', materialKey: 'Microcrystalline Cellulose PH 101', category: 'domestic', vendorId: 'src_051', reason: 'تامین داخلی مستقیم، حذف ریسک‌های تخصیص ارز و کیفیت منطبق با فارماکوپه', decidedBy: 'واحد برنامه‌ریزی و خرید', decidedAt: '2026-02-20T08:45:00.000Z' },
  { id: 'sel_07', materialKey: 'Magnesium Stearate Vegetable', category: 'domestic', vendorId: 'src_054', reason: 'گواهی BSE/TSE Free، خلوص گیاهی و زمان تحویل فوری', decidedBy: 'واحد تضمین کیفیت', decidedAt: '2026-02-21T13:20:00.000Z' },
  { id: 'sel_08', materialKey: 'Aluminium Foil 20 Micron Blister', category: 'packaging', vendorId: 'src_094', reason: 'نفوذناپذیری حرارتی و پوشش بهینه بلیستر مطابق استانداردهای نهایی بسته‌بندی', decidedBy: 'کمیته ملزومات بسته‌بندی', decidedAt: '2026-02-22T11:00:00.000Z' },
  { id: 'sel_09', materialKey: 'Tylosin Tartrate Vet', category: 'veterinary', vendorId: 'src_089', reason: 'استاندارد معتبر داروهای دامی و گواهی سلامت و تحلیل کامل بچ', decidedBy: 'مدیر بخش دامپزشکی', decidedAt: '2026-02-23T15:00:00.000Z' }
];

// Write src/db_materials.ts
const materialsTs = `import type { Material } from './types';

export const INITIAL_MATERIALS_DB: Material[] = ${JSON.stringify(materials, null, 2)};
`;
fs.writeFileSync(path.join(ROOT, 'src', 'db_materials.ts'), materialsTs, 'utf8');
console.log('✅ Generated src/db_materials.ts with 100 materials.');

// Write src/db_business_partners.ts
const partnersTs = `import type { BusinessPartner } from './types';

export const INITIAL_BUSINESS_PARTNERS_DB: BusinessPartner[] = ${JSON.stringify(businessPartners, null, 2)};
`;
fs.writeFileSync(path.join(ROOT, 'src', 'db_business_partners.ts'), partnersTs, 'utf8');
console.log('✅ Generated src/db_business_partners.ts with 100 business partners.');

// Write src/db_foreign_only.ts
const vendorsTs = `import type { Vendor } from './types';

export const INITIAL_VENDORS_DB: Vendor[] = ${JSON.stringify(vendors, null, 2)};
`;
fs.writeFileSync(path.join(ROOT, 'src', 'db_foreign_only.ts'), vendorsTs, 'utf8');
console.log(`✅ Generated src/db_foreign_only.ts with ${vendors.length} vendors.`);

// Write src/db_source_selections.ts
const selectionsTs = `export interface InitialSourceSelection {
  id: string;
  materialKey: string;
  category: string;
  vendorId: string;
  reason: string;
  decidedBy: string;
  decidedAt: string;
}

export const INITIAL_SOURCE_SELECTIONS: InitialSourceSelection[] = ${JSON.stringify(sourceSelections, null, 2)};
`;
fs.writeFileSync(path.join(ROOT, 'src', 'db_source_selections.ts'), selectionsTs, 'utf8');
console.log(`✅ Generated src/db_source_selections.ts with ${sourceSelections.length} source selections.`);

// Build database/vendors.json in relational_v2 format for Prisma
const vendorsRelationalJson: any = {
  _relational_v2: true,
  vendors: {},
  materials: {},
  vendor_materials: {},
  evaluations: {},
  risk_assessments: {},
  analysis_records: {},
  audit_logs: [],
  contacts: {}
};

for (const m of materials) {
  vendorsRelationalJson.materials[m.id] = {
    id: m.id,
    name: m.nameFa,
    nameEn: m.nameEn,
    cas: m.cas,
    irc: m.irc,
    role: m.role,
    finalProduct: m.finalProduct,
    finalProductEn: m.finalProductEn,
    pharmacopoeia: m.pharmacopoeia
  };
}

for (const v of vendors) {
  vendorsRelationalJson.vendors[v.id] = {
    id: v.id,
    name: v.name,
    nameEn: v.nameEn,
    country: v.country,
    contactInfo: v.contactInfo,
    registrationDate: v.registrationDate,
    status: v.status,
    grade: v.grade,
    irc: v.irc,
    ircExpiryDate: v.ircExpiryDate,
    lastAudit: v.lastAudit,
    manufacturerId: v.manufacturerId || null,
    supplierId: v.supplierId || null,
    rejectedByDecision: v.rejectedByDecision || false
  };

  vendorsRelationalJson.vendor_materials[`vm_${v.id}`] = {
    id: `vm_${v.id}`,
    vendorId: v.id,
    materialId: v.materialId,
    category: v.category,
    isSample: v.isSample || false
  };

  if (v.scores) {
    vendorsRelationalJson.evaluations[`eval_${v.id}`] = {
      id: `eval_${v.id}`,
      vendorId: v.id,
      materialId: v.materialId,
      period: '۱۴۰۴-سالانه',
      commercialScore: v.scores.commercial,
      qaScore: v.scores.qa,
      planningScore: v.scores.planning,
      financeScore: v.scores.finance,
      totalScore: calcTotal(v.scores),
      grade: v.grade,
      scores: v.scores,
      rawScores: v.rawScores || null,
      rejectionReasons: v.rejectionReasons || null
    };
  }

  if (v.riskAssessment) {
    vendorsRelationalJson.risk_assessments[v.id] = v.riskAssessment;
  }

  if (v.analysisRecords && v.analysisRecords.length > 0) {
    vendorsRelationalJson.analysis_records[v.id] = v.analysisRecords;
  }
}

fs.writeFileSync(path.join(ROOT, 'database', 'vendors.json'), JSON.stringify(vendorsRelationalJson, null, 2), 'utf8');
console.log('✅ Generated database/vendors.json in relational_v2 format.');
