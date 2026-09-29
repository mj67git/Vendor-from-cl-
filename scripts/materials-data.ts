import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Define 100 Materials
interface MaterialDef {
  id: string;
  nameFa: string;
  nameEn: string;
  cas: string;
  role: 'API' | 'Intermediate' | 'Excipient' | 'Solvent' | 'Packaging Item' | 'Other';
  finalProduct: string;
  finalProductEn: string;
  pharmacopoeia: 'USP' | 'EP' | 'BP' | 'IP' | 'In-house';
  irc: string;
}

const RAW_MATERIALS: MaterialDef[] = [
  // 1-50: APIs
  { id: 'mat_001', nameFa: 'استامینوفن', nameEn: 'Paracetamol', cas: '103-90-2', role: 'API', finalProduct: 'قرص استامینوفن ۵۰۰', finalProductEn: 'Paracetamol 500mg Tab', pharmacopoeia: 'BP', irc: '1234567890123456' },
  { id: 'mat_002', nameFa: 'ایبوپروفن', nameEn: 'Ibuprofen', cas: '15687-27-1', role: 'API', finalProduct: 'قرص ایبوپروفن ۴۰۰', finalProductEn: 'Ibuprofen 400mg Tab', pharmacopoeia: 'USP', irc: '2234567890123456' },
  { id: 'mat_003', nameFa: 'آموکسی‌سیلین تری‌هیدرات', nameEn: 'Amoxicillin Trihydrate', cas: '61336-70-7', role: 'API', finalProduct: 'کپسول آموکسی‌سیلین ۵۰۰', finalProductEn: 'Amoxicillin 500mg Cap', pharmacopoeia: 'BP', irc: '3234567890123456' },
  { id: 'mat_004', nameFa: 'سفیکسیم تری‌هیدرات', nameEn: 'Cefixime Trihydrate', cas: '79350-37-1', role: 'API', finalProduct: 'قرص سفیکسیم ۴۰۰', finalProductEn: 'Cefixime 400mg Tab', pharmacopoeia: 'USP', irc: '4234567890123456' },
  { id: 'mat_005', nameFa: 'متفورمین هیدروکلراید', nameEn: 'Metformin Hydrochloride', cas: '1115-70-4', role: 'API', finalProduct: 'قرص متفورمین ۵۰۰', finalProductEn: 'Metformin 500mg Tab', pharmacopoeia: 'BP', irc: '5234567890123456' },
  { id: 'mat_006', nameFa: 'کلوپیدوگرل بی‌سولفات', nameEn: 'Clopidogrel Bisulfate', cas: '120202-66-6', role: 'API', finalProduct: 'قرص کلوپیدوگرل ۷۵', finalProductEn: 'Clopidogrel 75mg Tab', pharmacopoeia: 'USP', irc: '6234567890123456' },
  { id: 'mat_007', nameFa: 'آتورواستاتین کلسیم', nameEn: 'Atorvastatin Calcium', cas: '134523-03-8', role: 'API', finalProduct: 'قرص آتورواستاتین ۲۰', finalProductEn: 'Atorvastatin 20mg Tab', pharmacopoeia: 'USP', irc: '7234567890123456' },
  { id: 'mat_008', nameFa: 'لوزارتان پتاسیم', nameEn: 'Losartan Potassium', cas: '124750-99-8', role: 'API', finalProduct: 'قرص لوزارتان ۲۵', finalProductEn: 'Losartan 25mg Tab', pharmacopoeia: 'USP', irc: '8234567890123456' },
  { id: 'mat_009', nameFa: 'امپرازول', nameEn: 'Omeprazole', cas: '73590-58-6', role: 'API', finalProduct: 'کپسول امپرازول ۲۰', finalProductEn: 'Omeprazole 20mg Cap', pharmacopoeia: 'BP', irc: '9234567890123456' },
  { id: 'mat_010', nameFa: 'پانتوپرازول سدیم', nameEn: 'Pantoprazole Sodium', cas: '138786-67-1', role: 'API', finalProduct: 'قرص پانتوپرازول ۴۰', finalProductEn: 'Pantoprazole 40mg Tab', pharmacopoeia: 'USP', irc: '1034567890123456' },
  { id: 'mat_011', nameFa: 'سیتریزین هیدروکلراید', nameEn: 'Cetirizine Hydrochloride', cas: '83881-52-1', role: 'API', finalProduct: 'قرص سیتریزین ۱۰', finalProductEn: 'Cetirizine 10mg Tab', pharmacopoeia: 'BP', irc: '1134567890123456' },
  { id: 'mat_012', nameFa: 'فلوکستین هیدروکلراید', nameEn: 'Fluoxetine Hydrochloride', cas: '56296-78-7', role: 'API', finalProduct: 'کپسول فلوکستین ۲۰', finalProductEn: 'Fluoxetine 20mg Cap', pharmacopoeia: 'USP', irc: '1234567890123457' },
  { id: 'mat_013', nameFa: 'گاباپنتین', nameEn: 'Gabapentin', cas: '60142-96-3', role: 'API', finalProduct: 'کپسول گاباپنتین ۳۰۰', finalProductEn: 'Gabapentin 300mg Cap', pharmacopoeia: 'USP', irc: '1334567890123456' },
  { id: 'mat_014', nameFa: 'پرگابالین', nameEn: 'Pregabalin', cas: '148553-50-8', role: 'API', finalProduct: 'کپسول پرگابالین ۷۵', finalProductEn: 'Pregabalin 75mg Cap', pharmacopoeia: 'USP', irc: '1434567890123456' },
  { id: 'mat_015', nameFa: 'والزارتان', nameEn: 'Valsartan', cas: '137862-53-4', role: 'API', finalProduct: 'قرص والزارتان ۸۰', finalProductEn: 'Valsartan 80mg Tab', pharmacopoeia: 'USP', irc: '1534567890123456' },
  { id: 'mat_016', nameFa: 'سرترالین هیدروکلراید', nameEn: 'Sertraline Hydrochloride', cas: '79559-97-0', role: 'API', finalProduct: 'قرص سرترالین ۵۰', finalProductEn: 'Sertraline 50mg Tab', pharmacopoeia: 'USP', irc: '1634567890123456' },
  { id: 'mat_017', nameFa: 'سیپروفلوکساسین هیدروکلراید', nameEn: 'Ciprofloxacin Hydrochloride', cas: '86393-32-0', role: 'API', finalProduct: 'قرص سیپروفلوکساسین ۵۰۰', finalProductEn: 'Ciprofloxacin 500mg Tab', pharmacopoeia: 'USP', irc: '1734567890123456' },
  { id: 'mat_018', nameFa: 'آزیترومایسین دی‌هیدرات', nameEn: 'Azithromycin Dihydrate', cas: '117772-70-0', role: 'API', finalProduct: 'کپسول آزیترومایسین ۲۵۰', finalProductEn: 'Azithromycin 250mg Cap', pharmacopoeia: 'USP', irc: '1834567890123456' },
  { id: 'mat_019', nameFa: 'دیکلوفناک سدیم', nameEn: 'Diclofenac Sodium', cas: '15307-79-6', role: 'API', finalProduct: 'قرص دیکلوفناک ۵۰', finalProductEn: 'Diclofenac Sodium 50mg Tab', pharmacopoeia: 'BP', irc: '1934567890123456' },
  { id: 'mat_020', nameFa: 'دیکلوفناک پتاسیم', nameEn: 'Diclofenac Potassium', cas: '15307-81-0', role: 'API', finalProduct: 'قرص دیکلوفناک پتاسیم ۵۰', finalProductEn: 'Diclofenac Potassium 50mg Tab', pharmacopoeia: 'BP', irc: '2034567890123456' },
  { id: 'mat_021', nameFa: 'فاموتیدین', nameEn: 'Famotidine', cas: '76824-35-6', role: 'API', finalProduct: 'قرص فاموتیدین ۴۰', finalProductEn: 'Famotidine 40mg Tab', pharmacopoeia: 'USP', irc: '2134567890123456' },
  { id: 'mat_022', nameFa: 'هیدروکلروتیازید', nameEn: 'Hydrochlorothiazide', cas: '58-93-5', role: 'API', finalProduct: 'قرص هیدروکلروتیازید ۵۰', finalProductEn: 'Hydrochlorothiazide 50mg Tab', pharmacopoeia: 'USP', irc: '2234567890123457' },
  { id: 'mat_023', nameFa: 'آملودیپین بسپلات', nameEn: 'Amlodipine Besylate', cas: '111470-99-6', role: 'API', finalProduct: 'قرص آملودیپین ۵', finalProductEn: 'Amlodipine 5mg Tab', pharmacopoeia: 'USP', irc: '2334567890123456' },
  { id: 'mat_024', nameFa: 'متوپرولول سوکسینات', nameEn: 'Metoprolol Succinate', cas: '98418-47-4', role: 'API', finalProduct: 'قرص متوپرولول سوکسینات ۴۷.۵', finalProductEn: 'Metoprolol Succinate 47.5mg Tab', pharmacopoeia: 'USP', irc: '2434567890123456' },
  { id: 'mat_025', nameFa: 'کارودیلول', nameEn: 'Carvedilol', cas: '72956-09-3', role: 'API', finalProduct: 'قرص کارودیلول ۶.۲۵', finalProductEn: 'Carvedilol 6.25mg Tab', pharmacopoeia: 'USP', irc: '2534567890123456' },
  { id: 'mat_026', nameFa: 'اس‌سیتالوپرام اگزالات', nameEn: 'Escitalopram Oxalate', cas: '219861-08-2', role: 'API', finalProduct: 'قرص اس‌سیتالوپرام ۱۰', finalProductEn: 'Escitalopram 10mg Tab', pharmacopoeia: 'USP', irc: '2634567890123456' },
  { id: 'mat_027', nameFa: 'دولوکستین هیدروکلراید', nameEn: 'Duloxetine Hydrochloride', cas: '136434-34-9', role: 'API', finalProduct: 'کپسول دولوکستین ۳۰', finalProductEn: 'Duloxetine 30mg Cap', pharmacopoeia: 'USP', irc: '2734567890123456' },
  { id: 'mat_028', nameFa: 'لووتیروکسین سدیم', nameEn: 'Levothyroxine Sodium', cas: '55-03-8', role: 'API', finalProduct: 'قرص لووتیروکسین ۰.۱', finalProductEn: 'Levothyroxine 0.1mg Tab', pharmacopoeia: 'USP', irc: '2834567890123456' },
  { id: 'mat_029', nameFa: 'پردنیزولون', nameEn: 'Prednisolone', cas: '50-24-8', role: 'API', finalProduct: 'قرص پردنیزولون ۵', finalProductEn: 'Prednisolone 5mg Tab', pharmacopoeia: 'BP', irc: '2934567890123456' },
  { id: 'mat_030', nameFa: 'دگزامتازون سدیم فسفات', nameEn: 'Dexamethasone Sodium Phosphate', cas: '2392-39-4', role: 'API', finalProduct: 'آمپول دگزامتازون ۸ میلی‌گرم', finalProductEn: 'Dexamethasone 8mg Amp', pharmacopoeia: 'USP', irc: '3034567890123456' },
  { id: 'mat_031', nameFa: 'بتامتازون دی‌پروپیونات', nameEn: 'Betamethasone Dipropionate', cas: '5593-20-4', role: 'API', finalProduct: 'پماد بتامتازون ۰.۰۵٪', finalProductEn: 'Betamethasone Ointment', pharmacopoeia: 'USP', irc: '3134567890123456' },
  { id: 'mat_032', nameFa: 'هیدروکورتیزون استات', nameEn: 'Hydrocortisone Acetate', cas: '50-03-3', role: 'API', finalProduct: 'کرم هیدروکورتیزون ۱٪', finalProductEn: 'Hydrocortisone Cream 1%', pharmacopoeia: 'USP', irc: '3234567890123457' },
  { id: 'mat_033', nameFa: 'ملوکسیکام', nameEn: 'Meloxicam', cas: '71125-38-7', role: 'API', finalProduct: 'قرص ملوکسیکام ۱۵', finalProductEn: 'Meloxicam 15mg Tab', pharmacopoeia: 'BP', irc: '3334567890123456' },
  { id: 'mat_034', nameFa: 'سلکوکسیب', nameEn: 'Celecoxib', cas: '169590-42-5', role: 'API', finalProduct: 'کپسول سلکوکسیب ۲۰۰', finalProductEn: 'Celecoxib 200mg Cap', pharmacopoeia: 'USP', irc: '3434567890123456' },
  { id: 'mat_035', nameFa: 'آلپرازولام', nameEn: 'Alprazolam', cas: '28981-97-7', role: 'API', finalProduct: 'قرص آلپرازولام ۰.۵', finalProductEn: 'Alprazolam 0.5mg Tab', pharmacopoeia: 'USP', irc: '3534567890123456' },
  { id: 'mat_036', nameFa: 'کلونازپام', nameEn: 'Clonazepam', cas: '1622-61-3', role: 'API', finalProduct: 'قرص کلونازپام ۱', finalProductEn: 'Clonazepam 1mg Tab', pharmacopoeia: 'USP', irc: '3634567890123456' },
  { id: 'mat_037', nameFa: 'دیازپام', nameEn: 'Diazepam', cas: '439-14-5', role: 'API', finalProduct: 'قرص دیازپام ۱۰', finalProductEn: 'Diazepam 10mg Tab', pharmacopoeia: 'BP', irc: '3734567890123456' },
  { id: 'mat_038', nameFa: 'پروپرانولول هیدروکلراید', nameEn: 'Propranolol Hydrochloride', cas: '318-98-9', role: 'API', finalProduct: 'قرص پروپرانولول ۲۰', finalProductEn: 'Propranolol 20mg Tab', pharmacopoeia: 'BP', irc: '3834567890123456' },
  { id: 'mat_039', nameFa: 'آتنولول', nameEn: 'Atenolol', cas: '29122-68-7', role: 'API', finalProduct: 'قرص آتنولول ۵۰', finalProductEn: 'Atenolol 50mg Tab', pharmacopoeia: 'BP', irc: '3934567890123456' },
  { id: 'mat_040', nameFa: 'کاپتوپریل', nameEn: 'Captopril', cas: '62571-86-2', role: 'API', finalProduct: 'قرص کاپتوپریل ۲۵', finalProductEn: 'Captopril 25mg Tab', pharmacopoeia: 'USP', irc: '4034567890123456' },
  { id: 'mat_041', nameFa: 'انالاپریل مالئات', nameEn: 'Enalapril Maleate', cas: '76095-16-4', role: 'API', finalProduct: 'قرص انالاپریل ۲۰', finalProductEn: 'Enalapril 20mg Tab', pharmacopoeia: 'USP', irc: '4134567890123456' },
  { id: 'mat_042', nameFa: 'کلاریترومایسین', nameEn: 'Clarithromycin', cas: '81103-11-9', role: 'API', finalProduct: 'قرص کلاریترومایسین ۵۰۰', finalProductEn: 'Clarithromycin 500mg Tab', pharmacopoeia: 'USP', irc: '4234567890123457' },
  { id: 'mat_043', nameFa: 'اریترومایسین اتیل‌سوکسینات', nameEn: 'Erythromycin Ethylsuccinate', cas: '1264-62-6', role: 'API', finalProduct: 'قرص اریترومایسین ۴۰۰', finalProductEn: 'Erythromycin 400mg Tab', pharmacopoeia: 'USP', irc: '4334567890123456' },
  { id: 'mat_044', nameFa: 'سفالکسین مونوهیدرات', nameEn: 'Cephalexin Monohydrate', cas: '23325-78-2', role: 'API', finalProduct: 'کپسول سفالکسین ۵۰۰', finalProductEn: 'Cephalexin 500mg Cap', pharmacopoeia: 'USP', irc: '4434567890123456' },
  { id: 'mat_045', nameFa: 'سفازولین سدیم', nameEn: 'Cefazolin Sodium', cas: '27164-46-1', role: 'API', finalProduct: 'ویال تزریقی سفازولین ۱ گرم', finalProductEn: 'Cefazolin 1g Vial', pharmacopoeia: 'USP', irc: '4534567890123456' },
  { id: 'mat_046', nameFa: 'سفتریامسون سدیم', nameEn: 'Ceftriaxone Sodium', cas: '74578-69-1', role: 'API', finalProduct: 'ویال تزریقی سفتریامسون ۱ گرم', finalProductEn: 'Ceftriaxone 1g Vial', pharmacopoeia: 'USP', irc: '4634567890123456' },
  { id: 'mat_047', nameFa: 'لووفلوکساسین همی‌هیدرات', nameEn: 'Levofloxacin Hemihydrate', cas: '100986-85-4', role: 'API', finalProduct: 'قرص لووفلوکساسین ۵۰۰', finalProductEn: 'Levofloxacin 500mg Tab', pharmacopoeia: 'USP', irc: '4734567890123456' },
  { id: 'mat_048', nameFa: 'مترونیدازول', nameEn: 'Metronidazole', cas: '443-48-1', role: 'API', finalProduct: 'قرص مترونیدازول ۲۵۰', finalProductEn: 'Metronidazole 250mg Tab', pharmacopoeia: 'BP', irc: '4834567890123456' },
  { id: 'mat_049', nameFa: 'ترامادول هیدروکلراید', nameEn: 'Tramadol Hydrochloride', cas: '36282-47-0', role: 'API', finalProduct: 'قرص ترامادول ۱۰۰', finalProductEn: 'Tramadol 100mg Tab', pharmacopoeia: 'BP', irc: '4934567890123456' },
  { id: 'mat_050', nameFa: 'کدئین فسفات', nameEn: 'Codeine Phosphate', cas: '52-28-8', role: 'API', finalProduct: 'قرص استامینوفن کدئین', finalProductEn: 'Acetaminophen Codeine Tab', pharmacopoeia: 'BP', irc: '5034567890123456' },

  // 51-76: Excipients
  { id: 'mat_051', nameFa: 'میکروکریستالین سلولز ۱۰۱', nameEn: 'Microcrystalline Cellulose PH 101', cas: '9004-34-6', role: 'Excipient', finalProduct: 'فیلر و بایندر قرص', finalProductEn: 'Tablet Binder & Filler', pharmacopoeia: 'USP', irc: '5134567890123456' },
  { id: 'mat_052', nameFa: 'میکروکریستالین سلولز ۱۰۲', nameEn: 'Microcrystalline Cellulose PH 102', cas: '9004-34-6', role: 'Excipient', finalProduct: 'قرص‌سازی مستقیم', finalProductEn: 'Direct Compression Binder', pharmacopoeia: 'USP', irc: '5234567890123457' },
  { id: 'mat_053', nameFa: 'لاکتوز مونوهیدرات مش ۲۰۰', nameEn: 'Lactose Monohydrate 200 Mesh', cas: '64044-51-5', role: 'Excipient', finalProduct: 'فیلر گرانولاسیون', finalProductEn: 'Granulation Filler', pharmacopoeia: 'USP', irc: '5334567890123456' },
  { id: 'mat_054', nameFa: 'منیزیم استئارات گیاهی', nameEn: 'Magnesium Stearate Vegetable', cas: '557-04-0', role: 'Excipient', finalProduct: 'روان‌ساز قرص و کپسول', finalProductEn: 'Tablet Lubricant', pharmacopoeia: 'USP', irc: '5434567890123456' },
  { id: 'mat_055', nameFa: 'کراس‌کارملوز سدیم', nameEn: 'Croscarmellose Sodium', cas: '74811-65-7', role: 'Excipient', finalProduct: 'سوپردیزینتگرنت قرص', finalProductEn: 'Superdisintegrant', pharmacopoeia: 'USP', irc: '5534567890123456' },
  { id: 'mat_056', nameFa: 'کراس‌پوویدون CL', nameEn: 'Crospovidone Kollidon CL', cas: '9003-39-8', role: 'Excipient', finalProduct: 'ازهم‌پاشاننده سریع قرص', finalProductEn: 'Fast Disintegrant', pharmacopoeia: 'EP', irc: '5634567890123456' },
  { id: 'mat_057', nameFa: 'پوویدون K30', nameEn: 'Povidone K30', cas: '9003-39-8', role: 'Excipient', finalProduct: 'بایندر گرانولاسیون مرطوب', finalProductEn: 'Wet Granulation Binder', pharmacopoeia: 'USP', irc: '5734567890123456' },
  { id: 'mat_058', nameFa: 'هیدروکسی پروپیل متیل سلولز K100M', nameEn: 'Hypromellose HPMC K100M', cas: '9004-65-3', role: 'Excipient', finalProduct: 'ماتریس پیوسته رهش', finalProductEn: 'Sustained Release Matrix', pharmacopoeia: 'USP', irc: '5834567890123456' },
  { id: 'mat_059', nameFa: 'هیدروکسی پروپیل متیل سلولز E5', nameEn: 'Hypromellose HPMC E5', cas: '9004-65-3', role: 'Excipient', finalProduct: 'پلیمر روکش قرص', finalProductEn: 'Film Coating Polymer', pharmacopoeia: 'USP', irc: '5934567890123456' },
  { id: 'mat_060', nameFa: 'سیلیکون دی‌اکسید کلوئیدی ۲۰۰', nameEn: 'Colloidal Silicon Dioxide 200', cas: '112945-52-5', role: 'Excipient', finalProduct: 'گلایدنت جریان پودر', finalProductEn: 'Powder Glidant', pharmacopoeia: 'USP', irc: '6034567890123456' },
  { id: 'mat_061', nameFa: 'تالک دارویی میکرونیزه', nameEn: 'Pharmaceutical Talc Micronized', cas: '14807-96-6', role: 'Excipient', finalProduct: 'روان‌کننده قرص', finalProductEn: 'Glidant & Antiadherent', pharmacopoeia: 'BP', irc: '6134567890123456' },
  { id: 'mat_062', nameFa: 'نشاسته ذرت پیش‌ژلاتینه', nameEn: 'Pregelatinized Starch 1500', cas: '9005-25-8', role: 'Excipient', finalProduct: 'بایندر و دیزینتگرنت', finalProductEn: 'Binder & Disintegrant', pharmacopoeia: 'USP', irc: '6234567890123456' },
  { id: 'mat_063', nameFa: 'مانیتول گرانول', nameEn: 'Mannitol Granules', cas: '69-65-8', role: 'Excipient', finalProduct: 'قرص‌های جویدنی و ODT', finalProductEn: 'Chewable & ODT Base', pharmacopoeia: 'EP', irc: '6334567890123456' },
  { id: 'mat_064', nameFa: 'سدیم استارچ گلیکولات', nameEn: 'Sodium Starch Glycolate', cas: '9063-38-1', role: 'Excipient', finalProduct: 'ازهم‌پاشاننده قرص', finalProductEn: 'Tablet Disintegrant', pharmacopoeia: 'BP', irc: '6434567890123456' },
  { id: 'mat_065', nameFa: 'سدیم لوریل سولفات دارویی', nameEn: 'Sodium Lauryl Sulfate Pharma', cas: '151-21-3', role: 'Excipient', finalProduct: 'حل‌کننده و سورفکتانت', finalProductEn: 'Solubilizer & Surfactant', pharmacopoeia: 'USP', irc: '6534567890123456' },
  { id: 'mat_066', nameFa: 'دی‌کلسیم فسفات دی‌هیدرات', nameEn: 'Dicalcium Phosphate Dihydrate', cas: '7789-77-7', role: 'Excipient', finalProduct: 'فیلر معدنی قرص', finalProductEn: 'Mineral Tablet Diluent', pharmacopoeia: 'USP', irc: '6634567890123456' },
  { id: 'mat_067', nameFa: 'تیتانیوم دی‌اکسید', nameEn: 'Titanium Dioxide', cas: '13463-67-7', role: 'Excipient', finalProduct: 'رنگ و اپک‌کننده روکش', finalProductEn: 'Coating Opacifier & Colorant', pharmacopoeia: 'USP', irc: '6734567890123456' },
  { id: 'mat_068', nameFa: 'پلی‌اتیلن گلیکول ۴۰۰۰', nameEn: 'Polyethylene Glycol 4000', cas: '25322-68-3', role: 'Excipient', finalProduct: 'پلاستی‌سایزر روکش', finalProductEn: 'Coating Plasticizer', pharmacopoeia: 'EP', irc: '6834567890123456' },
  { id: 'mat_069', nameFa: 'پلی‌اتیلن گلیکول ۶۰۰۰', nameEn: 'Polyethylene Glycol 6000', cas: '25322-68-3', role: 'Excipient', finalProduct: 'پایه شیاف و گرانول', finalProductEn: 'Suppository Base & Binder', pharmacopoeia: 'EP', irc: '6934567890123457' },
  { id: 'mat_070', nameFa: 'سیتریک اسید بدون آب', nameEn: 'Citric Acid Anhydrous', cas: '77-92-9', role: 'Excipient', finalProduct: 'تنظیم‌کننده pH و جوشان', finalProductEn: 'Effervescent Acidifier', pharmacopoeia: 'BP', irc: '7034567890123456' },
  { id: 'mat_071', nameFa: 'سدیم سیترات دی‌هیدرات', nameEn: 'Sodium Citrate Dihydrate', cas: '6132-04-3', role: 'Excipient', finalProduct: 'بافر محلول‌های دارویی', finalProductEn: 'Buffering Agent', pharmacopoeia: 'USP', irc: '7134567890123456' },
  { id: 'mat_072', nameFa: 'بنزوئیک اسید', nameEn: 'Benzoic Acid', cas: '65-85-0', role: 'Excipient', finalProduct: 'نگهدارنده آنتی‌باکتریال', finalProductEn: 'Antimicrobial Preservative', pharmacopoeia: 'BP', irc: '7234567890123456' },
  { id: 'mat_073', nameFa: 'سدیم بنزوات', nameEn: 'Sodium Benzoate', cas: '532-32-1', role: 'Excipient', finalProduct: 'نگهدارنده شربت', finalProductEn: 'Syrup Preservative', pharmacopoeia: 'USP', irc: '7334567890123456' },
  { id: 'mat_074', nameFa: 'متیل پارابن', nameEn: 'Methylparaben', cas: '99-76-3', role: 'Excipient', finalProduct: 'نگهدارنده ضد قارچ', finalProductEn: 'Antifungal Preservative', pharmacopoeia: 'USP', irc: '7434567890123456' },
  { id: 'mat_075', nameFa: 'پروپیل پارابن', nameEn: 'Propylparaben', cas: '94-13-3', role: 'Excipient', finalProduct: 'نگهدارنده امولسیون', finalProductEn: 'Emulsion Preservative', pharmacopoeia: 'USP', irc: '7534567890123456' },
  { id: 'mat_076', nameFa: 'پلی‌سوربات ۸۰ دارویی', nameEn: 'Polysorbate 80 Tween', cas: '9005-65-6', role: 'Excipient', finalProduct: 'امولسیفایر و حل‌کننده', finalProductEn: 'Emulsifying Agent', pharmacopoeia: 'USP', irc: '7634567890123456' },

  // 77-84: Solvents
  { id: 'mat_077', nameFa: 'الکل بنزیلیک دارویی', nameEn: 'Benzyl Alcohol Pharma', cas: '100-51-6', role: 'Solvent', finalProduct: 'حلال و بی‌حس‌کننده موضعی', finalProductEn: 'Solvent & Preservative', pharmacopoeia: 'BP', irc: '7734567890123456' },
  { id: 'mat_078', nameFa: 'ایزوپروپیل الکل گرید دارویی', nameEn: 'Isopropyl Alcohol Pharma', cas: '67-63-0', role: 'Solvent', finalProduct: 'حلال کوتینگ و گرانولاسیون', finalProductEn: 'Coating Solvent', pharmacopoeia: 'USP', irc: '7834567890123456' },
  { id: 'mat_079', nameFa: 'اتانول ۹۶ درصد دارویی', nameEn: 'Ethanol 96% Pharma', cas: '64-17-5', role: 'Solvent', finalProduct: 'حلال استخراج و عصاره', finalProductEn: 'Extraction Solvent', pharmacopoeia: 'EP', irc: '7934567890123456' },
  { id: 'mat_080', nameFa: 'پروپیلن گلیکول گرید دارویی', nameEn: 'Propylene Glycol Pharma', cas: '57-55-6', role: 'Solvent', finalProduct: 'کو-حلال شربت و پماد', finalProductEn: 'Cosolvent in Liquid Orals', pharmacopoeia: 'USP', irc: '8034567890123456' },
  { id: 'mat_081', nameFa: 'گلیسیرین دارویی ۹۹.۵٪', nameEn: 'Glycerin 99.5% Pharma', cas: '56-81-5', role: 'Solvent', finalProduct: 'هومکتانت و حلال مایعات', finalProductEn: 'Humectant & Solvent', pharmacopoeia: 'USP', irc: '8134567890123456' },
  { id: 'mat_082', nameFa: 'استون گرید دارویی', nameEn: 'Acetone Pharma Grade', cas: '67-64-1', role: 'Solvent', finalProduct: 'حلال تبلور و فرآیند', finalProductEn: 'Process Solvent', pharmacopoeia: 'EP', irc: '8234567890123456' },
  { id: 'mat_083', nameFa: 'دی‌کلرومتان خلوص بالا', nameEn: 'Dichloromethane High Purity', cas: '75-09-2', role: 'Solvent', finalProduct: 'حلال پلیمریزاسیون و کوتینگ', finalProductEn: 'Polymer Solvent', pharmacopoeia: 'EP', irc: '8334567890123456' },
  { id: 'mat_084', nameFa: 'اتیل استات گرید دارویی', nameEn: 'Ethyl Acetate Pharma Grade', cas: '141-78-6', role: 'Solvent', finalProduct: 'حلال سنتز مواد موثره', finalProductEn: 'Synthesis Solvent', pharmacopoeia: 'USP', irc: '8434567890123456' },

  // 85-88: Intermediates
  { id: 'mat_085', nameFa: '۴-آمینوفنول', nameEn: '4-Aminophenol PAP', cas: '123-30-8', role: 'Intermediate', finalProduct: 'واسطه سنتز استامینوفن', finalProductEn: 'Paracetamol Intermediate', pharmacopoeia: 'In-house', irc: '8534567890123456' },
  { id: 'mat_086', nameFa: '۶-آمینوپنی‌سیلانیک اسید', nameEn: '6-Aminopenicillanic Acid 6-APA', cas: '551-68-8', role: 'Intermediate', finalProduct: 'واسطه پنی‌سیلین‌های نیمه‌سنتزی', finalProductEn: 'Penicillins Intermediate', pharmacopoeia: 'In-house', irc: '8634567890123456' },
  { id: 'mat_087', nameFa: '۷-آمینو دساستوکسی سفالوسپورانیک اسید', nameEn: '7-ADCA', cas: '22252-43-3', role: 'Intermediate', finalProduct: 'واسطه سنتز سفالکسین', finalProductEn: 'Cephalexin Intermediate', pharmacopoeia: 'In-house', irc: '8734567890123456' },
  { id: 'mat_088', nameFa: 'ان-متیل پیرولیدون', nameEn: 'N-Methyl-2-pyrrolidone NMP', cas: '872-50-4', role: 'Intermediate', finalProduct: 'واسطه سنتز پپتیدها', finalProductEn: 'Peptide Synthesis Reagent', pharmacopoeia: 'In-house', irc: '8834567890123456' },

  // 89-93: Veterinary APIs
  { id: 'mat_089', nameFa: 'تایلوزین تارتارات دامپزشکی', nameEn: 'Tylosin Tartrate Vet', cas: '1405-54-5', role: 'API', finalProduct: 'پودر محلول در آب تایلوزین', finalProductEn: 'Tylosin Soluble Powder', pharmacopoeia: 'BP', irc: '8934567890123456' },
  { id: 'mat_090', nameFa: 'انروفلوکساسین دامپزشکی', nameEn: 'Enrofloxacin Vet', cas: '93106-60-6', role: 'API', finalProduct: 'محلول خوراکی انروفلوکساسین', finalProductEn: 'Enrofloxacin Oral Solution', pharmacopoeia: 'USP', irc: '9034567890123456' },
  { id: 'mat_091', nameFa: 'ایورمکتین دامپزشکی', nameEn: 'Ivermectin Vet', cas: '70288-86-7', role: 'API', finalProduct: 'محلول تزریقی ایورمکتین ۱٪', finalProductEn: 'Ivermectin 1% Injection', pharmacopoeia: 'USP', irc: '9134567890123456' },
  { id: 'mat_092', nameFa: 'اکسی‌تتراسایکلین دی‌هیدرات دامپزشکی', nameEn: 'Oxytetracycline Dihydrate Vet', cas: '6153-64-6', role: 'API', finalProduct: 'پودر آنتی‌بیوتیک دامی', finalProductEn: 'Oxytetracycline Premix', pharmacopoeia: 'BP', irc: '9234567890123457' },
  { id: 'mat_093', nameFa: 'فلبندازول دامپزشکی', nameEn: 'Flubendazole Vet', cas: '31430-15-6', role: 'API', finalProduct: 'ضدانگل پودری طیور', finalProductEn: 'Flubendazole Anthelmintic', pharmacopoeia: 'EP', irc: '9334567890123456' },

  // 94-100: Packaging Items
  { id: 'mat_094', nameFa: 'فویل آلومینیوم بلیستر ۲۰ میکرون', nameEn: 'Aluminium Foil 20 Micron Blister', cas: '7429-90-5', role: 'Packaging Item', finalProduct: 'بسته‌بندی بلیستر قرص', finalProductEn: 'Tablet Blister Foil', pharmacopoeia: 'In-house', irc: '9434567890123456' },
  { id: 'mat_095', nameFa: 'فیلم پی‌وی‌سی دارویی شفاف ۲۵۰ میکرون', nameEn: 'PVC Film Pharma Clear 250 mic', cas: '9002-86-2', role: 'Packaging Item', finalProduct: 'بلیستر ترموفرمینگ', finalProductEn: 'Thermoforming Blister Film', pharmacopoeia: 'In-house', irc: '9534567890123456' },
  { id: 'mat_096', nameFa: 'فیلم آلو-آلو بلیستر فرم‌پذیر سرد', nameEn: 'Cold-Form Alu-Alu Foil', cas: '7429-90-5', role: 'Packaging Item', finalProduct: 'بلیستر با نفوذناپذیری بالا', finalProductEn: 'High Barrier Blister Foil', pharmacopoeia: 'In-house', irc: '9634567890123456' },
  { id: 'mat_097', nameFa: 'پوکه کپسول ژلاتینی سخت سایز ۰', nameEn: 'Hard Gelatin Capsule Shells Size 0', cas: '9000-70-8', role: 'Packaging Item', finalProduct: 'کپسول‌های دارویی سایز ۰', finalProductEn: 'Hard Gelatin Capsule Size 0', pharmacopoeia: 'USP', irc: '9734567890123456' },
  { id: 'mat_098', nameFa: 'پوکه کپسول ژلاتینی سخت سایز ۰۰', nameEn: 'Hard Gelatin Capsule Shells Size 00', cas: '9000-70-8', role: 'Packaging Item', finalProduct: 'کپسول‌های دارویی سایز ۰۰', finalProductEn: 'Hard Gelatin Capsule Size 00', pharmacopoeia: 'USP', irc: '9834567890123456' },
  { id: 'mat_099', nameFa: 'بطری شیشه‌ای کهربایی تیپ ۳ دارویی ۶۰ سی‌سی', nameEn: 'Amber Glass Bottle Type III 60ml', cas: '65997-17-3', role: 'Packaging Item', finalProduct: 'شیشه شربت‌های خوراکی', finalProductEn: 'Oral Syrup Bottle 60ml', pharmacopoeia: 'USP', irc: '9934567890123456' },
  { id: 'mat_100', nameFa: 'درب آلومینیومی پیل‌آف ۲۸ میلی‌متر با سیل القایی', nameEn: 'Aluminium Pilfer-Proof Cap 28mm', cas: '7429-90-5', role: 'Packaging Item', finalProduct: 'سیل و درب بطری شربت', finalProductEn: 'Pilfer Proof Bottle Cap 28mm', pharmacopoeia: 'In-house', irc: '1004567890123456' }
];

console.log(`Prepared ${RAW_MATERIALS.length} Materials.`);

export { RAW_MATERIALS };
