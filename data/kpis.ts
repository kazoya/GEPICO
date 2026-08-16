import type { DemoBatch, Insight, MonthlyKpi } from "@/types";

/** Illustrative scenario only — not AlMazraa operating figures. */
export const monthlyKpis: MonthlyKpi[] = [
  { month: "شباط", milkLiters: 18200, cheeseKg: 2140, yieldPct: 11.8, holdLots: 4, coldAlerts: 2, onTimeDeliveryPct: 93, exportShipments: 3 },
  { month: "آذار", milkLiters: 19100, cheeseKg: 2280, yieldPct: 11.9, holdLots: 3, coldAlerts: 1, onTimeDeliveryPct: 94, exportShipments: 4 },
  { month: "نيسان", milkLiters: 20500, cheeseKg: 2410, yieldPct: 11.8, holdLots: 5, coldAlerts: 3, onTimeDeliveryPct: 91, exportShipments: 5 },
  { month: "أيار", milkLiters: 19800, cheeseKg: 2360, yieldPct: 11.9, holdLots: 2, coldAlerts: 1, onTimeDeliveryPct: 95, exportShipments: 4 },
  { month: "حزيران", milkLiters: 18600, cheeseKg: 2210, yieldPct: 11.9, holdLots: 3, coldAlerts: 2, onTimeDeliveryPct: 94, exportShipments: 3 },
  { month: "تموز", milkLiters: 17900, cheeseKg: 2090, yieldPct: 11.7, holdLots: 6, coldAlerts: 4, onTimeDeliveryPct: 90, exportShipments: 2 },
];

export const insights: Insight[] = [
  {
    id: "ins1",
    title: "ارتفاع احتجاز المختبر في تموز (سيناريو)",
    severity: "watch",
    reason: "في البيانات التجريبية زادت الدفعات المحتجزة مع تنبيهات حرارة. لا يُستنتج واقع المصنع من هذا.",
    dataUsed: ["holdLots", "coldAlerts"],
    confidence: 0.42,
    recommendedAction: "التحقق ميدانياً: هل المختبر عنق زجاجة صيفاً أم أن التسجيل ناقص؟",
    requiresApproval: true,
  },
  {
    id: "ins2",
    title: "فرصة بوابة دلي قبل متجر تجزئة",
    severity: "action",
    reason: "الموقع يعرض سلة بالدينار دون مسار شراء واضح. طلبات البراميل غالباً B2B.",
    dataUsed: ["مراقبة الموقع العام"],
    confidence: 0.7,
    recommendedAction: "اكتشاف قناة الطلب الحالية ثم تجريب بوابة حسابات معتمدة.",
    requiresApproval: true,
  },
  {
    id: "ins3",
    title: "التتبع من الحليب إلى العبوة غير مؤكد",
    severity: "info",
    reason: "لا يوجد وصف علني لشجرة النسب. أي تصور جاد يبدأ بسؤال التتبع لا بلوحة جميلة.",
    dataUsed: ["صفحات الموقع العامة"],
    confidence: 0.8,
    recommendedAction: "جولة اكتشاف: باركود، دفاتر، أو نظام قائم.",
    requiresApproval: false,
  },
];

export const demoBatches: DemoBatch[] = [
  { id: "B-24081", product: "نابلسي مغلي سكن 200غ", milkSource: "cow", status: "packing", startedAt: "2026-08-14T06:10:00", labResult: "pass" },
  { id: "B-24082", product: "لبنة جرشية برميل 4.5كغ", milkSource: "cow", status: "lab_hold", startedAt: "2026-08-15T05:40:00", labResult: "pending" },
  { id: "B-24083", product: "جميد سائل مبستر 1كغ", milkSource: "sheep", status: "cold_store", startedAt: "2026-08-13T07:00:00", labResult: "pass" },
  { id: "B-24084", product: "حلوم بالزعتر سكن 200غ", milkSource: "cow", status: "in_process", startedAt: "2026-08-16T04:55:00", labResult: "pass" },
  { id: "B-24085", product: "سمنة بلدي غنم 500غ", milkSource: "sheep", status: "receiving", startedAt: "2026-08-16T06:20:00", labResult: "pending" },
];
