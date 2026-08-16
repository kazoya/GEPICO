import { z } from "zod";

export const STORAGE_KEY = "farm-dairy-discovery-assessment";

const text = z.string();
const list = z.array(z.string());

export const assessmentSchema = z.object({
  milkSources: list,
  supplierCount: text,
  intakeDigital: text,
  rejectRules: text,
  labStages: text,
  holdRelease: text,
  certificates: text,
  recallReady: text,
  lineCount: text,
  skuChangeover: text,
  yieldTracked: text,
  recipeControl: text,
  packLines: text,
  multifreshNotes: text,
  weightChecks: text,
  coldRooms: text,
  truckTemp: text,
  alertProcess: text,
  orderChannels: list,
  shopStatus: text,
  b2bNeed: text,
  exportMarkets: text,
  exportDocsHours: text,
  systems: list,
  hasApi: text,
  dailyReports: text,
  weeklyReports: text,
  notes: text,
});

export type AssessmentValues = z.infer<typeof assessmentSchema>;

export const defaultAssessment: AssessmentValues = {
  milkSources: [],
  supplierCount: "",
  intakeDigital: "",
  rejectRules: "",
  labStages: "",
  holdRelease: "",
  certificates: "",
  recallReady: "",
  lineCount: "",
  skuChangeover: "",
  yieldTracked: "",
  recipeControl: "",
  packLines: "",
  multifreshNotes: "",
  weightChecks: "",
  coldRooms: "",
  truckTemp: "",
  alertProcess: "",
  orderChannels: [],
  shopStatus: "",
  b2bNeed: "",
  exportMarkets: "",
  exportDocsHours: "",
  systems: [],
  hasApi: "",
  dailyReports: "",
  weeklyReports: "",
  notes: "",
};

export const milkSourceOptions = ["بقر", "غنم", "ماعز", "خلطة", "غير معروف بعد"];
export const channelOptions = ["مندوب", "هاتف", "واتساب", "بريد", "موقع", "تاجر دلي", "تصدير"];
export const systemOptions = [
  "لا شيء رقمي",
  "إكسل",
  "محاسبة فقط",
  "WooCommerce",
  "نظام جودة",
  "ERP",
  "أجهزة حرارة",
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
