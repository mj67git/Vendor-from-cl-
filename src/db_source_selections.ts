export interface InitialSourceSelection {
  id: string;
  materialKey: string;
  category: string;
  vendorId: string;
  reason: string;
  decidedBy: string;
  decidedAt: string;
}

export const INITIAL_SOURCE_SELECTIONS: InitialSourceSelection[] = [
  {
    "id": "sel_01",
    "materialKey": "Paracetamol",
    "category": "foreign",
    "vendorId": "src_001",
    "reason": "بالاترین امتیاز کیفی و اقتصادی در ممیزی جامع، سابقه پنج سال تامین پایدار بدون OOS",
    "decidedBy": "کمیته بازرگانی و تضمین کیفیت",
    "decidedAt": "2026-02-15T10:00:00.000Z"
  },
  {
    "id": "sel_02",
    "materialKey": "Ibuprofen",
    "category": "foreign",
    "vendorId": "src_002",
    "reason": "تاییدیه کامل فارماکوپه USP و قیمت رقابتی نسبت به سایر گزینه‌ها",
    "decidedBy": "دکتر صمدی (مدیر کیفیت)",
    "decidedAt": "2026-02-16T11:00:00.000Z"
  },
  {
    "id": "sel_03",
    "materialKey": "Amoxicillin Trihydrate",
    "category": "foreign",
    "vendorId": "src_003",
    "reason": "گرید دارویی استاندارد با اندازه ذرات مناسب کپسوله‌سازی و تاییدیه WHO-GMP",
    "decidedBy": "کمیته فنی خرید",
    "decidedAt": "2026-02-17T09:30:00.000Z"
  },
  {
    "id": "sel_04",
    "materialKey": "Cefixime Trihydrate",
    "category": "foreign",
    "vendorId": "src_004",
    "reason": "ثبت IRC معتبر و سابقه موفق ترخیص و آزمایش‌های آزمایشی",
    "decidedBy": "مهندس رضایی",
    "decidedAt": "2026-02-18T14:00:00.000Z"
  },
  {
    "id": "sel_05",
    "materialKey": "Metformin Hydrochloride",
    "category": "foreign",
    "vendorId": "src_005",
    "reason": "سورس تایید شده با گرید A و مدارک کامل معتبرسازی",
    "decidedBy": "کمیته خرید راهبردی",
    "decidedAt": "2026-02-19T10:15:00.000Z"
  },
  {
    "id": "sel_06",
    "materialKey": "Microcrystalline Cellulose PH 101",
    "category": "domestic",
    "vendorId": "src_051",
    "reason": "تامین داخلی مستقیم، حذف ریسک‌های تخصیص ارز و کیفیت منطبق با فارماکوپه",
    "decidedBy": "واحد برنامه‌ریزی و خرید",
    "decidedAt": "2026-02-20T08:45:00.000Z"
  },
  {
    "id": "sel_07",
    "materialKey": "Magnesium Stearate Vegetable",
    "category": "domestic",
    "vendorId": "src_054",
    "reason": "گواهی BSE/TSE Free، خلوص گیاهی و زمان تحویل فوری",
    "decidedBy": "واحد تضمین کیفیت",
    "decidedAt": "2026-02-21T13:20:00.000Z"
  },
  {
    "id": "sel_08",
    "materialKey": "Aluminium Foil 20 Micron Blister",
    "category": "packaging",
    "vendorId": "src_094",
    "reason": "نفوذناپذیری حرارتی و پوشش بهینه بلیستر مطابق استانداردهای نهایی بسته‌بندی",
    "decidedBy": "کمیته ملزومات بسته‌بندی",
    "decidedAt": "2026-02-22T11:00:00.000Z"
  },
  {
    "id": "sel_09",
    "materialKey": "Tylosin Tartrate Vet",
    "category": "veterinary",
    "vendorId": "src_089",
    "reason": "استاندارد معتبر داروهای دامی و گواهی سلامت و تحلیل کامل بچ",
    "decidedBy": "مدیر بخش دامپزشکی",
    "decidedAt": "2026-02-23T15:00:00.000Z"
  }
];
