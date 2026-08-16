import type { CrmDeal, DemoSupplier } from "@/types";

export const demoSuppliers: DemoSupplier[] = [
  { id: "s1", alias: "مورد حليب أ (تجريبي)", milkSource: "cow", reliabilityScore: 92, lastDelivery: "2026-08-15", note: "اسم مستعار — ليس مورداً معلناً" },
  { id: "s2", alias: "مورد أغنام ب (تجريبي)", milkSource: "sheep", reliabilityScore: 81, lastDelivery: "2026-08-14", note: "لسيناريو الجميد والنابلسي الغنم" },
  { id: "s3", alias: "مورد ماعز ج (تجريبي)", milkSource: "goat", reliabilityScore: 74, lastDelivery: "2026-08-12", note: "انحراف حرارة في السيناريو" },
];

export const crmDeals: CrmDeal[] = [
  { id: "d1", account: "سلسلة تجزئة — سيناريو", channel: "مندوب", stage: "تفاوض تشكيلة", skuFocus: "سكن نابلسي وحلوم", owner: "مبيعات (تجريبي)" },
  { id: "d2", account: "تاجر دلي — سيناريو", channel: "هاتف", stage: "طلب أسبوعي", skuFocus: "براميل لبنة وعكاوي", owner: "مبيعات (تجريبي)" },
  { id: "d3", account: "موزّع تصدير — سيناريو", channel: "بريد", stage: "مستندات", skuFocus: "جميد وحلال", owner: "تصدير (تجريبي)" },
];

export const shopFindings = [
  {
    title: "سلة موجودة",
    text: "واجهة الموقع تعرض عربة تسوق بالدينار الأردني (WooCommerce).",
  },
  {
    title: "مسار شراء غير مكتمل ظاهرياً",
    text: "التصفح العام لا يُظهر متجراً جاهزاً بأسعار وخطوات دفع واضحة.",
  },
  {
    title: "كتالوج غني خارج السلة",
    text: "صفحة المنتجات تفصّل الدلي والقطع والمرتبانات والسكن — هذا أصل يمكن تحويله إلى قناة طلب.",
  },
  {
    title: "فرصة أوضح: B2B ثم تجزئة",
    text: "البراميل 4–5 كغ تناسب التاجر أكثر من المستهلك. المتجر الاستهلاكي يأتي بعد بوابة الحسابات.",
  },
];
