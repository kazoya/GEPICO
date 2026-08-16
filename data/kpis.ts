import type { DemoBatch, Insight, MonthlyKpi } from "@/types";

/** Illustrative scenario only — not GEPICO operating figures. */
export const monthlyKpis: MonthlyKpi[] = [
  { month: "شباط", orders: 186, onTimePct: 94, labHolds: 4, exportShipments: 11, specifierInquiries: 42, solarSharePct: 30 },
  { month: "آذار", orders: 201, onTimePct: 95, labHolds: 3, exportShipments: 13, specifierInquiries: 48, solarSharePct: 30 },
  { month: "نيسان", orders: 214, onTimePct: 93, labHolds: 6, exportShipments: 12, specifierInquiries: 55, solarSharePct: 31 },
  { month: "أيار", orders: 198, onTimePct: 96, labHolds: 2, exportShipments: 14, specifierInquiries: 51, solarSharePct: 31 },
  { month: "حزيران", orders: 221, onTimePct: 92, labHolds: 5, exportShipments: 15, specifierInquiries: 60, solarSharePct: 32 },
  { month: "تموز", orders: 209, onTimePct: 91, labHolds: 7, exportShipments: 10, specifierInquiries: 44, solarSharePct: 30 },
];

export const insights: Insight[] = [
  {
    id: "ins1",
    title: "ارتفاع احتجاز المختبر في تموز (سيناريو)",
    severity: "watch",
    reason: "في البيانات التجريبية زادت التشغيلات المحتجزة مع انخفاض الالتزام بالتسليم. لا يُستنتج واقع المصنع من هذا.",
    dataUsed: ["labHolds", "onTimePct"],
    confidence: 0.4,
    recommendedAction: "التحقق ميدانياً: هل المختبر عنق زجاجة أم أن التسجيل ناقص؟",
    requiresApproval: true,
  },
  {
    id: "ins2",
    title: "البوابة أوضح من السلة الفارغة",
    severity: "action",
    reason: "الموقع يعرض عربة وعامة يرون صفراً، والكتالوج خلف تسجيل وملف عيّنة. المحدّد يحتاج دليلاً وطلب كمية لا متجراً استهلاكياً.",
    dataUsed: ["مراقبة gepico.com"],
    confidence: 0.78,
    recommendedAction: "اكتشاف قناة الطلب الحالية ثم تجريب حسابات معتمدة للمحدّدين والموزّعين.",
    requiresApproval: true,
  },
  {
    id: "ins3",
    title: "هدف الطاقة 2026 يحتاج قياساً لا شعاراً",
    severity: "info",
    reason: "الشركة تعلن 30% شمساً وهدفاً لصافي صفر في 2026. دون قراءات شهرية يبقى الهدف تسويقياً.",
    dataUsed: ["صفحة Milestones"],
    confidence: 0.7,
    recommendedAction: "في الاكتشاف: مصدر رقم الـ 30% وكيف سيُقاس التقدم.",
    requiresApproval: false,
  },
];

export const demoBatches: DemoBatch[] = [
  { id: "R-24081", product: "مواسير UV — سيناريو", status: "packing", startedAt: "2026-08-14T06:10:00", labResult: "pass" },
  { id: "R-24082", product: "مموج 1250N — سيناريو", status: "lab_hold", startedAt: "2026-08-15T05:40:00", labResult: "pending" },
  { id: "R-24083", product: "قناة متعددة الحجرات — سيناريو", status: "warehouse", startedAt: "2026-08-13T07:00:00", labResult: "pass" },
  { id: "R-24084", product: "علبة LED 18W — سيناريو", status: "in_process", startedAt: "2026-08-16T04:55:00", labResult: "pass" },
];
