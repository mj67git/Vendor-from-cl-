import type { Vendor } from './types';

export const INITIAL_VENDORS_DB: Vendor[] = [
  {
    "id": "src_001",
    "category": "foreign",
    "materialId": "mat_001",
    "material": "استامینوفن",
    "materialEn": "Paracetamol",
    "cas": "103-90-2",
    "irc": "1234567890123456",
    "name": "Sinoway International Ltd.",
    "nameEn": "Sinoway International Ltd.",
    "country": "آلمان",
    "grade": "B",
    "status": "مشروط",
    "scores": {
      "commercial": 78,
      "qa": 75,
      "planning": 72,
      "finance": 76
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 75,
        "oosHistory": 77,
        "coaAccuracy": 74
      },
      "planning": {
        "onTimeDelivery": 72,
        "leadTime": 73
      },
      "finance": {
        "paymentTerms": 76,
        "creditRating": 74
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +86 592 585 3888 | ایمیل: sales@sinowaychem.com | رابط: Helen Chen",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_jfpw5cx",
        "action": "ثبت اولیه سورس Sinoway International Ltd. برای ماده استامینوفن",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_7zwckdz",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_kd75yq5",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_001_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده استامینوفن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_001_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده استامینوفن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_001_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده استامینوفن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_001",
    "supplierId": "bp_sup_051",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_002",
    "category": "foreign",
    "materialId": "mat_002",
    "material": "ایبوپروفن",
    "materialEn": "Ibuprofen",
    "cas": "15687-27-1",
    "irc": "2234567890123456",
    "name": "Helm AG Pharma Division",
    "nameEn": "Helm AG Pharma Division",
    "country": "سوئیس",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 86,
      "planning": 85,
      "finance": 93
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 86,
        "oosHistory": 88,
        "coaAccuracy": 85
      },
      "planning": {
        "onTimeDelivery": 85,
        "leadTime": 86
      },
      "finance": {
        "paymentTerms": 93,
        "creditRating": 91
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 2375-0 | ایمیل: pharma@helmag.com | رابط: Markus Schmidt",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_5i5xz45",
        "action": "ثبت اولیه سورس Helm AG Pharma Division برای ماده ایبوپروفن",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_qykuj29",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_xo2z89d",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_002_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایبوپروفن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_002_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایبوپروفن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_002_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایبوپروفن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_002",
    "supplierId": "bp_sup_052",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_003",
    "category": "foreign",
    "materialId": "mat_003",
    "material": "آموکسی‌سیلین تری‌هیدرات",
    "materialEn": "Amoxicillin Trihydrate",
    "cas": "61336-70-7",
    "irc": "3234567890123456",
    "name": "Barentz International B.V.",
    "nameEn": "Barentz International B.V.",
    "country": "چین",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 97,
      "planning": 73,
      "finance": 88
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 97,
        "oosHistory": 99,
        "coaAccuracy": 96
      },
      "planning": {
        "onTimeDelivery": 73,
        "leadTime": 74
      },
      "finance": {
        "paymentTerms": 88,
        "creditRating": 86
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +31 23 567 3456 | ایمیل: info@barentz.com | رابط: Wouter Janssen",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_weyix3t",
        "action": "ثبت اولیه سورس Barentz International B.V. برای ماده آموکسی‌سیلین تری‌هیدرات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_j6psqot",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_uwuofg5",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_003_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آموکسی‌سیلین تری‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_003_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آموکسی‌سیلین تری‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_003_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آموکسی‌سیلین تری‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_003",
    "supplierId": "bp_sup_053",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_004",
    "category": "foreign",
    "materialId": "mat_004",
    "material": "سفیکسیم تری‌هیدرات",
    "materialEn": "Cefixime Trihydrate",
    "cas": "79350-37-1",
    "irc": "4234567890123456",
    "name": "Brenntag Specialties Pharma",
    "nameEn": "Brenntag Specialties Pharma",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 85,
      "planning": 86,
      "finance": 83
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 85,
        "oosHistory": 87,
        "coaAccuracy": 84
      },
      "planning": {
        "onTimeDelivery": 86,
        "leadTime": 87
      },
      "finance": {
        "paymentTerms": 83,
        "creditRating": 81
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 201 6496-0 | ایمیل: pharma-emea@brenntag.com | رابط: Dirk Becker",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_tewpc6p",
        "action": "ثبت اولیه سورس Brenntag Specialties Pharma برای ماده سفیکسیم تری‌هیدرات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_e9fxsu4",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_2074vnt",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_004_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفیکسیم تری‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_004_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفیکسیم تری‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_004_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفیکسیم تری‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_004",
    "supplierId": "bp_sup_054",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_005",
    "category": "foreign",
    "materialId": "mat_005",
    "material": "متفورمین هیدروکلراید",
    "materialEn": "Metformin Hydrochloride",
    "cas": "1115-70-4",
    "irc": "5234567890123456",
    "name": "IMCD Group N.V.",
    "nameEn": "IMCD Group N.V.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 96,
      "planning": 74,
      "finance": 78
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 96,
        "oosHistory": 98,
        "coaAccuracy": 95
      },
      "planning": {
        "onTimeDelivery": 74,
        "leadTime": 75
      },
      "finance": {
        "paymentTerms": 78,
        "creditRating": 76
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +31 10 290 8684 | ایمیل: pharma@imcdgroup.com | رابط: Lars van Leeuwen",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_u26blgd",
        "action": "ثبت اولیه سورس IMCD Group N.V. برای ماده متفورمین هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_td72xyj",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_n71nxqq",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_005_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متفورمین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_005_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متفورمین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_005_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متفورمین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_005",
    "supplierId": "bp_sup_055",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_006",
    "category": "foreign",
    "materialId": "mat_006",
    "material": "کلوپیدوگرل بی‌سولفات",
    "materialEn": "Clopidogrel Bisulfate",
    "cas": "120202-66-6",
    "irc": "6234567890123456",
    "name": "Caldic B.V. Life Sciences",
    "nameEn": "Caldic B.V. Life Sciences",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 84,
      "planning": 87,
      "finance": 95
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 84,
        "oosHistory": 86,
        "coaAccuracy": 83
      },
      "planning": {
        "onTimeDelivery": 87,
        "leadTime": 88
      },
      "finance": {
        "paymentTerms": 95,
        "creditRating": 93
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +32 3 870 48 11 | ایمیل: pharma@caldic.com | رابط: Annelies Claes",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_1gge69x",
        "action": "ثبت اولیه سورس Caldic B.V. Life Sciences برای ماده کلوپیدوگرل بی‌سولفات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_we8tzo9",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_stum2x6",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_006_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلوپیدوگرل بی‌سولفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_006_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلوپیدوگرل بی‌سولفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_006_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلوپیدوگرل بی‌سولفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_006",
    "supplierId": "bp_sup_056",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_007",
    "category": "foreign",
    "materialId": "mat_007",
    "material": "آتورواستاتین کلسیم",
    "materialEn": "Atorvastatin Calcium",
    "cas": "134523-03-8",
    "irc": "7234567890123456",
    "name": "Safic-Alcan Pharma",
    "nameEn": "Safic-Alcan Pharma",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 95,
      "planning": 75,
      "finance": 90
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 95,
        "oosHistory": 97,
        "coaAccuracy": 94
      },
      "planning": {
        "onTimeDelivery": 75,
        "leadTime": 76
      },
      "finance": {
        "paymentTerms": 90,
        "creditRating": 88
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +33 1 46 92 64 64 | ایمیل: pharma@safic-alcan.com | رابط: Philippe Martin",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_zkl31bv",
        "action": "ثبت اولیه سورس Safic-Alcan Pharma برای ماده آتورواستاتین کلسیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_qsbywjz",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_vi2un50",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_007_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آتورواستاتین کلسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_007_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آتورواستاتین کلسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_007_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آتورواستاتین کلسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_007",
    "supplierId": "bp_sup_057",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_008",
    "category": "foreign",
    "materialId": "mat_008",
    "material": "لوزارتان پتاسیم",
    "materialEn": "Losartan Potassium",
    "cas": "124750-99-8",
    "irc": "8234567890123456",
    "name": "Faravelli Group International",
    "nameEn": "Faravelli Group International",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 83,
      "planning": 88,
      "finance": 85
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 83,
        "oosHistory": 85,
        "coaAccuracy": 82
      },
      "planning": {
        "onTimeDelivery": 88,
        "leadTime": 89
      },
      "finance": {
        "paymentTerms": 85,
        "creditRating": 83
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +39 02 84893 1 | ایمیل: pharma@faravelli.it | رابط: Marco Rossi",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_gnj1s30",
        "action": "ثبت اولیه سورس Faravelli Group International برای ماده لوزارتان پتاسیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_8818207",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_evz8a8y",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_008_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لوزارتان پتاسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_008_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لوزارتان پتاسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_008_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لوزارتان پتاسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_008",
    "supplierId": "bp_sup_058",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_009",
    "category": "foreign",
    "materialId": "mat_009",
    "material": "امپرازول",
    "materialEn": "Omeprazole",
    "cas": "73590-58-6",
    "irc": "9234567890123456",
    "name": "Azelis Pharma Division",
    "nameEn": "Azelis Pharma Division",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 94,
      "planning": 76,
      "finance": 80
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 94,
        "oosHistory": 96,
        "coaAccuracy": 93
      },
      "planning": {
        "onTimeDelivery": 76,
        "leadTime": 77
      },
      "finance": {
        "paymentTerms": 80,
        "creditRating": 78
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +32 3 613 01 20 | ایمیل: pharma@azelis.com | رابط: Sophie Dubois",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_h1ya9jk",
        "action": "ثبت اولیه سورس Azelis Pharma Division برای ماده امپرازول",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_rwnnax6",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_hl2lbx2",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_009_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-00901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده امپرازول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_009_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-00902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده امپرازول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_009_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-00903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده امپرازول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_009",
    "supplierId": "bp_sup_059",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_010",
    "category": "foreign",
    "materialId": "mat_010",
    "material": "پانتوپرازول سدیم",
    "materialEn": "Pantoprazole Sodium",
    "cas": "138786-67-1",
    "irc": "1034567890123456",
    "name": "CBC Co., Ltd. Medical Dept",
    "nameEn": "CBC Co., Ltd. Medical Dept",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 82,
      "planning": 89,
      "finance": 97
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 82,
        "oosHistory": 84,
        "coaAccuracy": 81
      },
      "planning": {
        "onTimeDelivery": 89,
        "leadTime": 90
      },
      "finance": {
        "paymentTerms": 97,
        "creditRating": 95
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 3536 4500 | ایمیل: pharma@cbc.co.jp | رابط: Hiroshi Sato",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_mt98h1z",
        "action": "ثبت اولیه سورس CBC Co., Ltd. Medical Dept برای ماده پانتوپرازول سدیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_vvw75oo",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_4v2mzi5",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_010_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پانتوپرازول سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_010_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پانتوپرازول سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_010_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پانتوپرازول سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_010",
    "supplierId": "bp_sup_060",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_011",
    "category": "foreign",
    "materialId": "mat_011",
    "material": "سیتریزین هیدروکلراید",
    "materialEn": "Cetirizine Hydrochloride",
    "cas": "83881-52-1",
    "irc": "1134567890123456",
    "name": "Mitsubishi Corporation Life Science",
    "nameEn": "Mitsubishi Corp Life Science",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 93,
      "planning": 77,
      "finance": 92
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 93,
        "oosHistory": 95,
        "coaAccuracy": 92
      },
      "planning": {
        "onTimeDelivery": 77,
        "leadTime": 78
      },
      "finance": {
        "paymentTerms": 92,
        "creditRating": 90
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 3210 2121 | ایمیل: life.science@mitsubishicorp.com | رابط: Takashi Ono",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_yix5gd8",
        "action": "ثبت اولیه سورس Mitsubishi Corporation Life Science برای ماده سیتریزین هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_1egg4me",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_313cnau",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_011_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیتریزین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_011_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیتریزین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_011_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیتریزین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_011",
    "supplierId": "bp_sup_061",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_012",
    "category": "foreign",
    "materialId": "mat_012",
    "material": "فلوکستین هیدروکلراید",
    "materialEn": "Fluoxetine Hydrochloride",
    "cas": "56296-78-7",
    "irc": "1234567890123457",
    "name": "Sojitz Corporation Chemicals",
    "nameEn": "Sojitz Corporation Chemicals",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 81,
      "planning": 90,
      "finance": 87
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 81,
        "oosHistory": 83,
        "coaAccuracy": 80
      },
      "planning": {
        "onTimeDelivery": 90,
        "leadTime": 91
      },
      "finance": {
        "paymentTerms": 87,
        "creditRating": 85
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 6871 5000 | ایمیل: chem@sojitz.com | رابط: Yuki Takahashi",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_2klokjc",
        "action": "ثبت اولیه سورس Sojitz Corporation Chemicals برای ماده فلوکستین هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_f1pvbwa",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_dj99noo",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_012_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فلوکستین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_012_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فلوکستین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_012_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فلوکستین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_012",
    "supplierId": "bp_sup_062",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_013",
    "category": "foreign",
    "materialId": "mat_013",
    "material": "گاباپنتین",
    "materialEn": "Gabapentin",
    "cas": "60142-96-3",
    "irc": "1334567890123456",
    "name": "Marubeni Corporation Chemicals",
    "nameEn": "Marubeni Corp Chemicals Dept",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 92,
      "planning": 78,
      "finance": 82
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 92,
        "oosHistory": 94,
        "coaAccuracy": 91
      },
      "planning": {
        "onTimeDelivery": 78,
        "leadTime": 79
      },
      "finance": {
        "paymentTerms": 82,
        "creditRating": 80
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 3282 2111 | ایمیل: pharma@marubeni.com | رابط: Daiki Ito",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_28kxzq8",
        "action": "ثبت اولیه سورس Marubeni Corporation Chemicals برای ماده گاباپنتین",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_xtcdcm7",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_ymte44m",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_013_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده گاباپنتین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_013_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده گاباپنتین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_013_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده گاباپنتین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_013",
    "supplierId": "bp_sup_063",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_014",
    "category": "foreign",
    "materialId": "mat_014",
    "material": "پرگابالین",
    "materialEn": "Pregabalin",
    "cas": "148553-50-8",
    "irc": "1434567890123456",
    "name": "Shanghai Desano Chemical Pharma",
    "nameEn": "Shanghai Desano Chemical Pharma",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 80,
      "planning": 91,
      "finance": 77
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 80,
        "oosHistory": 82,
        "coaAccuracy": 79
      },
      "planning": {
        "onTimeDelivery": 91,
        "leadTime": 92
      },
      "finance": {
        "paymentTerms": 77,
        "creditRating": 75
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +86 21 5132 3388 | ایمیل: desano@desano.com | رابط: Zhang Lei",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_kxyfslo",
        "action": "ثبت اولیه سورس Shanghai Desano Chemical Pharma برای ماده پرگابالین",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_nag6qop",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_8ccc0zb",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_014_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پرگابالین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_014_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پرگابالین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_014_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پرگابالین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_014",
    "supplierId": "bp_sup_064",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_015",
    "category": "foreign",
    "materialId": "mat_015",
    "material": "والزارتان",
    "materialEn": "Valsartan",
    "cas": "137862-53-4",
    "irc": "1534567890123456",
    "name": "Huahai US Inc. Distribution",
    "nameEn": "Huahai US Inc.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 91,
      "planning": 79,
      "finance": 94
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 91,
        "oosHistory": 93,
        "coaAccuracy": 90
      },
      "planning": {
        "onTimeDelivery": 79,
        "leadTime": 80
      },
      "finance": {
        "paymentTerms": 94,
        "creditRating": 92
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 609 655 1688 | ایمیل: sales@huahaius.com | رابط: Robert Miller",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_hw7sg1i",
        "action": "ثبت اولیه سورس Huahai US Inc. Distribution برای ماده والزارتان",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_phxdcji",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_fvg5g5l",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_015_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده والزارتان مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_015_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده والزارتان مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_015_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده والزارتان مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_015",
    "supplierId": "bp_sup_065",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_016",
    "category": "foreign",
    "materialId": "mat_016",
    "material": "سرترالین هیدروکلراید",
    "materialEn": "Sertraline Hydrochloride",
    "cas": "79559-97-0",
    "irc": "1634567890123456",
    "name": "LGM Pharma LLC",
    "nameEn": "LGM Pharma LLC",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 79,
      "planning": 92,
      "finance": 89
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 79,
        "oosHistory": 81,
        "coaAccuracy": 78
      },
      "planning": {
        "onTimeDelivery": 92,
        "leadTime": 93
      },
      "finance": {
        "paymentTerms": 89,
        "creditRating": 87
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 800 881 8210 | ایمیل: api@lgmpharma.com | رابط: Michael Green",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_wzd9uib",
        "action": "ثبت اولیه سورس LGM Pharma LLC برای ماده سرترالین هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_tzb8bmj",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_f124cit",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_016_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سرترالین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_016_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سرترالین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_016_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سرترالین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_016",
    "supplierId": "bp_sup_066",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_017",
    "category": "foreign",
    "materialId": "mat_017",
    "material": "سیپروفلوکساسین هیدروکلراید",
    "materialEn": "Ciprofloxacin Hydrochloride",
    "cas": "86393-32-0",
    "irc": "1734567890123456",
    "name": "Aceto Corporation API Source",
    "nameEn": "Aceto Corporation",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 90,
      "planning": 80,
      "finance": 84
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 90,
        "oosHistory": 92,
        "coaAccuracy": 89
      },
      "planning": {
        "onTimeDelivery": 80,
        "leadTime": 81
      },
      "finance": {
        "paymentTerms": 84,
        "creditRating": 82
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 516 627 6000 | ایمیل: info@aceto.com | رابط: David Brown",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_bpsyqy3",
        "action": "ثبت اولیه سورس Aceto Corporation API Source برای ماده سیپروفلوکساسین هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_j2m0sdo",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_h0h90gc",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_017_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیپروفلوکساسین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_017_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیپروفلوکساسین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_017_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیپروفلوکساسین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_017",
    "supplierId": "bp_sup_067",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_018",
    "category": "foreign",
    "materialId": "mat_018",
    "material": "آزیترومایسین دی‌هیدرات",
    "materialEn": "Azithromycin Dihydrate",
    "cas": "117772-70-0",
    "irc": "1834567890123456",
    "name": "Spectrum Chemical Mfg. Corp.",
    "nameEn": "Spectrum Chemical Mfg. Corp.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 78,
      "planning": 93,
      "finance": 79
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 78,
        "oosHistory": 80,
        "coaAccuracy": 77
      },
      "planning": {
        "onTimeDelivery": 93,
        "leadTime": 94
      },
      "finance": {
        "paymentTerms": 79,
        "creditRating": 77
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 800 772 8786 | ایمیل: sales@spectrumchemical.com | رابط: James Wilson",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_vkqotya",
        "action": "ثبت اولیه سورس Spectrum Chemical Mfg. Corp. برای ماده آزیترومایسین دی‌هیدرات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_t3h36vq",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_co5ogwt",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_018_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آزیترومایسین دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_018_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آزیترومایسین دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_018_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آزیترومایسین دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_018",
    "supplierId": "bp_sup_068",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_019",
    "category": "foreign",
    "materialId": "mat_019",
    "material": "دیکلوفناک سدیم",
    "materialEn": "Diclofenac Sodium",
    "cas": "15307-79-6",
    "irc": "1934567890123456",
    "name": "Signet Chemical Corporation",
    "nameEn": "Signet Chemical Corporation Pvt Ltd",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 89,
      "planning": 81,
      "finance": 96
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 89,
        "oosHistory": 91,
        "coaAccuracy": 88
      },
      "planning": {
        "onTimeDelivery": 81,
        "leadTime": 82
      },
      "finance": {
        "paymentTerms": 96,
        "creditRating": 94
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +91 22 6146 2727 | ایمیل: sales@signetchem.com | رابط: Harish Shah",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_m0ezi56",
        "action": "ثبت اولیه سورس Signet Chemical Corporation برای ماده دیکلوفناک سدیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_svr8nfz",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_6l8zhs2",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_019_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-01901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیکلوفناک سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_019_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-01902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیکلوفناک سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_019_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-01903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیکلوفناک سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_019",
    "supplierId": "bp_sup_069",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_020",
    "category": "foreign",
    "materialId": "mat_020",
    "material": "دیکلوفناک پتاسیم",
    "materialEn": "Diclofenac Potassium",
    "cas": "15307-81-0",
    "irc": "2034567890123456",
    "name": "DKSH Pharma Healthcare",
    "nameEn": "DKSH Pharma Healthcare",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 77,
      "planning": 94,
      "finance": 91
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 77,
        "oosHistory": 79,
        "coaAccuracy": 76
      },
      "planning": {
        "onTimeDelivery": 94,
        "leadTime": 95
      },
      "finance": {
        "paymentTerms": 91,
        "creditRating": 89
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +41 44 386 7272 | ایمیل: healthcare@dksh.com | رابط: Martin Keller",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_hehegtm",
        "action": "ثبت اولیه سورس DKSH Pharma Healthcare برای ماده دیکلوفناک پتاسیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_xwy30r4",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_r071y0c",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_020_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیکلوفناک پتاسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_020_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیکلوفناک پتاسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_020_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیکلوفناک پتاسیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_020",
    "supplierId": "bp_sup_070",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_021",
    "category": "foreign",
    "materialId": "mat_021",
    "material": "فاموتیدین",
    "materialEn": "Famotidine",
    "cas": "76824-35-6",
    "irc": "2134567890123456",
    "name": "Connell Brothers Company",
    "nameEn": "Connell Brothers Company",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 88,
      "planning": 82,
      "finance": 86
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 88,
        "oosHistory": 90,
        "coaAccuracy": 87
      },
      "planning": {
        "onTimeDelivery": 82,
        "leadTime": 83
      },
      "finance": {
        "paymentTerms": 86,
        "creditRating": 84
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +65 6831 6688 | ایمیل: info@connellworld.com | رابط: Ken Tan",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_8s0fxp6",
        "action": "ثبت اولیه سورس Connell Brothers Company برای ماده فاموتیدین",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_s35ao1a",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_fvwnvox",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_021_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فاموتیدین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_021_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فاموتیدین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_021_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فاموتیدین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_021",
    "supplierId": "bp_sup_071",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_022",
    "category": "foreign",
    "materialId": "mat_022",
    "material": "هیدروکلروتیازید",
    "materialEn": "Hydrochlorothiazide",
    "cas": "58-93-5",
    "irc": "2234567890123457",
    "name": "Nordmann Firnhaber GmbH",
    "nameEn": "Nordmann Firnhaber GmbH",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 76,
      "planning": 95,
      "finance": 81
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 76,
        "oosHistory": 78,
        "coaAccuracy": 75
      },
      "planning": {
        "onTimeDelivery": 95,
        "leadTime": 96
      },
      "finance": {
        "paymentTerms": 81,
        "creditRating": 79
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 3687-0 | ایمیل: pharma@nordmann.global | رابط: Claus Becker",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_45aaqyb",
        "action": "ثبت اولیه سورس Nordmann Firnhaber GmbH برای ماده هیدروکلروتیازید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_sjatz4x",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_r3c0roh",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_022_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکلروتیازید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_022_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکلروتیازید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_022_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکلروتیازید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_022",
    "supplierId": "bp_sup_072",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_023",
    "category": "foreign",
    "materialId": "mat_023",
    "material": "آملودیپین بسپلات",
    "materialEn": "Amlodipine Besylate",
    "cas": "111470-99-6",
    "irc": "2334567890123456",
    "name": "Velox GmbH Chemical Raw Materials",
    "nameEn": "Velox GmbH",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 87,
      "planning": 83,
      "finance": 76
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 87,
        "oosHistory": 89,
        "coaAccuracy": 86
      },
      "planning": {
        "onTimeDelivery": 83,
        "leadTime": 84
      },
      "finance": {
        "paymentTerms": 76,
        "creditRating": 74
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 369688-0 | ایمیل: info@velox.com | رابط: Klaus Fischer",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_oqs1ltx",
        "action": "ثبت اولیه سورس Velox GmbH Chemical Raw Materials برای ماده آملودیپین بسپلات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_bf6aoai",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_nqbq24v",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_023_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آملودیپین بسپلات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_023_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آملودیپین بسپلات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_023_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آملودیپین بسپلات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_023",
    "supplierId": "bp_sup_073",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_024",
    "category": "foreign",
    "materialId": "mat_024",
    "material": "متوپرولول سوکسینات",
    "materialEn": "Metoprolol Succinate",
    "cas": "98418-47-4",
    "irc": "2434567890123456",
    "name": "Vivatis Pharma GmbH",
    "nameEn": "Vivatis Pharma GmbH",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 75,
      "planning": 96,
      "finance": 93
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 75,
        "oosHistory": 77,
        "coaAccuracy": 74
      },
      "planning": {
        "onTimeDelivery": 96,
        "leadTime": 97
      },
      "finance": {
        "paymentTerms": 93,
        "creditRating": 91
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 23600-0 | ایمیل: office@vivatis.de | رابط: Thorsten Meier",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_6nl1z4i",
        "action": "ثبت اولیه سورس Vivatis Pharma GmbH برای ماده متوپرولول سوکسینات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_wrr0czp",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_5109d25",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_024_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متوپرولول سوکسینات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_024_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متوپرولول سوکسینات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_024_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متوپرولول سوکسینات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_024",
    "supplierId": "bp_sup_074",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_025",
    "category": "foreign",
    "materialId": "mat_025",
    "material": "کارودیلول",
    "materialEn": "Carvedilol",
    "cas": "72956-09-3",
    "irc": "2534567890123456",
    "name": "Caesar & Loretz GmbH (Caelo)",
    "nameEn": "Caesar & Loretz GmbH Caelo",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 86,
      "planning": 84,
      "finance": 88
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 86,
        "oosHistory": 88,
        "coaAccuracy": 85
      },
      "planning": {
        "onTimeDelivery": 84,
        "leadTime": 85
      },
      "finance": {
        "paymentTerms": 88,
        "creditRating": 86
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 2103 4994-0 | ایمیل: info@caelo.de | رابط: Dr. Julia Krause",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_26nlxe3",
        "action": "ثبت اولیه سورس Caesar & Loretz GmbH (Caelo) برای ماده کارودیلول",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_njoes7w",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_hs4mv14",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_025_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کارودیلول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_025_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کارودیلول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_025_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کارودیلول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_025",
    "supplierId": "bp_sup_075",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_026",
    "category": "foreign",
    "materialId": "mat_026",
    "material": "اس‌سیتالوپرام اگزالات",
    "materialEn": "Escitalopram Oxalate",
    "cas": "219861-08-2",
    "irc": "2634567890123456",
    "name": "شرکت بازرگانی شفا دارو",
    "nameEn": "Shafa Darou Commercial Co.",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 97,
      "planning": 72,
      "finance": 83
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 97,
        "oosHistory": 99,
        "coaAccuracy": 96
      },
      "planning": {
        "onTimeDelivery": 72,
        "leadTime": 73
      },
      "finance": {
        "paymentTerms": 83,
        "creditRating": 81
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88710000 | ایمیل: commerce@shafadarou.ir | رابط: مهندس کاظمیان",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_5t8dffx",
        "action": "ثبت اولیه سورس شرکت بازرگانی شفا دارو برای ماده اس‌سیتالوپرام اگزالات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_gewzzjr",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_xs1hnou",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_026_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اس‌سیتالوپرام اگزالات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_026_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اس‌سیتالوپرام اگزالات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_026_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اس‌سیتالوپرام اگزالات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_026",
    "supplierId": "bp_sup_076",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_027",
    "category": "foreign",
    "materialId": "mat_027",
    "material": "دولوکستین هیدروکلراید",
    "materialEn": "Duloxetine Hydrochloride",
    "cas": "136434-34-9",
    "irc": "2734567890123456",
    "name": "بازرگانی دارویی پخش فردوس",
    "nameEn": "Ferdous Pharma Distribution",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 85,
      "planning": 85,
      "finance": 78
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 85,
        "oosHistory": 87,
        "coaAccuracy": 84
      },
      "planning": {
        "onTimeDelivery": 85,
        "leadTime": 86
      },
      "finance": {
        "paymentTerms": 78,
        "creditRating": 76
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-66800000 | ایمیل: info@ferdous-pharma.com | رابط: دکتر صابری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_nno8r07",
        "action": "ثبت اولیه سورس بازرگانی دارویی پخش فردوس برای ماده دولوکستین هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_ukhtq52",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_pwfl4cz",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_027_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دولوکستین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_027_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دولوکستین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_027_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دولوکستین هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_027",
    "supplierId": "bp_sup_077",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_028",
    "category": "foreign",
    "materialId": "mat_028",
    "material": "لووتیروکسین سدیم",
    "materialEn": "Levothyroxine Sodium",
    "cas": "55-03-8",
    "irc": "2834567890123456",
    "name": "تامین دارو سلامت پیشرو",
    "nameEn": "Salamat Pishro Pharma Trading",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 96,
      "planning": 73,
      "finance": 95
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 96,
        "oosHistory": 98,
        "coaAccuracy": 95
      },
      "planning": {
        "onTimeDelivery": 73,
        "leadTime": 74
      },
      "finance": {
        "paymentTerms": 95,
        "creditRating": 93
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88304000 | ایمیل: info@salamatpishro.ir | رابط: مهندس یوسفی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_nh2n0um",
        "action": "ثبت اولیه سورس تامین دارو سلامت پیشرو برای ماده لووتیروکسین سدیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_nhzejk0",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_qv1lpeh",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_028_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لووتیروکسین سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_028_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لووتیروکسین سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_028_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لووتیروکسین سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_028",
    "supplierId": "bp_sup_078",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_029",
    "category": "foreign",
    "materialId": "mat_029",
    "material": "پردنیزولون",
    "materialEn": "Prednisolone",
    "cas": "50-24-8",
    "irc": "2934567890123456",
    "name": "شرکت پارس آزمون کیمیا",
    "nameEn": "Pars Azmoon Kimia Trading",
    "country": "چین",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 84,
      "planning": 86,
      "finance": 90
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 84,
        "oosHistory": 86,
        "coaAccuracy": 83
      },
      "planning": {
        "onTimeDelivery": 86,
        "leadTime": 87
      },
      "finance": {
        "paymentTerms": 90,
        "creditRating": 88
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-66005000 | ایمیل: kimia@parsazmoon.com | رابط: دکتر افشار",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_zxbl9l0",
        "action": "ثبت اولیه سورس شرکت پارس آزمون کیمیا برای ماده پردنیزولون",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_8wek8rw",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_ns0aj7g",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_029_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-02901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پردنیزولون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_029_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-02902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پردنیزولون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_029_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-02903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پردنیزولون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_029",
    "supplierId": "bp_sup_079",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_030",
    "category": "foreign",
    "materialId": "mat_030",
    "material": "دگزامتازون سدیم فسفات",
    "materialEn": "Dexamethasone Sodium Phosphate",
    "cas": "2392-39-4",
    "irc": "3034567890123456",
    "name": "پویا داروی ایرانیان",
    "nameEn": "Pouya Darou Iranian Co.",
    "country": "چین",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 95,
      "planning": 74,
      "finance": 85
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 95,
        "oosHistory": 97,
        "coaAccuracy": 94
      },
      "planning": {
        "onTimeDelivery": 74,
        "leadTime": 75
      },
      "finance": {
        "paymentTerms": 85,
        "creditRating": 83
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22090000 | ایمیل: sales@pouyadarou.com | رابط: مهندس اکبری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_biqi6rc",
        "action": "ثبت اولیه سورس پویا داروی ایرانیان برای ماده دگزامتازون سدیم فسفات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_7b23a0f",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_a48p92o",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_030_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دگزامتازون سدیم فسفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_030_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دگزامتازون سدیم فسفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_030_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دگزامتازون سدیم فسفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_030",
    "supplierId": "bp_sup_080",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_031",
    "category": "domestic",
    "materialId": "mat_031",
    "material": "بتامتازون دی‌پروپیونات",
    "materialEn": "Betamethasone Dipropionate",
    "cas": "5593-20-4",
    "irc": "3134567890123456",
    "name": "کیمیا داروی فردا",
    "nameEn": "Kimia Darou Farda Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 83,
      "planning": 87,
      "finance": 80
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 83,
        "oosHistory": 85,
        "coaAccuracy": 82
      },
      "planning": {
        "onTimeDelivery": 87,
        "leadTime": 88
      },
      "finance": {
        "paymentTerms": 80,
        "creditRating": 78
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88882000 | ایمیل: info@kimiadarou.ir | رابط: دکتر جعفری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_mqf62rd",
        "action": "ثبت اولیه سورس کیمیا داروی فردا برای ماده بتامتازون دی‌پروپیونات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_8kssr38",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_s839bcu",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_031_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بتامتازون دی‌پروپیونات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_031_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بتامتازون دی‌پروپیونات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_031_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بتامتازون دی‌پروپیونات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_017",
    "supplierId": "bp_sup_081",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_032",
    "category": "domestic",
    "materialId": "mat_032",
    "material": "هیدروکورتیزون استات",
    "materialEn": "Hydrocortisone Acetate",
    "cas": "50-03-3",
    "irc": "3234567890123457",
    "name": "پارسیان دارو تجارت",
    "nameEn": "Parsian Darou Tejarat",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 94,
      "planning": 75,
      "finance": 97
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 94,
        "oosHistory": 96,
        "coaAccuracy": 93
      },
      "planning": {
        "onTimeDelivery": 75,
        "leadTime": 76
      },
      "finance": {
        "paymentTerms": 97,
        "creditRating": 95
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 031-36200000 | ایمیل: info@parsiandarou.com | رابط: مهندس صادقی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_wb7e3qq",
        "action": "ثبت اولیه سورس پارسیان دارو تجارت برای ماده هیدروکورتیزون استات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_7pqm78n",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_2333j17",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_032_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکورتیزون استات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_032_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکورتیزون استات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_032_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکورتیزون استات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_018",
    "supplierId": "bp_sup_082",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_033",
    "category": "domestic",
    "materialId": "mat_033",
    "material": "ملوکسیکام",
    "materialEn": "Meloxicam",
    "cas": "71125-38-7",
    "irc": "3334567890123456",
    "name": "جهان فارما تجارت",
    "nameEn": "Jahan Pharma Trading",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 82,
      "planning": 88,
      "finance": 92
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 82,
        "oosHistory": 84,
        "coaAccuracy": 81
      },
      "planning": {
        "onTimeDelivery": 88,
        "leadTime": 89
      },
      "finance": {
        "paymentTerms": 92,
        "creditRating": 90
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88750000 | ایمیل: info@jahanpharma.ir | رابط: دکتر حیدری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_ipxb8rm",
        "action": "ثبت اولیه سورس جهان فارما تجارت برای ماده ملوکسیکام",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_1opl8qt",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_8h83amo",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_033_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ملوکسیکام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_033_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ملوکسیکام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_033_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ملوکسیکام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_019",
    "supplierId": "bp_sup_083",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_034",
    "category": "domestic",
    "materialId": "mat_034",
    "material": "سلکوکسیب",
    "materialEn": "Celecoxib",
    "cas": "169590-42-5",
    "irc": "3434567890123456",
    "name": "آریا داروی پارس",
    "nameEn": "Aria Darou Pars",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 93,
      "planning": 76,
      "finance": 87
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 93,
        "oosHistory": 95,
        "coaAccuracy": 92
      },
      "planning": {
        "onTimeDelivery": 76,
        "leadTime": 77
      },
      "finance": {
        "paymentTerms": 87,
        "creditRating": 85
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 071-36280000 | ایمیل: info@ariadarou.ir | رابط: مهندس زارع",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_vlwh9sw",
        "action": "ثبت اولیه سورس آریا داروی پارس برای ماده سلکوکسیب",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_28jvpl0",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_mlxqm8c",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_034_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سلکوکسیب مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_034_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سلکوکسیب مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_034_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سلکوکسیب مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_020",
    "supplierId": "bp_sup_084",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_035",
    "category": "domestic",
    "materialId": "mat_035",
    "material": "آلپرازولام",
    "materialEn": "Alprazolam",
    "cas": "28981-97-7",
    "irc": "3534567890123456",
    "name": "بهستان بهداشت دارو",
    "nameEn": "Behestan Behdasht Pharma Trading",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 81,
      "planning": 89,
      "finance": 82
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 81,
        "oosHistory": 83,
        "coaAccuracy": 80
      },
      "planning": {
        "onTimeDelivery": 89,
        "leadTime": 90
      },
      "finance": {
        "paymentTerms": 82,
        "creditRating": 80
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88775000 | ایمیل: info@behestan.com | رابط: دکتر سلیمانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_nu8q4ep",
        "action": "ثبت اولیه سورس بهستان بهداشت دارو برای ماده آلپرازولام",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_kva1hl3",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_utdtsqw",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_035_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آلپرازولام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_035_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آلپرازولام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_035_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آلپرازولام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_004",
    "supplierId": "bp_sup_085",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_036",
    "category": "domestic",
    "materialId": "mat_036",
    "material": "کلونازپام",
    "materialEn": "Clonazepam",
    "cas": "1622-61-3",
    "irc": "3634567890123456",
    "name": "تدبیر دارو رازی",
    "nameEn": "Tadbir Darou Razi Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 92,
      "planning": 77,
      "finance": 77
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 92,
        "oosHistory": 94,
        "coaAccuracy": 91
      },
      "planning": {
        "onTimeDelivery": 77,
        "leadTime": 78
      },
      "finance": {
        "paymentTerms": 77,
        "creditRating": 75
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88500000 | ایمیل: info@tadbirdarou.com | رابط: مهندس ابراهیمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_m2gz9m7",
        "action": "ثبت اولیه سورس تدبیر دارو رازی برای ماده کلونازپام",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_qm4apf1",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_1bgceac",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_036_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلونازپام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_036_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلونازپام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_036_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلونازپام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_005",
    "supplierId": "bp_sup_086",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_037",
    "category": "domestic",
    "materialId": "mat_037",
    "material": "دیازپام",
    "materialEn": "Diazepam",
    "cas": "439-14-5",
    "irc": "3734567890123456",
    "name": "سینا شیمی تجارت",
    "nameEn": "Sina Shimi Tejarat Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 80,
      "planning": 90,
      "finance": 94
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 80,
        "oosHistory": 82,
        "coaAccuracy": 79
      },
      "planning": {
        "onTimeDelivery": 90,
        "leadTime": 91
      },
      "finance": {
        "paymentTerms": 94,
        "creditRating": 92
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 041-35560000 | ایمیل: sales@sinashimi.com | رابط: دکتر تبریزی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_cyekjdv",
        "action": "ثبت اولیه سورس سینا شیمی تجارت برای ماده دیازپام",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_0w30yo9",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_t87wz5p",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_037_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیازپام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_037_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیازپام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_037_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دیازپام مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_006",
    "supplierId": "bp_sup_087",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_038",
    "category": "domestic",
    "materialId": "mat_038",
    "material": "پروپرانولول هیدروکلراید",
    "materialEn": "Propranolol Hydrochloride",
    "cas": "318-98-9",
    "irc": "3834567890123456",
    "name": "آوا فارما کیمیا",
    "nameEn": "Ava Pharma Kimia",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 91,
      "planning": 78,
      "finance": 89
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 91,
        "oosHistory": 93,
        "coaAccuracy": 90
      },
      "planning": {
        "onTimeDelivery": 78,
        "leadTime": 79
      },
      "finance": {
        "paymentTerms": 89,
        "creditRating": 87
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88370000 | ایمیل: info@avapharma.ir | رابط: مهندس مرادی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_w6oeb2j",
        "action": "ثبت اولیه سورس آوا فارما کیمیا برای ماده پروپرانولول هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_ek0o167",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_bonmuje",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_038_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپرانولول هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_038_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپرانولول هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_038_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپرانولول هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_007",
    "supplierId": "bp_sup_088",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_039",
    "category": "domestic",
    "materialId": "mat_039",
    "material": "آتنولول",
    "materialEn": "Atenolol",
    "cas": "29122-68-7",
    "irc": "3934567890123456",
    "name": "آراد طب داریا",
    "nameEn": "Arad Teb Darya Trading",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 79,
      "planning": 91,
      "finance": 84
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 79,
        "oosHistory": 81,
        "coaAccuracy": 78
      },
      "planning": {
        "onTimeDelivery": 91,
        "leadTime": 92
      },
      "finance": {
        "paymentTerms": 84,
        "creditRating": 82
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22680000 | ایمیل: info@aradteb.com | رابط: دکتر دریایی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_a2bzblc",
        "action": "ثبت اولیه سورس آراد طب داریا برای ماده آتنولول",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_16dar6m",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_htodlgg",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_039_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-03901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آتنولول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_039_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-03902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آتنولول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_039_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-03903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده آتنولول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_008",
    "supplierId": "bp_sup_089",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_040",
    "category": "domestic",
    "materialId": "mat_040",
    "material": "کاپتوپریل",
    "materialEn": "Captopril",
    "cas": "62571-86-2",
    "irc": "4034567890123456",
    "name": "سپهر داروی ایرانیان",
    "nameEn": "Sepehr Darou Iranian",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 90,
      "planning": 79,
      "finance": 79
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 90,
        "oosHistory": 92,
        "coaAccuracy": 89
      },
      "planning": {
        "onTimeDelivery": 79,
        "leadTime": 80
      },
      "finance": {
        "paymentTerms": 79,
        "creditRating": 77
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 051-37650000 | ایمیل: info@sepehrdarou.ir | رابط: مهندس رضایی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_vzgw93a",
        "action": "ثبت اولیه سورس سپهر داروی ایرانیان برای ماده کاپتوپریل",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_tmi1ea4",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_6ysisgf",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_040_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کاپتوپریل مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_040_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کاپتوپریل مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_040_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کاپتوپریل مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_009",
    "supplierId": "bp_sup_090",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_041",
    "category": "domestic",
    "materialId": "mat_041",
    "material": "انالاپریل مالئات",
    "materialEn": "Enalapril Maleate",
    "cas": "76095-16-4",
    "irc": "4134567890123456",
    "name": "نیک فارما کیش",
    "nameEn": "Nik Pharma Kish Trading",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 78,
      "planning": 92,
      "finance": 96
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 78,
        "oosHistory": 80,
        "coaAccuracy": 77
      },
      "planning": {
        "onTimeDelivery": 92,
        "leadTime": 93
      },
      "finance": {
        "paymentTerms": 96,
        "creditRating": 94
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 076-44420000 | ایمیل: info@nikpharma-kish.com | رابط: دکتر نیک‌نژاد",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_qm9neg7",
        "action": "ثبت اولیه سورس نیک فارما کیش برای ماده انالاپریل مالئات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_figavsu",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_brx45mj",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_041_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده انالاپریل مالئات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_041_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده انالاپریل مالئات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_041_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده انالاپریل مالئات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_010",
    "supplierId": "bp_sup_091",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_042",
    "category": "domestic",
    "materialId": "mat_042",
    "material": "کلاریترومایسین",
    "materialEn": "Clarithromycin",
    "cas": "81103-11-9",
    "irc": "4234567890123457",
    "name": "مهرگان داروی البرز",
    "nameEn": "Mehregan Darou Alborz",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 89,
      "planning": 80,
      "finance": 91
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 89,
        "oosHistory": 91,
        "coaAccuracy": 88
      },
      "planning": {
        "onTimeDelivery": 80,
        "leadTime": 81
      },
      "finance": {
        "paymentTerms": 91,
        "creditRating": 89
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 026-34480000 | ایمیل: info@mehregandarou.com | رابط: مهندس کریمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_pde71ic",
        "action": "ثبت اولیه سورس مهرگان داروی البرز برای ماده کلاریترومایسین",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_fsxhjfr",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_c0dp4wu",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_042_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلاریترومایسین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_042_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلاریترومایسین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_042_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کلاریترومایسین مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_011",
    "supplierId": "bp_sup_092",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_043",
    "category": "domestic",
    "materialId": "mat_043",
    "material": "اریترومایسین اتیل‌سوکسینات",
    "materialEn": "Erythromycin Ethylsuccinate",
    "cas": "1264-62-6",
    "irc": "4334567890123456",
    "name": "نگین شیمی رازی",
    "nameEn": "Negin Shimi Razi Trading",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 77,
      "planning": 93,
      "finance": 86
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 77,
        "oosHistory": 79,
        "coaAccuracy": 76
      },
      "planning": {
        "onTimeDelivery": 93,
        "leadTime": 94
      },
      "finance": {
        "paymentTerms": 86,
        "creditRating": 84
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22550000 | ایمیل: info@neginshimi.ir | رابط: دکتر نادری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_5r5it9g",
        "action": "ثبت اولیه سورس نگین شیمی رازی برای ماده اریترومایسین اتیل‌سوکسینات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_47mvq43",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_ngkh3z4",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_043_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اریترومایسین اتیل‌سوکسینات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_043_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اریترومایسین اتیل‌سوکسینات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_043_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اریترومایسین اتیل‌سوکسینات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_012",
    "supplierId": "bp_sup_093",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_044",
    "category": "domestic",
    "materialId": "mat_044",
    "material": "سفالکسین مونوهیدرات",
    "materialEn": "Cephalexin Monohydrate",
    "cas": "23325-78-2",
    "irc": "4434567890123456",
    "name": "کیمیاگران سلامت پاسارگاد",
    "nameEn": "Kimiagaran Salamat Pasargad",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 88,
      "planning": 81,
      "finance": 81
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 88,
        "oosHistory": 90,
        "coaAccuracy": 87
      },
      "planning": {
        "onTimeDelivery": 81,
        "leadTime": 82
      },
      "finance": {
        "paymentTerms": 81,
        "creditRating": 79
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22220000 | ایمیل: info@pasargadpharma.com | رابط: مهندس زمانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_xzt27g9",
        "action": "ثبت اولیه سورس کیمیاگران سلامت پاسارگاد برای ماده سفالکسین مونوهیدرات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_w55ylop",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_0paaz4a",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_044_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفالکسین مونوهیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_044_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفالکسین مونوهیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_044_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفالکسین مونوهیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_013",
    "supplierId": "bp_sup_094",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_045",
    "category": "domestic",
    "materialId": "mat_045",
    "material": "سفازولین سدیم",
    "materialEn": "Cefazolin Sodium",
    "cas": "27164-46-1",
    "irc": "4534567890123456",
    "name": "ارس دارو تجارت",
    "nameEn": "Aras Darou Tejarat",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 76,
      "planning": 94,
      "finance": 76
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 76,
        "oosHistory": 78,
        "coaAccuracy": 75
      },
      "planning": {
        "onTimeDelivery": 94,
        "leadTime": 95
      },
      "finance": {
        "paymentTerms": 76,
        "creditRating": 74
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 041-42020000 | ایمیل: info@arasdarou.com | رابط: دکتر ارسی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_jc3hdxq",
        "action": "ثبت اولیه سورس ارس دارو تجارت برای ماده سفازولین سدیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_yldwpo5",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_8lhdmqr",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_045_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفازولین سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_045_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفازولین سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_045_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفازولین سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_014",
    "supplierId": "bp_sup_095",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_046",
    "category": "domestic",
    "materialId": "mat_046",
    "material": "سفتریامسون سدیم",
    "materialEn": "Ceftriaxone Sodium",
    "cas": "74578-69-1",
    "irc": "4634567890123456",
    "name": "آرتا شیمی داروساز",
    "nameEn": "Arta Shimi Darousaz Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 87,
      "planning": 82,
      "finance": 93
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 87,
        "oosHistory": 89,
        "coaAccuracy": 86
      },
      "planning": {
        "onTimeDelivery": 82,
        "leadTime": 83
      },
      "finance": {
        "paymentTerms": 93,
        "creditRating": 91
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 045-33720000 | ایمیل: info@artashimi.ir | رابط: مهندس حاتمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_3lvf7bg",
        "action": "ثبت اولیه سورس آرتا شیمی داروساز برای ماده سفتریامسون سدیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_x5k3tj3",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_opc7g1b",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_046_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفتریامسون سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_046_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفتریامسون سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_046_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سفتریامسون سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_015",
    "supplierId": "bp_sup_096",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_047",
    "category": "domestic",
    "materialId": "mat_047",
    "material": "لووفلوکساسین همی‌هیدرات",
    "materialEn": "Levofloxacin Hemihydrate",
    "cas": "100986-85-4",
    "irc": "4734567890123456",
    "name": "پایا سلامت کیان",
    "nameEn": "Paya Salamat Kian",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 75,
      "planning": 95,
      "finance": 88
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 75,
        "oosHistory": 77,
        "coaAccuracy": 74
      },
      "planning": {
        "onTimeDelivery": 95,
        "leadTime": 96
      },
      "finance": {
        "paymentTerms": 88,
        "creditRating": 86
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88000000 | ایمیل: info@payasalamat.ir | رابط: دکتر کیانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_fc594b9",
        "action": "ثبت اولیه سورس پایا سلامت کیان برای ماده لووفلوکساسین همی‌هیدرات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_6juexbl",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_hfs4htw",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_047_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لووفلوکساسین همی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_047_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لووفلوکساسین همی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_047_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لووفلوکساسین همی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_016",
    "supplierId": "bp_sup_097",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_048",
    "category": "domestic",
    "materialId": "mat_048",
    "material": "مترونیدازول",
    "materialEn": "Metronidazole",
    "cas": "443-48-1",
    "irc": "4834567890123456",
    "name": "آذر دارو تجارت",
    "nameEn": "Azar Darou Tejarat Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 86,
      "planning": 83,
      "finance": 83
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 86,
        "oosHistory": 88,
        "coaAccuracy": 85
      },
      "planning": {
        "onTimeDelivery": 83,
        "leadTime": 84
      },
      "finance": {
        "paymentTerms": 83,
        "creditRating": 81
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 041-35400000 | ایمیل: info@azardarou.com | رابط: مهندس قاسم‌زاده",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_882z9vu",
        "action": "ثبت اولیه سورس آذر دارو تجارت برای ماده مترونیدازول",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_v0q6h0w",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_xgf85bl",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_048_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده مترونیدازول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_048_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده مترونیدازول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_048_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده مترونیدازول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_017",
    "supplierId": "bp_sup_098",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_049",
    "category": "domestic",
    "materialId": "mat_049",
    "material": "ترامادول هیدروکلراید",
    "materialEn": "Tramadol Hydrochloride",
    "cas": "36282-47-0",
    "irc": "4934567890123456",
    "name": "رستا فارما نوآور",
    "nameEn": "Rasta Pharma Noavar",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 97,
      "planning": 96,
      "finance": 78
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 97,
        "oosHistory": 99,
        "coaAccuracy": 96
      },
      "planning": {
        "onTimeDelivery": 96,
        "leadTime": 97
      },
      "finance": {
        "paymentTerms": 78,
        "creditRating": 76
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88060000 | ایمیل: info@rastapharma.ir | رابط: دکتر رستمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_91eg4xc",
        "action": "ثبت اولیه سورس رستا فارما نوآور برای ماده ترامادول هیدروکلراید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_yo1zdzu",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_ljdrmw6",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_049_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-04901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ترامادول هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_049_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-04902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ترامادول هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_049_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-04903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ترامادول هیدروکلراید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_018",
    "supplierId": "bp_sup_099",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_050",
    "category": "domestic",
    "materialId": "mat_050",
    "material": "کدئین فسفات",
    "materialEn": "Codeine Phosphate",
    "cas": "52-28-8",
    "irc": "5034567890123456",
    "name": "سامان داروی سلامت",
    "nameEn": "Saman Darou Salamat",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 85,
      "planning": 84,
      "finance": 95
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 85,
        "oosHistory": 87,
        "coaAccuracy": 84
      },
      "planning": {
        "onTimeDelivery": 84,
        "leadTime": 85
      },
      "finance": {
        "paymentTerms": 95,
        "creditRating": 93
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88670000 | ایمیل: info@samandarou.com | رابط: مهندس سامانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_h95pkxv",
        "action": "ثبت اولیه سورس سامان داروی سلامت برای ماده کدئین فسفات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_truh6pb",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_9l5dp79",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_050_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کدئین فسفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_050_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کدئین فسفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_050_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کدئین فسفات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_019",
    "supplierId": "bp_sup_100",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_051",
    "category": "domestic",
    "materialId": "mat_051",
    "material": "میکروکریستالین سلولز ۱۰۱",
    "materialEn": "Microcrystalline Cellulose PH 101",
    "cas": "9004-34-6",
    "irc": "5134567890123456",
    "name": "شرکت بازرگانی شفا دارو",
    "nameEn": "Shafa Darou Commercial Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 96,
      "planning": 72,
      "finance": 90
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 96,
        "oosHistory": 98,
        "coaAccuracy": 95
      },
      "planning": {
        "onTimeDelivery": 72,
        "leadTime": 73
      },
      "finance": {
        "paymentTerms": 90,
        "creditRating": 88
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88710000 | ایمیل: commerce@shafadarou.ir | رابط: مهندس کاظمیان",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_ahtrgay",
        "action": "ثبت اولیه سورس شرکت بازرگانی شفا دارو برای ماده میکروکریستالین سلولز ۱۰۱",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_1euyjoy",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_hyhwupp",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_051_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده میکروکریستالین سلولز ۱۰۱ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_051_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده میکروکریستالین سلولز ۱۰۱ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_051_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده میکروکریستالین سلولز ۱۰۱ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_020",
    "supplierId": "bp_sup_076",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_052",
    "category": "domestic",
    "materialId": "mat_052",
    "material": "میکروکریستالین سلولز ۱۰۲",
    "materialEn": "Microcrystalline Cellulose PH 102",
    "cas": "9004-34-6",
    "irc": "5234567890123457",
    "name": "بازرگانی دارویی پخش فردوس",
    "nameEn": "Ferdous Pharma Distribution",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 84,
      "planning": 85,
      "finance": 85
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 84,
        "oosHistory": 86,
        "coaAccuracy": 83
      },
      "planning": {
        "onTimeDelivery": 85,
        "leadTime": 86
      },
      "finance": {
        "paymentTerms": 85,
        "creditRating": 83
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-66800000 | ایمیل: info@ferdous-pharma.com | رابط: دکتر صابری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_zhkfkbl",
        "action": "ثبت اولیه سورس بازرگانی دارویی پخش فردوس برای ماده میکروکریستالین سلولز ۱۰۲",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_z50k7d4",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_1m7xpou",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_052_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده میکروکریستالین سلولز ۱۰۲ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_052_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده میکروکریستالین سلولز ۱۰۲ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_052_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده میکروکریستالین سلولز ۱۰۲ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_004",
    "supplierId": "bp_sup_077",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_053",
    "category": "domestic",
    "materialId": "mat_053",
    "material": "لاکتوز مونوهیدرات مش ۲۰۰",
    "materialEn": "Lactose Monohydrate 200 Mesh",
    "cas": "64044-51-5",
    "irc": "5334567890123456",
    "name": "تامین دارو سلامت پیشرو",
    "nameEn": "Salamat Pishro Pharma Trading",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 95,
      "planning": 73,
      "finance": 80
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 95,
        "oosHistory": 97,
        "coaAccuracy": 94
      },
      "planning": {
        "onTimeDelivery": 73,
        "leadTime": 74
      },
      "finance": {
        "paymentTerms": 80,
        "creditRating": 78
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88304000 | ایمیل: info@salamatpishro.ir | رابط: مهندس یوسفی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_mf7dedk",
        "action": "ثبت اولیه سورس تامین دارو سلامت پیشرو برای ماده لاکتوز مونوهیدرات مش ۲۰۰",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_nhhcazj",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_vdaf3fc",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_053_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لاکتوز مونوهیدرات مش ۲۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_053_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لاکتوز مونوهیدرات مش ۲۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_053_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده لاکتوز مونوهیدرات مش ۲۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_005",
    "supplierId": "bp_sup_078",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_054",
    "category": "domestic",
    "materialId": "mat_054",
    "material": "منیزیم استئارات گیاهی",
    "materialEn": "Magnesium Stearate Vegetable",
    "cas": "557-04-0",
    "irc": "5434567890123456",
    "name": "شرکت پارس آزمون کیمیا",
    "nameEn": "Pars Azmoon Kimia Trading",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 83,
      "planning": 86,
      "finance": 97
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 83,
        "oosHistory": 85,
        "coaAccuracy": 82
      },
      "planning": {
        "onTimeDelivery": 86,
        "leadTime": 87
      },
      "finance": {
        "paymentTerms": 97,
        "creditRating": 95
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-66005000 | ایمیل: kimia@parsazmoon.com | رابط: دکتر افشار",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_4rj1lkf",
        "action": "ثبت اولیه سورس شرکت پارس آزمون کیمیا برای ماده منیزیم استئارات گیاهی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_ql6t04g",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_ldg9xsh",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_054_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده منیزیم استئارات گیاهی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_054_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده منیزیم استئارات گیاهی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_054_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده منیزیم استئارات گیاهی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_006",
    "supplierId": "bp_sup_079",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_055",
    "category": "domestic",
    "materialId": "mat_055",
    "material": "کراس‌کارملوز سدیم",
    "materialEn": "Croscarmellose Sodium",
    "cas": "74811-65-7",
    "irc": "5534567890123456",
    "name": "پویا داروی ایرانیان",
    "nameEn": "Pouya Darou Iranian Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 94,
      "planning": 74,
      "finance": 92
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 94,
        "oosHistory": 96,
        "coaAccuracy": 93
      },
      "planning": {
        "onTimeDelivery": 74,
        "leadTime": 75
      },
      "finance": {
        "paymentTerms": 92,
        "creditRating": 90
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22090000 | ایمیل: sales@pouyadarou.com | رابط: مهندس اکبری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_ljp476z",
        "action": "ثبت اولیه سورس پویا داروی ایرانیان برای ماده کراس‌کارملوز سدیم",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_q944fwh",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_u3gf3z2",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_055_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کراس‌کارملوز سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_055_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کراس‌کارملوز سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_055_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کراس‌کارملوز سدیم مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_007",
    "supplierId": "bp_sup_080",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_056",
    "category": "domestic",
    "materialId": "mat_056",
    "material": "کراس‌پوویدون CL",
    "materialEn": "Crospovidone Kollidon CL",
    "cas": "9003-39-8",
    "irc": "5634567890123456",
    "name": "کیمیا داروی فردا",
    "nameEn": "Kimia Darou Farda Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 82,
      "planning": 87,
      "finance": 87
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 82,
        "oosHistory": 84,
        "coaAccuracy": 81
      },
      "planning": {
        "onTimeDelivery": 87,
        "leadTime": 88
      },
      "finance": {
        "paymentTerms": 87,
        "creditRating": 85
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88882000 | ایمیل: info@kimiadarou.ir | رابط: دکتر جعفری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_ndvxyw1",
        "action": "ثبت اولیه سورس کیمیا داروی فردا برای ماده کراس‌پوویدون CL",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_09z4gxt",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_p86z5cz",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_056_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کراس‌پوویدون CL مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_056_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کراس‌پوویدون CL مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_056_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده کراس‌پوویدون CL مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_008",
    "supplierId": "bp_sup_081",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_057",
    "category": "foreign",
    "materialId": "mat_057",
    "material": "پوویدون K30",
    "materialEn": "Povidone K30",
    "cas": "9003-39-8",
    "irc": "5734567890123456",
    "name": "Safic-Alcan Pharma",
    "nameEn": "Safic-Alcan Pharma",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 93,
      "planning": 75,
      "finance": 82
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 93,
        "oosHistory": 95,
        "coaAccuracy": 92
      },
      "planning": {
        "onTimeDelivery": 75,
        "leadTime": 76
      },
      "finance": {
        "paymentTerms": 82,
        "creditRating": 80
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +33 1 46 92 64 64 | ایمیل: pharma@safic-alcan.com | رابط: Philippe Martin",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_7xjeot7",
        "action": "ثبت اولیه سورس Safic-Alcan Pharma برای ماده پوویدون K30",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_gf8hmjc",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_89n1ymn",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_057_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوویدون K30 مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_057_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوویدون K30 مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_057_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوویدون K30 مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_007",
    "supplierId": "bp_sup_057",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_058",
    "category": "foreign",
    "materialId": "mat_058",
    "material": "هیدروکسی پروپیل متیل سلولز K100M",
    "materialEn": "Hypromellose HPMC K100M",
    "cas": "9004-65-3",
    "irc": "5834567890123456",
    "name": "Faravelli Group International",
    "nameEn": "Faravelli Group International",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 81,
      "planning": 88,
      "finance": 77
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 81,
        "oosHistory": 83,
        "coaAccuracy": 80
      },
      "planning": {
        "onTimeDelivery": 88,
        "leadTime": 89
      },
      "finance": {
        "paymentTerms": 77,
        "creditRating": 75
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +39 02 84893 1 | ایمیل: pharma@faravelli.it | رابط: Marco Rossi",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_ljczc1r",
        "action": "ثبت اولیه سورس Faravelli Group International برای ماده هیدروکسی پروپیل متیل سلولز K100M",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_0vpbvde",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_u4fum4d",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_058_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکسی پروپیل متیل سلولز K100M مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_058_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکسی پروپیل متیل سلولز K100M مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_058_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکسی پروپیل متیل سلولز K100M مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_008",
    "supplierId": "bp_sup_058",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_059",
    "category": "foreign",
    "materialId": "mat_059",
    "material": "هیدروکسی پروپیل متیل سلولز E5",
    "materialEn": "Hypromellose HPMC E5",
    "cas": "9004-65-3",
    "irc": "5934567890123456",
    "name": "Azelis Pharma Division",
    "nameEn": "Azelis Pharma Division",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 92,
      "planning": 76,
      "finance": 94
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 92,
        "oosHistory": 94,
        "coaAccuracy": 91
      },
      "planning": {
        "onTimeDelivery": 76,
        "leadTime": 77
      },
      "finance": {
        "paymentTerms": 94,
        "creditRating": 92
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +32 3 613 01 20 | ایمیل: pharma@azelis.com | رابط: Sophie Dubois",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_8dqtgbp",
        "action": "ثبت اولیه سورس Azelis Pharma Division برای ماده هیدروکسی پروپیل متیل سلولز E5",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_zgm22ou",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_hlycewy",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_059_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-05901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکسی پروپیل متیل سلولز E5 مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_059_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-05902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکسی پروپیل متیل سلولز E5 مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_059_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-05903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده هیدروکسی پروپیل متیل سلولز E5 مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_009",
    "supplierId": "bp_sup_059",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_060",
    "category": "foreign",
    "materialId": "mat_060",
    "material": "سیلیکون دی‌اکسید کلوئیدی ۲۰۰",
    "materialEn": "Colloidal Silicon Dioxide 200",
    "cas": "112945-52-5",
    "irc": "6034567890123456",
    "name": "CBC Co., Ltd. Medical Dept",
    "nameEn": "CBC Co., Ltd. Medical Dept",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 80,
      "planning": 89,
      "finance": 89
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 80,
        "oosHistory": 82,
        "coaAccuracy": 79
      },
      "planning": {
        "onTimeDelivery": 89,
        "leadTime": 90
      },
      "finance": {
        "paymentTerms": 89,
        "creditRating": 87
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 3536 4500 | ایمیل: pharma@cbc.co.jp | رابط: Hiroshi Sato",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_l11fswl",
        "action": "ثبت اولیه سورس CBC Co., Ltd. Medical Dept برای ماده سیلیکون دی‌اکسید کلوئیدی ۲۰۰",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_ubdgxws",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_6obrkt4",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_060_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیلیکون دی‌اکسید کلوئیدی ۲۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_060_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیلیکون دی‌اکسید کلوئیدی ۲۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_060_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیلیکون دی‌اکسید کلوئیدی ۲۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_010",
    "supplierId": "bp_sup_060",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_061",
    "category": "foreign",
    "materialId": "mat_061",
    "material": "تالک دارویی میکرونیزه",
    "materialEn": "Pharmaceutical Talc Micronized",
    "cas": "14807-96-6",
    "irc": "6134567890123456",
    "name": "Mitsubishi Corporation Life Science",
    "nameEn": "Mitsubishi Corp Life Science",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 91,
      "planning": 77,
      "finance": 84
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 91,
        "oosHistory": 93,
        "coaAccuracy": 90
      },
      "planning": {
        "onTimeDelivery": 77,
        "leadTime": 78
      },
      "finance": {
        "paymentTerms": 84,
        "creditRating": 82
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 3210 2121 | ایمیل: life.science@mitsubishicorp.com | رابط: Takashi Ono",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_w4jxe0s",
        "action": "ثبت اولیه سورس Mitsubishi Corporation Life Science برای ماده تالک دارویی میکرونیزه",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_m7tszyv",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_s5he6c1",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_061_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تالک دارویی میکرونیزه مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_061_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تالک دارویی میکرونیزه مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_061_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تالک دارویی میکرونیزه مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_011",
    "supplierId": "bp_sup_061",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_062",
    "category": "foreign",
    "materialId": "mat_062",
    "material": "نشاسته ذرت پیش‌ژلاتینه",
    "materialEn": "Pregelatinized Starch 1500",
    "cas": "9005-25-8",
    "irc": "6234567890123456",
    "name": "Sojitz Corporation Chemicals",
    "nameEn": "Sojitz Corporation Chemicals",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 79,
      "planning": 90,
      "finance": 79
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 79,
        "oosHistory": 81,
        "coaAccuracy": 78
      },
      "planning": {
        "onTimeDelivery": 90,
        "leadTime": 91
      },
      "finance": {
        "paymentTerms": 79,
        "creditRating": 77
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 6871 5000 | ایمیل: chem@sojitz.com | رابط: Yuki Takahashi",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_k8nenq7",
        "action": "ثبت اولیه سورس Sojitz Corporation Chemicals برای ماده نشاسته ذرت پیش‌ژلاتینه",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_j5jow54",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_dpaic7d",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_062_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده نشاسته ذرت پیش‌ژلاتینه مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_062_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده نشاسته ذرت پیش‌ژلاتینه مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_062_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده نشاسته ذرت پیش‌ژلاتینه مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_012",
    "supplierId": "bp_sup_062",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_063",
    "category": "foreign",
    "materialId": "mat_063",
    "material": "مانیتول گرانول",
    "materialEn": "Mannitol Granules",
    "cas": "69-65-8",
    "irc": "6334567890123456",
    "name": "Marubeni Corporation Chemicals",
    "nameEn": "Marubeni Corp Chemicals Dept",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 90,
      "planning": 78,
      "finance": 96
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 90,
        "oosHistory": 92,
        "coaAccuracy": 89
      },
      "planning": {
        "onTimeDelivery": 78,
        "leadTime": 79
      },
      "finance": {
        "paymentTerms": 96,
        "creditRating": 94
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +81 3 3282 2111 | ایمیل: pharma@marubeni.com | رابط: Daiki Ito",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_4da13a1",
        "action": "ثبت اولیه سورس Marubeni Corporation Chemicals برای ماده مانیتول گرانول",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_r8ijsoq",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_l85381u",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_063_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده مانیتول گرانول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_063_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده مانیتول گرانول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_063_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده مانیتول گرانول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_013",
    "supplierId": "bp_sup_063",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_064",
    "category": "foreign",
    "materialId": "mat_064",
    "material": "سدیم استارچ گلیکولات",
    "materialEn": "Sodium Starch Glycolate",
    "cas": "9063-38-1",
    "irc": "6434567890123456",
    "name": "Shanghai Desano Chemical Pharma",
    "nameEn": "Shanghai Desano Chemical Pharma",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 78,
      "planning": 91,
      "finance": 91
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 78,
        "oosHistory": 80,
        "coaAccuracy": 77
      },
      "planning": {
        "onTimeDelivery": 91,
        "leadTime": 92
      },
      "finance": {
        "paymentTerms": 91,
        "creditRating": 89
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +86 21 5132 3388 | ایمیل: desano@desano.com | رابط: Zhang Lei",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_mx5fql7",
        "action": "ثبت اولیه سورس Shanghai Desano Chemical Pharma برای ماده سدیم استارچ گلیکولات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_20kvjct",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_frlnuo7",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_064_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم استارچ گلیکولات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_064_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم استارچ گلیکولات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_064_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم استارچ گلیکولات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_014",
    "supplierId": "bp_sup_064",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_065",
    "category": "foreign",
    "materialId": "mat_065",
    "material": "سدیم لوریل سولفات دارویی",
    "materialEn": "Sodium Lauryl Sulfate Pharma",
    "cas": "151-21-3",
    "irc": "6534567890123456",
    "name": "Huahai US Inc. Distribution",
    "nameEn": "Huahai US Inc.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 89,
      "planning": 79,
      "finance": 86
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 89,
        "oosHistory": 91,
        "coaAccuracy": 88
      },
      "planning": {
        "onTimeDelivery": 79,
        "leadTime": 80
      },
      "finance": {
        "paymentTerms": 86,
        "creditRating": 84
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 609 655 1688 | ایمیل: sales@huahaius.com | رابط: Robert Miller",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_ukf3udx",
        "action": "ثبت اولیه سورس Huahai US Inc. Distribution برای ماده سدیم لوریل سولفات دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_qvjl3ed",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_gp5nxww",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_065_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم لوریل سولفات دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_065_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم لوریل سولفات دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_065_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم لوریل سولفات دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_015",
    "supplierId": "bp_sup_065",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_066",
    "category": "foreign",
    "materialId": "mat_066",
    "material": "دی‌کلسیم فسفات دی‌هیدرات",
    "materialEn": "Dicalcium Phosphate Dihydrate",
    "cas": "7789-77-7",
    "irc": "6634567890123456",
    "name": "LGM Pharma LLC",
    "nameEn": "LGM Pharma LLC",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 77,
      "planning": 92,
      "finance": 81
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 77,
        "oosHistory": 79,
        "coaAccuracy": 76
      },
      "planning": {
        "onTimeDelivery": 92,
        "leadTime": 93
      },
      "finance": {
        "paymentTerms": 81,
        "creditRating": 79
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 800 881 8210 | ایمیل: api@lgmpharma.com | رابط: Michael Green",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_44ouiee",
        "action": "ثبت اولیه سورس LGM Pharma LLC برای ماده دی‌کلسیم فسفات دی‌هیدرات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_1r2vab1",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_zk2x47d",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_066_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دی‌کلسیم فسفات دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_066_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دی‌کلسیم فسفات دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_066_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دی‌کلسیم فسفات دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_016",
    "supplierId": "bp_sup_066",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_067",
    "category": "foreign",
    "materialId": "mat_067",
    "material": "تیتانیوم دی‌اکسید",
    "materialEn": "Titanium Dioxide",
    "cas": "13463-67-7",
    "irc": "6734567890123456",
    "name": "Aceto Corporation API Source",
    "nameEn": "Aceto Corporation",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 88,
      "planning": 80,
      "finance": 76
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 88,
        "oosHistory": 90,
        "coaAccuracy": 87
      },
      "planning": {
        "onTimeDelivery": 80,
        "leadTime": 81
      },
      "finance": {
        "paymentTerms": 76,
        "creditRating": 74
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 516 627 6000 | ایمیل: info@aceto.com | رابط: David Brown",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_nycklah",
        "action": "ثبت اولیه سورس Aceto Corporation API Source برای ماده تیتانیوم دی‌اکسید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_zj8c0si",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_8x1oyrz",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_067_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تیتانیوم دی‌اکسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_067_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تیتانیوم دی‌اکسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_067_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تیتانیوم دی‌اکسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_017",
    "supplierId": "bp_sup_067",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_068",
    "category": "foreign",
    "materialId": "mat_068",
    "material": "پلی‌اتیلن گلیکول ۴۰۰۰",
    "materialEn": "Polyethylene Glycol 4000",
    "cas": "25322-68-3",
    "irc": "6834567890123456",
    "name": "Spectrum Chemical Mfg. Corp.",
    "nameEn": "Spectrum Chemical Mfg. Corp.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 76,
      "planning": 93,
      "finance": 93
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 76,
        "oosHistory": 78,
        "coaAccuracy": 75
      },
      "planning": {
        "onTimeDelivery": 93,
        "leadTime": 94
      },
      "finance": {
        "paymentTerms": 93,
        "creditRating": 91
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +1 800 772 8786 | ایمیل: sales@spectrumchemical.com | رابط: James Wilson",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_2q1evb3",
        "action": "ثبت اولیه سورس Spectrum Chemical Mfg. Corp. برای ماده پلی‌اتیلن گلیکول ۴۰۰۰",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_tugqkic",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_ypl8ee2",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_068_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌اتیلن گلیکول ۴۰۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_068_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌اتیلن گلیکول ۴۰۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_068_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌اتیلن گلیکول ۴۰۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_018",
    "supplierId": "bp_sup_068",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_069",
    "category": "foreign",
    "materialId": "mat_069",
    "material": "پلی‌اتیلن گلیکول ۶۰۰۰",
    "materialEn": "Polyethylene Glycol 6000",
    "cas": "25322-68-3",
    "irc": "6934567890123457",
    "name": "Signet Chemical Corporation",
    "nameEn": "Signet Chemical Corporation Pvt Ltd",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 87,
      "planning": 81,
      "finance": 88
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 87,
        "oosHistory": 89,
        "coaAccuracy": 86
      },
      "planning": {
        "onTimeDelivery": 81,
        "leadTime": 82
      },
      "finance": {
        "paymentTerms": 88,
        "creditRating": 86
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +91 22 6146 2727 | ایمیل: sales@signetchem.com | رابط: Harish Shah",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_mib05d7",
        "action": "ثبت اولیه سورس Signet Chemical Corporation برای ماده پلی‌اتیلن گلیکول ۶۰۰۰",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_bathnwu",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_nix9fvc",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_069_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-06901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌اتیلن گلیکول ۶۰۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_069_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-06902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌اتیلن گلیکول ۶۰۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_069_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-06903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌اتیلن گلیکول ۶۰۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_019",
    "supplierId": "bp_sup_069",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_070",
    "category": "foreign",
    "materialId": "mat_070",
    "material": "سیتریک اسید بدون آب",
    "materialEn": "Citric Acid Anhydrous",
    "cas": "77-92-9",
    "irc": "7034567890123456",
    "name": "DKSH Pharma Healthcare",
    "nameEn": "DKSH Pharma Healthcare",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 75,
      "planning": 94,
      "finance": 83
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 75,
        "oosHistory": 77,
        "coaAccuracy": 74
      },
      "planning": {
        "onTimeDelivery": 94,
        "leadTime": 95
      },
      "finance": {
        "paymentTerms": 83,
        "creditRating": 81
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +41 44 386 7272 | ایمیل: healthcare@dksh.com | رابط: Martin Keller",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_bbwp6jx",
        "action": "ثبت اولیه سورس DKSH Pharma Healthcare برای ماده سیتریک اسید بدون آب",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_4vfksv3",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_mlqqmvh",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_070_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیتریک اسید بدون آب مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_070_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیتریک اسید بدون آب مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_070_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سیتریک اسید بدون آب مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_020",
    "supplierId": "bp_sup_070",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_071",
    "category": "foreign",
    "materialId": "mat_071",
    "material": "سدیم سیترات دی‌هیدرات",
    "materialEn": "Sodium Citrate Dihydrate",
    "cas": "6132-04-3",
    "irc": "7134567890123456",
    "name": "Connell Brothers Company",
    "nameEn": "Connell Brothers Company",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 86,
      "planning": 82,
      "finance": 78
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 86,
        "oosHistory": 88,
        "coaAccuracy": 85
      },
      "planning": {
        "onTimeDelivery": 82,
        "leadTime": 83
      },
      "finance": {
        "paymentTerms": 78,
        "creditRating": 76
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +65 6831 6688 | ایمیل: info@connellworld.com | رابط: Ken Tan",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_i7ye14f",
        "action": "ثبت اولیه سورس Connell Brothers Company برای ماده سدیم سیترات دی‌هیدرات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_5rm6hg8",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_d1lbt2i",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_071_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم سیترات دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_071_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم سیترات دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_071_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم سیترات دی‌هیدرات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_021",
    "supplierId": "bp_sup_071",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_072",
    "category": "foreign",
    "materialId": "mat_072",
    "material": "بنزوئیک اسید",
    "materialEn": "Benzoic Acid",
    "cas": "65-85-0",
    "irc": "7234567890123456",
    "name": "Nordmann Firnhaber GmbH",
    "nameEn": "Nordmann Firnhaber GmbH",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 97,
      "planning": 95,
      "finance": 95
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 97,
        "oosHistory": 99,
        "coaAccuracy": 96
      },
      "planning": {
        "onTimeDelivery": 95,
        "leadTime": 96
      },
      "finance": {
        "paymentTerms": 95,
        "creditRating": 93
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 3687-0 | ایمیل: pharma@nordmann.global | رابط: Claus Becker",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_irdh027",
        "action": "ثبت اولیه سورس Nordmann Firnhaber GmbH برای ماده بنزوئیک اسید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_mxy47g6",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_5bpa0p0",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_072_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بنزوئیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_072_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بنزوئیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_072_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بنزوئیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_022",
    "supplierId": "bp_sup_072",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_073",
    "category": "foreign",
    "materialId": "mat_073",
    "material": "سدیم بنزوات",
    "materialEn": "Sodium Benzoate",
    "cas": "532-32-1",
    "irc": "7334567890123456",
    "name": "Velox GmbH Chemical Raw Materials",
    "nameEn": "Velox GmbH",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 85,
      "planning": 83,
      "finance": 90
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 85,
        "oosHistory": 87,
        "coaAccuracy": 84
      },
      "planning": {
        "onTimeDelivery": 83,
        "leadTime": 84
      },
      "finance": {
        "paymentTerms": 90,
        "creditRating": 88
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 369688-0 | ایمیل: info@velox.com | رابط: Klaus Fischer",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_86xr2dk",
        "action": "ثبت اولیه سورس Velox GmbH Chemical Raw Materials برای ماده سدیم بنزوات",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_52ucww6",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_8ntx8nn",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_073_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم بنزوات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_073_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم بنزوات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_073_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده سدیم بنزوات مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_023",
    "supplierId": "bp_sup_073",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_074",
    "category": "foreign",
    "materialId": "mat_074",
    "material": "متیل پارابن",
    "materialEn": "Methylparaben",
    "cas": "99-76-3",
    "irc": "7434567890123456",
    "name": "Vivatis Pharma GmbH",
    "nameEn": "Vivatis Pharma GmbH",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 96,
      "planning": 96,
      "finance": 85
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 96,
        "oosHistory": 98,
        "coaAccuracy": 95
      },
      "planning": {
        "onTimeDelivery": 96,
        "leadTime": 97
      },
      "finance": {
        "paymentTerms": 85,
        "creditRating": 83
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 23600-0 | ایمیل: office@vivatis.de | رابط: Thorsten Meier",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_s4fy398",
        "action": "ثبت اولیه سورس Vivatis Pharma GmbH برای ماده متیل پارابن",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_rwx1yqn",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_nrei3kf",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_074_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متیل پارابن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_074_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متیل پارابن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_074_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده متیل پارابن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_024",
    "supplierId": "bp_sup_074",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_075",
    "category": "foreign",
    "materialId": "mat_075",
    "material": "پروپیل پارابن",
    "materialEn": "Propylparaben",
    "cas": "94-13-3",
    "irc": "7534567890123456",
    "name": "Caesar & Loretz GmbH (Caelo)",
    "nameEn": "Caesar & Loretz GmbH Caelo",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 84,
      "planning": 84,
      "finance": 80
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 84,
        "oosHistory": 86,
        "coaAccuracy": 83
      },
      "planning": {
        "onTimeDelivery": 84,
        "leadTime": 85
      },
      "finance": {
        "paymentTerms": 80,
        "creditRating": 78
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 2103 4994-0 | ایمیل: info@caelo.de | رابط: Dr. Julia Krause",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_iepi31i",
        "action": "ثبت اولیه سورس Caesar & Loretz GmbH (Caelo) برای ماده پروپیل پارابن",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_19km1ik",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_9idotn5",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_075_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپیل پارابن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_075_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپیل پارابن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_075_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپیل پارابن مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_025",
    "supplierId": "bp_sup_075",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_076",
    "category": "foreign",
    "materialId": "mat_076",
    "material": "پلی‌سوربات ۸۰ دارویی",
    "materialEn": "Polysorbate 80 Tween",
    "cas": "9005-65-6",
    "irc": "7634567890123456",
    "name": "شرکت بازرگانی شفا دارو",
    "nameEn": "Shafa Darou Commercial Co.",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 95,
      "planning": 72,
      "finance": 97
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 95,
        "oosHistory": 97,
        "coaAccuracy": 94
      },
      "planning": {
        "onTimeDelivery": 72,
        "leadTime": 73
      },
      "finance": {
        "paymentTerms": 97,
        "creditRating": 95
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88710000 | ایمیل: commerce@shafadarou.ir | رابط: مهندس کاظمیان",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_vk84zjm",
        "action": "ثبت اولیه سورس شرکت بازرگانی شفا دارو برای ماده پلی‌سوربات ۸۰ دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_mg8i9ow",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_fakdsjx",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_076_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌سوربات ۸۰ دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_076_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌سوربات ۸۰ دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_076_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پلی‌سوربات ۸۰ دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_026",
    "supplierId": "bp_sup_076",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_077",
    "category": "foreign",
    "materialId": "mat_077",
    "material": "الکل بنزیلیک دارویی",
    "materialEn": "Benzyl Alcohol Pharma",
    "cas": "100-51-6",
    "irc": "7734567890123456",
    "name": "بازرگانی دارویی پخش فردوس",
    "nameEn": "Ferdous Pharma Distribution",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 83,
      "planning": 85,
      "finance": 92
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 83,
        "oosHistory": 85,
        "coaAccuracy": 82
      },
      "planning": {
        "onTimeDelivery": 85,
        "leadTime": 86
      },
      "finance": {
        "paymentTerms": 92,
        "creditRating": 90
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-66800000 | ایمیل: info@ferdous-pharma.com | رابط: دکتر صابری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_n4hv5ga",
        "action": "ثبت اولیه سورس بازرگانی دارویی پخش فردوس برای ماده الکل بنزیلیک دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_4u9xq73",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_fm6qjox",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_077_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده الکل بنزیلیک دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_077_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده الکل بنزیلیک دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_077_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده الکل بنزیلیک دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_027",
    "supplierId": "bp_sup_077",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_078",
    "category": "foreign",
    "materialId": "mat_078",
    "material": "ایزوپروپیل الکل گرید دارویی",
    "materialEn": "Isopropyl Alcohol Pharma",
    "cas": "67-63-0",
    "irc": "7834567890123456",
    "name": "تامین دارو سلامت پیشرو",
    "nameEn": "Salamat Pishro Pharma Trading",
    "country": "هند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 94,
      "planning": 73,
      "finance": 87
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 94,
        "oosHistory": 96,
        "coaAccuracy": 93
      },
      "planning": {
        "onTimeDelivery": 73,
        "leadTime": 74
      },
      "finance": {
        "paymentTerms": 87,
        "creditRating": 85
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88304000 | ایمیل: info@salamatpishro.ir | رابط: مهندس یوسفی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_61xo1ik",
        "action": "ثبت اولیه سورس تامین دارو سلامت پیشرو برای ماده ایزوپروپیل الکل گرید دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_r9el93b",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_qqscstd",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_078_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایزوپروپیل الکل گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_078_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایزوپروپیل الکل گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_078_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایزوپروپیل الکل گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_028",
    "supplierId": "bp_sup_078",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_079",
    "category": "foreign",
    "materialId": "mat_079",
    "material": "اتانول ۹۶ درصد دارویی",
    "materialEn": "Ethanol 96% Pharma",
    "cas": "64-17-5",
    "irc": "7934567890123456",
    "name": "شرکت پارس آزمون کیمیا",
    "nameEn": "Pars Azmoon Kimia Trading",
    "country": "چین",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 82,
      "planning": 86,
      "finance": 82
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 82,
        "oosHistory": 84,
        "coaAccuracy": 81
      },
      "planning": {
        "onTimeDelivery": 86,
        "leadTime": 87
      },
      "finance": {
        "paymentTerms": 82,
        "creditRating": 80
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-66005000 | ایمیل: kimia@parsazmoon.com | رابط: دکتر افشار",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_upn9hf0",
        "action": "ثبت اولیه سورس شرکت پارس آزمون کیمیا برای ماده اتانول ۹۶ درصد دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_a4hqm81",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_8y5dtl6",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_079_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-07901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اتانول ۹۶ درصد دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_079_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-07902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اتانول ۹۶ درصد دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_079_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-07903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اتانول ۹۶ درصد دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_029",
    "supplierId": "bp_sup_079",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_080",
    "category": "foreign",
    "materialId": "mat_080",
    "material": "پروپیلن گلیکول گرید دارویی",
    "materialEn": "Propylene Glycol Pharma",
    "cas": "57-55-6",
    "irc": "8034567890123456",
    "name": "پویا داروی ایرانیان",
    "nameEn": "Pouya Darou Iranian Co.",
    "country": "چین",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 93,
      "planning": 74,
      "finance": 77
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 93,
        "oosHistory": 95,
        "coaAccuracy": 92
      },
      "planning": {
        "onTimeDelivery": 74,
        "leadTime": 75
      },
      "finance": {
        "paymentTerms": 77,
        "creditRating": 75
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22090000 | ایمیل: sales@pouyadarou.com | رابط: مهندس اکبری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_xd0uvxz",
        "action": "ثبت اولیه سورس پویا داروی ایرانیان برای ماده پروپیلن گلیکول گرید دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_a7h9obv",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_67pq489",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_080_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپیلن گلیکول گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_080_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپیلن گلیکول گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_080_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پروپیلن گلیکول گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_030",
    "supplierId": "bp_sup_080",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_081",
    "category": "foreign",
    "materialId": "mat_081",
    "material": "گلیسیرین دارویی ۹۹.۵٪",
    "materialEn": "Glycerin 99.5% Pharma",
    "cas": "56-81-5",
    "irc": "8134567890123456",
    "name": "کیمیا داروی فردا",
    "nameEn": "Kimia Darou Farda Co.",
    "country": "چین",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 81,
      "planning": 87,
      "finance": 94
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 81,
        "oosHistory": 83,
        "coaAccuracy": 80
      },
      "planning": {
        "onTimeDelivery": 87,
        "leadTime": 88
      },
      "finance": {
        "paymentTerms": 94,
        "creditRating": 92
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88882000 | ایمیل: info@kimiadarou.ir | رابط: دکتر جعفری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_7yj53qa",
        "action": "ثبت اولیه سورس کیمیا داروی فردا برای ماده گلیسیرین دارویی ۹۹.۵٪",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_peizbcv",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_n33bnup",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_081_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده گلیسیرین دارویی ۹۹.۵٪ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_081_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده گلیسیرین دارویی ۹۹.۵٪ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_081_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده گلیسیرین دارویی ۹۹.۵٪ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_031",
    "supplierId": "bp_sup_081",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_082",
    "category": "foreign",
    "materialId": "mat_082",
    "material": "استون گرید دارویی",
    "materialEn": "Acetone Pharma Grade",
    "cas": "67-64-1",
    "irc": "8234567890123456",
    "name": "پارسیان دارو تجارت",
    "nameEn": "Parsian Darou Tejarat",
    "country": "چین",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 92,
      "planning": 75,
      "finance": 89
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 92,
        "oosHistory": 94,
        "coaAccuracy": 91
      },
      "planning": {
        "onTimeDelivery": 75,
        "leadTime": 76
      },
      "finance": {
        "paymentTerms": 89,
        "creditRating": 87
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 031-36200000 | ایمیل: info@parsiandarou.com | رابط: مهندس صادقی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_f0xbdqm",
        "action": "ثبت اولیه سورس پارسیان دارو تجارت برای ماده استون گرید دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_pe6t6wq",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_hbtr6zp",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_082_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده استون گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_082_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده استون گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_082_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده استون گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_032",
    "supplierId": "bp_sup_082",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_083",
    "category": "foreign",
    "materialId": "mat_083",
    "material": "دی‌کلرومتان خلوص بالا",
    "materialEn": "Dichloromethane High Purity",
    "cas": "75-09-2",
    "irc": "8334567890123456",
    "name": "جهان فارما تجارت",
    "nameEn": "Jahan Pharma Trading",
    "country": "هلند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 80,
      "planning": 88,
      "finance": 84
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 80,
        "oosHistory": 82,
        "coaAccuracy": 79
      },
      "planning": {
        "onTimeDelivery": 88,
        "leadTime": 89
      },
      "finance": {
        "paymentTerms": 84,
        "creditRating": 82
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88750000 | ایمیل: info@jahanpharma.ir | رابط: دکتر حیدری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_2irugjy",
        "action": "ثبت اولیه سورس جهان فارما تجارت برای ماده دی‌کلرومتان خلوص بالا",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_rjbi66y",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_mvtnw7p",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_083_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دی‌کلرومتان خلوص بالا مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_083_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دی‌کلرومتان خلوص بالا مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_083_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده دی‌کلرومتان خلوص بالا مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_033",
    "supplierId": "bp_sup_083",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_084",
    "category": "foreign",
    "materialId": "mat_084",
    "material": "اتیل استات گرید دارویی",
    "materialEn": "Ethyl Acetate Pharma Grade",
    "cas": "141-78-6",
    "irc": "8434567890123456",
    "name": "آریا داروی پارس",
    "nameEn": "Aria Darou Pars",
    "country": "سوئیس",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 91,
      "planning": 76,
      "finance": 79
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 91,
        "oosHistory": 93,
        "coaAccuracy": 90
      },
      "planning": {
        "onTimeDelivery": 76,
        "leadTime": 77
      },
      "finance": {
        "paymentTerms": 79,
        "creditRating": 77
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 071-36280000 | ایمیل: info@ariadarou.ir | رابط: مهندس زارع",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_0lh9h5f",
        "action": "ثبت اولیه سورس آریا داروی پارس برای ماده اتیل استات گرید دارویی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_qsqglkt",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_fo9tdp2",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_084_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اتیل استات گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_084_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اتیل استات گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_084_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اتیل استات گرید دارویی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_034",
    "supplierId": "bp_sup_084",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_085",
    "category": "foreign",
    "materialId": "mat_085",
    "material": "۴-آمینوفنول",
    "materialEn": "4-Aminophenol PAP",
    "cas": "123-30-8",
    "irc": "8534567890123456",
    "name": "بهستان بهداشت دارو",
    "nameEn": "Behestan Behdasht Pharma Trading",
    "country": "آلمان",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 79,
      "planning": 89,
      "finance": 96
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 79,
        "oosHistory": 81,
        "coaAccuracy": 78
      },
      "planning": {
        "onTimeDelivery": 89,
        "leadTime": 90
      },
      "finance": {
        "paymentTerms": 96,
        "creditRating": 94
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88775000 | ایمیل: info@behestan.com | رابط: دکتر سلیمانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_xm5mywe",
        "action": "ثبت اولیه سورس بهستان بهداشت دارو برای ماده ۴-آمینوفنول",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_v112o04",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_ql1y2bm",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_085_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۴-آمینوفنول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_085_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۴-آمینوفنول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_085_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۴-آمینوفنول مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_035",
    "supplierId": "bp_sup_085",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_086",
    "category": "foreign",
    "materialId": "mat_086",
    "material": "۶-آمینوپنی‌سیلانیک اسید",
    "materialEn": "6-Aminopenicillanic Acid 6-APA",
    "cas": "551-68-8",
    "irc": "8634567890123456",
    "name": "تدبیر دارو رازی",
    "nameEn": "Tadbir Darou Razi Co.",
    "country": "فرانسه",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 90,
      "planning": 77,
      "finance": 91
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 90,
        "oosHistory": 92,
        "coaAccuracy": 89
      },
      "planning": {
        "onTimeDelivery": 77,
        "leadTime": 78
      },
      "finance": {
        "paymentTerms": 91,
        "creditRating": 89
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88500000 | ایمیل: info@tadbirdarou.com | رابط: مهندس ابراهیمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_zl61fwi",
        "action": "ثبت اولیه سورس تدبیر دارو رازی برای ماده ۶-آمینوپنی‌سیلانیک اسید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_02s8tym",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_i1nlvwx",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_086_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۶-آمینوپنی‌سیلانیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_086_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۶-آمینوپنی‌سیلانیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_086_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۶-آمینوپنی‌سیلانیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_036",
    "supplierId": "bp_sup_086",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_087",
    "category": "foreign",
    "materialId": "mat_087",
    "material": "۷-آمینو دساستوکسی سفالوسپورانیک اسید",
    "materialEn": "7-ADCA",
    "cas": "22252-43-3",
    "irc": "8734567890123456",
    "name": "سینا شیمی تجارت",
    "nameEn": "Sina Shimi Tejarat Co.",
    "country": "آلمان",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 78,
      "planning": 90,
      "finance": 86
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 78,
        "oosHistory": 80,
        "coaAccuracy": 77
      },
      "planning": {
        "onTimeDelivery": 90,
        "leadTime": 91
      },
      "finance": {
        "paymentTerms": 86,
        "creditRating": 84
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 041-35560000 | ایمیل: sales@sinashimi.com | رابط: دکتر تبریزی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_wi5iq6y",
        "action": "ثبت اولیه سورس سینا شیمی تجارت برای ماده ۷-آمینو دساستوکسی سفالوسپورانیک اسید",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_8fssy0b",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_huvafgu",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_087_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۷-آمینو دساستوکسی سفالوسپورانیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_087_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۷-آمینو دساستوکسی سفالوسپورانیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_087_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ۷-آمینو دساستوکسی سفالوسپورانیک اسید مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_037",
    "supplierId": "bp_sup_087",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_088",
    "category": "foreign",
    "materialId": "mat_088",
    "material": "ان-متیل پیرولیدون",
    "materialEn": "N-Methyl-2-pyrrolidone NMP",
    "cas": "872-50-4",
    "irc": "8834567890123456",
    "name": "آوا فارما کیمیا",
    "nameEn": "Ava Pharma Kimia",
    "country": "انگلستان",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 89,
      "planning": 78,
      "finance": 81
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 89,
        "oosHistory": 91,
        "coaAccuracy": 88
      },
      "planning": {
        "onTimeDelivery": 78,
        "leadTime": 79
      },
      "finance": {
        "paymentTerms": 81,
        "creditRating": 79
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88370000 | ایمیل: info@avapharma.ir | رابط: مهندس مرادی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_yy7ipe3",
        "action": "ثبت اولیه سورس آوا فارما کیمیا برای ماده ان-متیل پیرولیدون",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_dy6a0s4",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_l4cqfvt",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_088_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ان-متیل پیرولیدون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_088_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ان-متیل پیرولیدون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_088_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ان-متیل پیرولیدون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_038",
    "supplierId": "bp_sup_088",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_089",
    "category": "veterinary",
    "materialId": "mat_089",
    "material": "تایلوزین تارتارات دامپزشکی",
    "materialEn": "Tylosin Tartrate Vet",
    "cas": "1405-54-5",
    "irc": "8934567890123456",
    "name": "آراد طب داریا",
    "nameEn": "Arad Teb Darya Trading",
    "country": "ژاپن",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 77,
      "planning": 91,
      "finance": 76
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 77,
        "oosHistory": 79,
        "coaAccuracy": 76
      },
      "planning": {
        "onTimeDelivery": 91,
        "leadTime": 92
      },
      "finance": {
        "paymentTerms": 76,
        "creditRating": 74
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22680000 | ایمیل: info@aradteb.com | رابط: دکتر دریایی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_wxu7zzl",
        "action": "ثبت اولیه سورس آراد طب داریا برای ماده تایلوزین تارتارات دامپزشکی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_yz4qt8v",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_vn8rnkr",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 3,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_089_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-08901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تایلوزین تارتارات دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_089_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-08902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تایلوزین تارتارات دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_089_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-08903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده تایلوزین تارتارات دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_039",
    "supplierId": "bp_sup_089",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_090",
    "category": "veterinary",
    "materialId": "mat_090",
    "material": "انروفلوکساسین دامپزشکی",
    "materialEn": "Enrofloxacin Vet",
    "cas": "93106-60-6",
    "irc": "9034567890123456",
    "name": "سپهر داروی ایرانیان",
    "nameEn": "Sepehr Darou Iranian",
    "country": "ایرلند",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 88,
      "planning": 79,
      "finance": 93
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 88,
        "oosHistory": 90,
        "coaAccuracy": 87
      },
      "planning": {
        "onTimeDelivery": 79,
        "leadTime": 80
      },
      "finance": {
        "paymentTerms": 93,
        "creditRating": 91
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 051-37650000 | ایمیل: info@sepehrdarou.ir | رابط: مهندس رضایی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_295cmht",
        "action": "ثبت اولیه سورس سپهر داروی ایرانیان برای ماده انروفلوکساسین دامپزشکی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_6rqyg1b",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_s7ek86o",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 2,
      "probability": 1,
      "sps": 6,
      "riskScore": 6,
      "sri": 6,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_090_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده انروفلوکساسین دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_090_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده انروفلوکساسین دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_090_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده انروفلوکساسین دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_040",
    "supplierId": "bp_sup_090",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_091",
    "category": "veterinary",
    "materialId": "mat_091",
    "material": "ایورمکتین دامپزشکی",
    "materialEn": "Ivermectin Vet",
    "cas": "70288-86-7",
    "irc": "9134567890123456",
    "name": "نیک فارما کیش",
    "nameEn": "Nik Pharma Kish Trading",
    "country": "اسپانیا",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 76,
      "planning": 92,
      "finance": 88
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 76,
        "oosHistory": 78,
        "coaAccuracy": 75
      },
      "planning": {
        "onTimeDelivery": 92,
        "leadTime": 93
      },
      "finance": {
        "paymentTerms": 88,
        "creditRating": 86
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 076-44420000 | ایمیل: info@nikpharma-kish.com | رابط: دکتر نیک‌نژاد",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_3kw8sbq",
        "action": "ثبت اولیه سورس نیک فارما کیش برای ماده ایورمکتین دامپزشکی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_6ow2prw",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_vo1d700",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 1,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_091_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09101",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایورمکتین دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_091_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09102",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایورمکتین دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_091_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09103",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده ایورمکتین دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_041",
    "supplierId": "bp_sup_091",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_092",
    "category": "veterinary",
    "materialId": "mat_092",
    "material": "اکسی‌تتراسایکلین دی‌هیدرات دامپزشکی",
    "materialEn": "Oxytetracycline Dihydrate Vet",
    "cas": "6153-64-6",
    "irc": "9234567890123457",
    "name": "مهرگان داروی البرز",
    "nameEn": "Mehregan Darou Alborz",
    "country": "فرانسه",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 87,
      "planning": 80,
      "finance": 83
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 87,
        "oosHistory": 89,
        "coaAccuracy": 86
      },
      "planning": {
        "onTimeDelivery": 80,
        "leadTime": 81
      },
      "finance": {
        "paymentTerms": 83,
        "creditRating": 81
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 026-34480000 | ایمیل: info@mehregandarou.com | رابط: مهندس کریمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_pr6yedu",
        "action": "ثبت اولیه سورس مهرگان داروی البرز برای ماده اکسی‌تتراسایکلین دی‌هیدرات دامپزشکی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_sy3nzp3",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_433hhvv",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 3,
      "probability": 1,
      "sps": 15,
      "riskScore": 15,
      "sri": 15,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_092_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09201",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اکسی‌تتراسایکلین دی‌هیدرات دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_092_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09202",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اکسی‌تتراسایکلین دی‌هیدرات دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_092_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09203",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده اکسی‌تتراسایکلین دی‌هیدرات دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_042",
    "supplierId": "bp_sup_092",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_093",
    "category": "veterinary",
    "materialId": "mat_093",
    "material": "فلبندازول دامپزشکی",
    "materialEn": "Flubendazole Vet",
    "cas": "31430-15-6",
    "irc": "9334567890123456",
    "name": "نگین شیمی رازی",
    "nameEn": "Negin Shimi Razi Trading",
    "country": "آلمان",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 75,
      "planning": 93,
      "finance": 78
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 75,
        "oosHistory": 77,
        "coaAccuracy": 74
      },
      "planning": {
        "onTimeDelivery": 93,
        "leadTime": 94
      },
      "finance": {
        "paymentTerms": 78,
        "creditRating": 76
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22550000 | ایمیل: info@neginshimi.ir | رابط: دکتر نادری",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_3pds4lh",
        "action": "ثبت اولیه سورس نگین شیمی رازی برای ماده فلبندازول دامپزشکی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_ijvdy8g",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_kq8jeka",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 2,
      "probability": 1,
      "sps": 4,
      "riskScore": 4,
      "sri": 4,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_093_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09301",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فلبندازول دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_093_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09302",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فلبندازول دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_093_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09303",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فلبندازول دامپزشکی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_043",
    "supplierId": "bp_sup_093",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_094",
    "category": "packaging",
    "materialId": "mat_094",
    "material": "فویل آلومینیوم بلیستر ۲۰ میکرون",
    "materialEn": "Aluminium Foil 20 Micron Blister",
    "cas": "7429-90-5",
    "irc": "9434567890123456",
    "name": "کیمیاگران سلامت پاسارگاد",
    "nameEn": "Kimiagaran Salamat Pasargad",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 86,
      "planning": 81,
      "finance": 95
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 86,
        "oosHistory": 88,
        "coaAccuracy": 85
      },
      "planning": {
        "onTimeDelivery": 81,
        "leadTime": 82
      },
      "finance": {
        "paymentTerms": 95,
        "creditRating": 93
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-22220000 | ایمیل: info@pasargadpharma.com | رابط: مهندس زمانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_qfxplv1",
        "action": "ثبت اولیه سورس کیمیاگران سلامت پاسارگاد برای ماده فویل آلومینیوم بلیستر ۲۰ میکرون",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_4vmdbks",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_v712f0f",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 1,
      "probability": 1,
      "sps": 3,
      "riskScore": 3,
      "sri": 3,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_094_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09401",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فویل آلومینیوم بلیستر ۲۰ میکرون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_094_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09402",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فویل آلومینیوم بلیستر ۲۰ میکرون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_094_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09403",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فویل آلومینیوم بلیستر ۲۰ میکرون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_017",
    "supplierId": "bp_sup_094",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_095",
    "category": "packaging",
    "materialId": "mat_095",
    "material": "فیلم پی‌وی‌سی دارویی شفاف ۲۵۰ میکرون",
    "materialEn": "PVC Film Pharma Clear 250 mic",
    "cas": "9002-86-2",
    "irc": "9534567890123456",
    "name": "ارس دارو تجارت",
    "nameEn": "Aras Darou Tejarat",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 97,
      "planning": 94,
      "finance": 90
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 97,
        "oosHistory": 99,
        "coaAccuracy": 96
      },
      "planning": {
        "onTimeDelivery": 94,
        "leadTime": 95
      },
      "finance": {
        "paymentTerms": 90,
        "creditRating": 88
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 041-42020000 | ایمیل: info@arasdarou.com | رابط: دکتر ارسی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_adlr1tj",
        "action": "ثبت اولیه سورس ارس دارو تجارت برای ماده فیلم پی‌وی‌سی دارویی شفاف ۲۵۰ میکرون",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_mybfp0s",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_hcz8nvd",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 1,
      "sps": 12,
      "riskScore": 12,
      "sri": 12,
      "riskLevel": "Medium",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_095_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09501",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فیلم پی‌وی‌سی دارویی شفاف ۲۵۰ میکرون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_095_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09502",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فیلم پی‌وی‌سی دارویی شفاف ۲۵۰ میکرون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_095_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09503",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فیلم پی‌وی‌سی دارویی شفاف ۲۵۰ میکرون مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_018",
    "supplierId": "bp_sup_095",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_096",
    "category": "packaging",
    "materialId": "mat_096",
    "material": "فیلم آلو-آلو بلیستر فرم‌پذیر سرد",
    "materialEn": "Cold-Form Alu-Alu Foil",
    "cas": "7429-90-5",
    "irc": "9634567890123456",
    "name": "آرتا شیمی داروساز",
    "nameEn": "Arta Shimi Darousaz Co.",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 85,
      "planning": 82,
      "finance": 85
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 85,
        "oosHistory": 87,
        "coaAccuracy": 84
      },
      "planning": {
        "onTimeDelivery": 82,
        "leadTime": 83
      },
      "finance": {
        "paymentTerms": 85,
        "creditRating": 83
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 045-33720000 | ایمیل: info@artashimi.ir | رابط: مهندس حاتمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_8u30j5q",
        "action": "ثبت اولیه سورس آرتا شیمی داروساز برای ماده فیلم آلو-آلو بلیستر فرم‌پذیر سرد",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_ry9z7fo",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_4joqmv8",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 2,
      "probability": 1,
      "sps": 10,
      "riskScore": 10,
      "sri": 10,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_096_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09601",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فیلم آلو-آلو بلیستر فرم‌پذیر سرد مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_096_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09602",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فیلم آلو-آلو بلیستر فرم‌پذیر سرد مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_096_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09603",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده فیلم آلو-آلو بلیستر فرم‌پذیر سرد مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_019",
    "supplierId": "bp_sup_096",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_097",
    "category": "packaging",
    "materialId": "mat_097",
    "material": "پوکه کپسول ژلاتینی سخت سایز ۰",
    "materialEn": "Hard Gelatin Capsule Shells Size 0",
    "cas": "9000-70-8",
    "irc": "9734567890123456",
    "name": "پایا سلامت کیان",
    "nameEn": "Paya Salamat Kian",
    "country": "ایران",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 96,
      "planning": 95,
      "finance": 80
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 96,
        "oosHistory": 98,
        "coaAccuracy": 95
      },
      "planning": {
        "onTimeDelivery": 95,
        "leadTime": 96
      },
      "finance": {
        "paymentTerms": 80,
        "creditRating": 78
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88000000 | ایمیل: info@payasalamat.ir | رابط: دکتر کیانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_y0g9mu1",
        "action": "ثبت اولیه سورس پایا سلامت کیان برای ماده پوکه کپسول ژلاتینی سخت سایز ۰",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_jvfgfoy",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_dux2i8z",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 2,
      "detectability": 1,
      "probability": 1,
      "sps": 2,
      "riskScore": 2,
      "sri": 2,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_097_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09701",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوکه کپسول ژلاتینی سخت سایز ۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_097_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09702",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوکه کپسول ژلاتینی سخت سایز ۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_097_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09703",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوکه کپسول ژلاتینی سخت سایز ۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_020",
    "supplierId": "bp_sup_097",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_098",
    "category": "packaging",
    "materialId": "mat_098",
    "material": "پوکه کپسول ژلاتینی سخت سایز ۰۰",
    "materialEn": "Hard Gelatin Capsule Shells Size 00",
    "cas": "9000-70-8",
    "irc": "9834567890123456",
    "name": "آذر دارو تجارت",
    "nameEn": "Azar Darou Tejarat Co.",
    "country": "فرانسه",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 85,
      "qa": 84,
      "planning": 83,
      "finance": 97
    },
    "rawScores": {
      "commercial": {
        "price": 85,
        "delivery": 83,
        "reliability": 86
      },
      "qa": {
        "gmpCompliance": 84,
        "oosHistory": 86,
        "coaAccuracy": 83
      },
      "planning": {
        "onTimeDelivery": 83,
        "leadTime": 84
      },
      "finance": {
        "paymentTerms": 97,
        "creditRating": 95
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 041-35400000 | ایمیل: info@azardarou.com | رابط: مهندس قاسم‌زاده",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_xrnv6zh",
        "action": "ثبت اولیه سورس آذر دارو تجارت برای ماده پوکه کپسول ژلاتینی سخت سایز ۰۰",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_p2k6iva",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_i4w8wp6",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 3,
      "detectability": 3,
      "probability": 1,
      "sps": 9,
      "riskScore": 9,
      "sri": 9,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_098_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09801",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوکه کپسول ژلاتینی سخت سایز ۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_098_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09802",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوکه کپسول ژلاتینی سخت سایز ۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_098_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09803",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده پوکه کپسول ژلاتینی سخت سایز ۰۰ مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_048",
    "supplierId": "bp_sup_098",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_099",
    "category": "packaging",
    "materialId": "mat_099",
    "material": "بطری شیشه‌ای کهربایی تیپ ۳ دارویی ۶۰ سی‌سی",
    "materialEn": "Amber Glass Bottle Type III 60ml",
    "cas": "65997-17-3",
    "irc": "9934567890123456",
    "name": "رستا فارما نوآور",
    "nameEn": "Rasta Pharma Noavar",
    "country": "آلمان",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 92,
      "qa": 95,
      "planning": 96,
      "finance": 92
    },
    "rawScores": {
      "commercial": {
        "price": 92,
        "delivery": 90,
        "reliability": 93
      },
      "qa": {
        "gmpCompliance": 95,
        "oosHistory": 97,
        "coaAccuracy": 94
      },
      "planning": {
        "onTimeDelivery": 96,
        "leadTime": 97
      },
      "finance": {
        "paymentTerms": 92,
        "creditRating": 90
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88060000 | ایمیل: info@rastapharma.ir | رابط: دکتر رستمی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_za9xr6k",
        "action": "ثبت اولیه سورس رستا فارما نوآور برای ماده بطری شیشه‌ای کهربایی تیپ ۳ دارویی ۶۰ سی‌سی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_q5jn8jc",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_o01ayvp",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 1,
      "sps": 8,
      "riskScore": 8,
      "sri": 8,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_099_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-09901",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بطری شیشه‌ای کهربایی تیپ ۳ دارویی ۶۰ سی‌سی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_099_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-09902",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بطری شیشه‌ای کهربایی تیپ ۳ دارویی ۶۰ سی‌سی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_099_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-09903",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده بطری شیشه‌ای کهربایی تیپ ۳ دارویی ۶۰ سی‌سی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_049",
    "supplierId": "bp_sup_099",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_100",
    "category": "packaging",
    "materialId": "mat_100",
    "material": "درب آلومینیومی پیل‌آف ۲۸ میلی‌متر با سیل القایی",
    "materialEn": "Aluminium Pilfer-Proof Cap 28mm",
    "cas": "7429-90-5",
    "irc": "1004567890123456",
    "name": "سامان داروی سلامت",
    "nameEn": "Saman Darou Salamat",
    "country": "اتریش",
    "grade": "A",
    "status": "تأیید نهایی (معتبر)",
    "scores": {
      "commercial": 78,
      "qa": 83,
      "planning": 84,
      "finance": 87
    },
    "rawScores": {
      "commercial": {
        "price": 78,
        "delivery": 76,
        "reliability": 79
      },
      "qa": {
        "gmpCompliance": 83,
        "oosHistory": 85,
        "coaAccuracy": 82
      },
      "planning": {
        "onTimeDelivery": 84,
        "leadTime": 85
      },
      "finance": {
        "paymentTerms": 87,
        "creditRating": 85
      }
    },
    "lastAudit": "1404/02/10",
    "ircExpiryDate": "1407/05/15",
    "rejectionReasons": null,
    "contactInfo": "تلفن: 021-88670000 | ایمیل: info@samandarou.com | رابط: مهندس سامانی",
    "registrationDate": "1403/10/01",
    "isSample": false,
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_vhqedbl",
        "action": "ثبت اولیه سورس سامان داروی سلامت برای ماده درب آلومینیومی پیل‌آف ۲۸ میلی‌متر با سیل القایی",
        "date": "2026-01-10T09:00:00.000Z",
        "user": "محمد رضایی (واحد بازرگانی)"
      },
      {
        "id": "log_eiqppyi",
        "action": "تکمیل ارزیابی فنی و ممیزی مدارک کیفی QA",
        "date": "2026-01-25T14:30:00.000Z",
        "user": "دکتر مریم حسینی (تضمین کیفیت)"
      },
      {
        "id": "log_8xwrg82",
        "action": "تأیید نهایی سورس و اعطای رتبه ارزیابی",
        "date": "2026-02-10T11:00:00.000Z",
        "user": "دکتر صمدی (مدیر کیفیت)"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 1,
      "probability": 1,
      "sps": 5,
      "riskScore": 5,
      "sri": 5,
      "riskLevel": "Low",
      "date": "1404/01/20",
      "evaluator": "دکتر صمدی (تضمین کیفیت QA)"
    },
    "analysisRecords": [
      {
        "id": "qc_src_100_1",
        "date": "1404/05/15",
        "qcCode": "QC-1404-10001",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده درب آلومینیومی پیل‌آف ۲۸ میلی‌متر با سیل القایی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_100_2",
        "date": "1404/06/15",
        "qcCode": "QC-1404-10002",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده درب آلومینیومی پیل‌آف ۲۸ میلی‌متر با سیل القایی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      },
      {
        "id": "qc_src_100_3",
        "date": "1404/07/15",
        "qcCode": "QC-1404-10003",
        "decision": "Pass",
        "deviationReason": "None",
        "comments": "آزمایش‌های کنترل فیزیکوشیمیایی و تعیین خلوص بر طبق فارماکوپه با موفقیت انجام شد. ماده درب آلومینیومی پیل‌آف ۲۸ میلی‌متر با سیل القایی مطابق ضوابط پذیرفته شد.",
        "recordedBy": "دکتر علیرضا سلیمانی (مسئول کنترل کیفیت)"
      }
    ],
    "manufacturerId": "bp_mfg_050",
    "supplierId": "bp_sup_100",
    "createdAt": "2026-01-10T08:00:00.000Z",
    "updatedAt": "2026-02-25T12:00:00.000Z"
  },
  {
    "id": "src_smp_1",
    "category": "sample",
    "materialId": "mat_001",
    "material": "استامینوفن",
    "materialEn": "Paracetamol",
    "cas": "103-90-2",
    "irc": "1234567890123456",
    "name": "Connell Brothers Company",
    "nameEn": "Connell Brothers Company",
    "country": "هند",
    "grade": null,
    "status": "نمونه در حال بررسی آزمایشگاهی",
    "scores": null,
    "lastAudit": null,
    "ircExpiryDate": null,
    "rejectionReasons": null,
    "contactInfo": "تلفن: +65 6831 6688 | واحد سمپل",
    "registrationDate": "1404/11/01",
    "isSample": true,
    "initialSampleStatus": "conditional",
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_smp_0",
        "action": "ورود نمونه اولیه آزمایشگاهی استامینوفن",
        "date": "2026-02-01T10:00:00.000Z",
        "user": "واحد R&D"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 2,
      "sps": 8,
      "riskScore": 16,
      "sri": 4,
      "riskLevel": "Medium",
      "date": "1404/11/05",
      "evaluator": "دکتر حسینی (آزمایشگاه کنترل کیفیت)"
    },
    "analysisRecords": [
      {
        "id": "qc_smp_0_1",
        "date": "1404/11/10",
        "qcCode": "QC-SMP-1",
        "decision": "Approved Conditional",
        "deviationReason": "None",
        "comments": "آزمایش بچ پایلوت آزمایشگاهی انجام شد. بچ اول مورد تایید مشروط قرار گرفت تا نتایج تست‌های تسریع‌شده پایداری ۳ ماهه نهایی گردد.",
        "recordedBy": "دکتر حسینی (سرپرست آزمایشگاه)"
      }
    ],
    "manufacturerId": "bp_mfg_023",
    "supplierId": "bp_sup_071"
  },
  {
    "id": "src_smp_2",
    "category": "sample",
    "materialId": "mat_003",
    "material": "آموکسی‌سیلین تری‌هیدرات",
    "materialEn": "Amoxicillin Trihydrate",
    "cas": "61336-70-7",
    "irc": "3234567890123456",
    "name": "Nordmann Firnhaber GmbH",
    "nameEn": "Nordmann Firnhaber GmbH",
    "country": "هند",
    "grade": null,
    "status": "نمونه در حال بررسی آزمایشگاهی",
    "scores": null,
    "lastAudit": null,
    "ircExpiryDate": null,
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 3687-0 | واحد سمپل",
    "registrationDate": "1404/11/01",
    "isSample": true,
    "initialSampleStatus": "conditional",
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_smp_1",
        "action": "ورود نمونه اولیه آزمایشگاهی آموکسی‌سیلین تری‌هیدرات",
        "date": "2026-02-01T10:00:00.000Z",
        "user": "واحد R&D"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 2,
      "sps": 8,
      "riskScore": 16,
      "sri": 4,
      "riskLevel": "Medium",
      "date": "1404/11/05",
      "evaluator": "دکتر حسینی (آزمایشگاه کنترل کیفیت)"
    },
    "analysisRecords": [
      {
        "id": "qc_smp_1_1",
        "date": "1404/11/10",
        "qcCode": "QC-SMP-2",
        "decision": "Approved Conditional",
        "deviationReason": "None",
        "comments": "آزمایش بچ پایلوت آزمایشگاهی انجام شد. بچ اول مورد تایید مشروط قرار گرفت تا نتایج تست‌های تسریع‌شده پایداری ۳ ماهه نهایی گردد.",
        "recordedBy": "دکتر حسینی (سرپرست آزمایشگاه)"
      }
    ],
    "manufacturerId": "bp_mfg_024",
    "supplierId": "bp_sup_072"
  },
  {
    "id": "src_smp_3",
    "category": "sample",
    "materialId": "mat_007",
    "material": "آتورواستاتین کلسیم",
    "materialEn": "Atorvastatin Calcium",
    "cas": "134523-03-8",
    "irc": "7234567890123456",
    "name": "Velox GmbH Chemical Raw Materials",
    "nameEn": "Velox GmbH",
    "country": "هند",
    "grade": null,
    "status": "نمونه در حال بررسی آزمایشگاهی",
    "scores": null,
    "lastAudit": null,
    "ircExpiryDate": null,
    "rejectionReasons": null,
    "contactInfo": "تلفن: +49 40 369688-0 | واحد سمپل",
    "registrationDate": "1404/11/01",
    "isSample": true,
    "initialSampleStatus": "conditional",
    "rejectedByDecision": false,
    "activityLogs": [
      {
        "id": "log_smp_2",
        "action": "ورود نمونه اولیه آزمایشگاهی آتورواستاتین کلسیم",
        "date": "2026-02-01T10:00:00.000Z",
        "user": "واحد R&D"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 2,
      "probability": 2,
      "sps": 8,
      "riskScore": 16,
      "sri": 4,
      "riskLevel": "Medium",
      "date": "1404/11/05",
      "evaluator": "دکتر حسینی (آزمایشگاه کنترل کیفیت)"
    },
    "analysisRecords": [
      {
        "id": "qc_smp_2_1",
        "date": "1404/11/10",
        "qcCode": "QC-SMP-3",
        "decision": "Approved Conditional",
        "deviationReason": "None",
        "comments": "آزمایش بچ پایلوت آزمایشگاهی انجام شد. بچ اول مورد تایید مشروط قرار گرفت تا نتایج تست‌های تسریع‌شده پایداری ۳ ماهه نهایی گردد.",
        "recordedBy": "دکتر حسینی (سرپرست آزمایشگاه)"
      }
    ],
    "manufacturerId": "bp_mfg_025",
    "supplierId": "bp_sup_073"
  },
  {
    "id": "src_blk_001",
    "category": "blacklist",
    "materialId": "mat_002",
    "material": "ایبوپروفن",
    "materialEn": "Ibuprofen",
    "cas": "15687-27-1",
    "irc": "2234567890123456",
    "name": "Aceto Corporation API Source",
    "nameEn": "Aceto Corporation",
    "country": "ایالات متحده آمریکا",
    "grade": "D",
    "status": "رد شده (غیرمجاز)",
    "scores": {
      "commercial": 45,
      "qa": 40,
      "planning": 48,
      "finance": 42
    },
    "lastAudit": "1403/08/10",
    "ircExpiryDate": "1404/01/01",
    "rejectionReasons": [
      "رد توسط مدیریت تضمین کیفیت: عدم انطباق اساسی نتایج آزمون خلوص با فارماکوپه و OOS مکرر"
    ],
    "contactInfo": "تلفن: 1-516-627-6000",
    "registrationDate": "1403/05/01",
    "isSample": false,
    "rejectedByDecision": true,
    "activityLogs": [
      {
        "id": "log_blk_1",
        "action": "ثبت مغایرت بحرانی OOS در سه پارت متوالی",
        "date": "2026-01-15T09:00:00.000Z",
        "user": "دکتر سلیمانی"
      },
      {
        "id": "log_blk_2",
        "action": "قرارگیری در لیست سیاه (Blacklist) به تصمیم کمیته کیفیت",
        "date": "2026-01-20T11:00:00.000Z",
        "user": "دکتر صمدی"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 5,
      "detectability": 4,
      "probability": 5,
      "sps": 20,
      "riskScore": 100,
      "sri": 4,
      "riskLevel": "High",
      "date": "1403/08/12",
      "evaluator": "دکتر صمدی"
    },
    "analysisRecords": [
      {
        "id": "qc_blk_1",
        "date": "1403/08/15",
        "qcCode": "QC-1403-OOS-09",
        "decision": "Reject",
        "deviationReason": "OOS",
        "comments": "میزان ناخالصی مرتبط از حد مجاز استاندارد EP فراتر بوده و مردود اعلام شد.",
        "recordedBy": "دکتر حسینی"
      }
    ],
    "manufacturerId": "bp_mfg_002",
    "supplierId": "bp_sup_067"
  },
  {
    "id": "src_blk_002",
    "category": "blacklist",
    "materialId": "mat_005",
    "material": "متفورمین هیدروکلراید",
    "materialEn": "Metformin Hydrochloride",
    "cas": "1115-70-4",
    "irc": "5234567890123456",
    "name": "Global Pharma Chem (Non-compliant)",
    "nameEn": "Global Pharma Chem Unapproved",
    "country": "هند",
    "grade": "D",
    "status": "رد شده (غیرمجاز)",
    "scores": {
      "commercial": 50,
      "qa": 38,
      "planning": 45,
      "finance": 40
    },
    "lastAudit": "1403/06/10",
    "ircExpiryDate": "1403/12/29",
    "rejectionReasons": [
      "رد توسط واحد بازرگانی و کیفیت به دلیل تاخیر مکرر و عدم تمدید گواهی GMP"
    ],
    "contactInfo": "تلفن: +91 22 2800 0000",
    "registrationDate": "1403/03/10",
    "isSample": false,
    "rejectedByDecision": true,
    "activityLogs": [
      {
        "id": "log_blk_3",
        "action": "رد سورس به دلیل انقضای گواهی GMP تولیدکننده",
        "date": "2026-01-18T10:00:00.000Z",
        "user": "مدیر کیفیت"
      }
    ],
    "riskAssessment": {
      "materialCriticality": 4,
      "detectability": 3,
      "probability": 4,
      "sps": 12,
      "riskScore": 48,
      "sri": 3,
      "riskLevel": "High",
      "date": "1403/06/15",
      "evaluator": "دکتر صمدی"
    },
    "analysisRecords": [
      {
        "id": "qc_blk_2",
        "date": "1403/06/20",
        "qcCode": "QC-1403-REJ-04",
        "decision": "Reject",
        "deviationReason": "Deviation",
        "comments": "عدم تطابق فیزیکی دانسیته پودر و وجود ناخالصی غیرمجاز.",
        "recordedBy": "دکتر سلیمانی"
      }
    ],
    "manufacturerId": "bp_mfg_025",
    "supplierId": "bp_sup_056"
  }
];
