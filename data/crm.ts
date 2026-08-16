import type { CrmDeal, DemoSupplier } from "@/types";

export const demoSuppliers: DemoSupplier[] = [
  { id: "s1", alias: "مورّد خامة PVC (تجريبي)", material: "PVC", reliabilityScore: 91, lastDelivery: "2026-08-15", note: "اسم مستعار — ليس مورّداً معلناً" },
  { id: "s2", alias: "مورّد PE خالٍ من الهالوجين (تجريبي)", material: "PE / LSF", reliabilityScore: 84, lastDelivery: "2026-08-14", note: "لسيناريو المموج منخفض الدخان" },
  { id: "s3", alias: "مورّد إضافات UV (تجريبي)", material: "UV additives", reliabilityScore: 77, lastDelivery: "2026-08-12", note: "انحراف وثيقة مطابقة في السيناريو" },
];

export const crmDeals: CrmDeal[] = [
  { id: "d1", account: "مكتب هندسي — سيناريو", channel: "موقع / بريد", stage: "مواصفة مشروع", skuFocus: "UV + علب مخارج", owner: "مبيعات (تجريبي)" },
  { id: "d2", account: "موزّع إقليمي — سيناريو", channel: "هاتف", stage: "طلب أسبوعي", skuFocus: "مواسير صلبة وتجهيزات", owner: "مبيعات (تجريبي)" },
  { id: "d3", account: "مشروع تصدير — سيناريو", channel: "معرض", stage: "مستندات", skuFocus: "مموج 1250N وBSI", owner: "تصدير (تجريبي)" },
];

export const shopFindings = [
  {
    title: "سلة ظاهرة وعامة فارغة",
    text: "gepico.com يعرض عربة تسوق. التصفح العام يظهر صفر منتجات في السلة.",
  },
  {
    title: "تنزيل خلف تسجيل",
    text: "رسالة صريحة: تحتاج تسجيلاً لتنزيل الملفات. هذا يبطئ المحدّد أكثر مما يحمي كتالوجاً صناعياً.",
  },
  {
    title: "رابط كتالوج عيّنة",
    text: "في صفحات التصنيف يظهر كتاب يرتبط بـ pdfobject.com/pdf/sample.pdf وليس بكتالوج GEPICO.",
  },
  {
    title: "فرصة أوضح: بوابة B2B",
    text: "العميل الطبيعي محدّد أو مقاول أو موزّع. حساب معتمد وطلب كمية أصدق من متجر تجزئة.",
  },
];
