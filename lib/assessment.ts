import { z } from "zod";

export const STORAGE_KEY = "gepico-discovery-assessment";

const text = z.string();
const list = z.array(z.string());

export const assessmentSchema = z.object({
  customerTypes: list,
  inquiryChannel: text,
  quoteProcess: text,
  priceApproval: text,
  materialPartners: text,
  materialBuffer: text,
  lineCount: text,
  capacityReserve: text,
  changeover: text,
  labStages: text,
  holdRelease: text,
  certificates: text,
  recallReady: text,
  warehouseSystem: text,
  availableToPromise: text,
  packLabel: text,
  exportMarkets: text,
  exportDocsHours: text,
  solarMetering: text,
  shopStatus: text,
  specifierPortalNeed: text,
  systems: list,
  hasApi: text,
  dailyReports: text,
  weeklyReports: text,
  notes: text,
});

export type AssessmentValues = z.infer<typeof assessmentSchema>;

export const defaultAssessment: AssessmentValues = {
  customerTypes: [],
  inquiryChannel: "",
  quoteProcess: "",
  priceApproval: "",
  materialPartners: "",
  materialBuffer: "",
  lineCount: "",
  capacityReserve: "",
  changeover: "",
  labStages: "",
  holdRelease: "",
  certificates: "",
  recallReady: "",
  warehouseSystem: "",
  availableToPromise: "",
  packLabel: "",
  exportMarkets: "",
  exportDocsHours: "",
  solarMetering: "",
  shopStatus: "",
  specifierPortalNeed: "",
  systems: [],
  hasApi: "",
  dailyReports: "",
  weeklyReports: "",
  notes: "",
};

export const customerTypeOptions = [
  "محدّد / مكتب هندسي",
  "مقاول تركيب",
  "موزّع",
  "مالك مشروع",
  "تصدير",
  "غير معروف بعد",
];
export const channelOptions = ["مندوب", "هاتف", "واتساب", "بريد", "موقع", "معرض", "تصدير"];
export const systemOptions = [
  "لا شيء رقمي",
  "إكسل",
  "محاسبة فقط",
  "WooCommerce",
  "نظام جودة",
  "ERP",
  "WMS",
  "غير معروف",
];

export function loadAssessment(): AssessmentValues {
  if (typeof window === "undefined") return defaultAssessment;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultAssessment;
    const parsed = assessmentSchema.partial().parse(JSON.parse(raw));
    return { ...defaultAssessment, ...parsed };
  } catch {
    return defaultAssessment;
  }
}

export function saveAssessment(values: AssessmentValues) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

export function summarizeAssessment(values: AssessmentValues) {
  const filled = Object.values(values).filter((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value && String(value).trim()),
  ).length;
  const total = Object.keys(defaultAssessment).length;
  return { filled, total, pct: Math.round((filled / total) * 100) };
}
