function readPublic(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function parseEmailList(raw: string): string[] {
  return raw
    .split(/[,;\s]+/)
    .map((e) => e.trim())
    .filter((e) => e.includes("@"));
}

export const siteConfig = {
  nameAr: "جيبيكو",
  nameEn: "GEPICO",
  legalNameAr: "مؤسسة الخليج الفنية الصناعية",
  legalNameEn: "Gulf Technical Industrial Establishment",
  productName: "تصور التحول الرقمي لأنظمة إدارة الأسلاك",
  recipient: "السيد علاء حسين",
  recipientRole: "مشرف المبيعات",
  founderAr: "م. محمود أبو خزنة",
  founderEn: "Eng. Mahmoud Abu Khazneh",
  country: "الأردن",
  city: "عمّان",
  since: 1991,
  websiteUrl: "https://gepico.com/",
  productsUrl: "https://gepico.com/product-category/rigid-conduits/",
  aboutUrl: "https://gepico.com/profile/",
  catalogNote: "الكتالوج القابل للتنزيل على الموقع يشير إلى ملف عيّنة عام، والتحميل يطلب تسجيلاً.",
  defaultMapsUrl: "",
  defaultPhone: "96264023605",
  defaultWhatsAppPhone: "962797000291",
  defaultWhatsAppPrefill: "السلام عليكم السيد علاء حسين بخصوص ",
  defaultEmails: ["info@gepico.com"] as const,
  claims: {
    years: "35+",
    iso9001Since: 1996,
    jordanQualityMarkSince: 1997,
    qualityMarkLevel: "110% من متطلبات المواصفة — حسب الشركة",
    bsi: "شهادات تحقق من BSI — حسب الشركة",
    warehouseM2: "أكثر من 20,000 م²",
    solarNow: "30% طاقة شمسية حالياً",
    solarTarget: "100% طاقة متجددة بحلول 2026 للوصول إلى صافي صفر — هدف معلن",
    exportHonor: "سفراء التصدير وأحد أكبر 100 مصدر في الأردن — حسب إعلان رئاسي للوزراء ورد في الموقع",
    labs: "مختبرات داخلية معتمدة واختبار لكل تشغيل إنتاج — حسب الشركة",
  },
  developer: {
    nameAr: "م. صهيب الصالح",
    phone: "962787523192",
    prefill: "المهندس صهيب الصالح لطفأ نود الاستفسار عن آلية ",
  },
} as const;

export function getDiscoveryFormUrl(): string {
  return readPublic("NEXT_PUBLIC_DISCOVERY_FORM_URL");
}

export function getContactEmail(): string {
  return getContactEmails()[0] ?? "";
}

export function getContactEmails(): string[] {
  const fromEnv = parseEmailList(readPublic("NEXT_PUBLIC_CONTACT_EMAILS"));
  if (fromEnv.length) return fromEnv;
  const single = readPublic("NEXT_PUBLIC_CONTACT_EMAIL");
  if (single) {
    const parts = parseEmailList(single);
    if (parts.length) return parts;
  }
  return [...siteConfig.defaultEmails];
}

export function getMapsUrl(): string {
  return readPublic("NEXT_PUBLIC_MAPS_URL") || siteConfig.defaultMapsUrl;
}

export function getCompanyWebsiteUrl(): string {
  return readPublic("NEXT_PUBLIC_COMPANY_WEBSITE") || siteConfig.websiteUrl;
}

export function getPhone(): string {
  const raw = readPublic("NEXT_PUBLIC_PHONE") || siteConfig.defaultPhone;
  return raw.replace(/[^\d]/g, "");
}

export function getPhoneDisplay(): string {
  const digits = getPhone();
  if (!digits) return "";
  if (digits.startsWith("962") && digits.length === 11) {
    return `+962-${digits.slice(3, 4)}-${digits.slice(4, 8)}-${digits.slice(8)}`;
  }
  return `+${digits}`;
}

export function getPhoneUrl(): string {
  const phone = getPhone();
  if (!phone) return "";
  return `tel:+${phone}`;
}

export function getWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_WHATSAPP_PHONE") || siteConfig.defaultWhatsAppPhone;
  return raw.replace(/[^\d]/g, "");
}

export function getWhatsAppPhoneDisplay(): string {
  const digits = getWhatsAppPhone();
  if (!digits) return "";
  return digits.startsWith("+") ? digits : `+${digits}`;
}

export function getWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_WHATSAPP_PREFILL") || siteConfig.defaultWhatsAppPrefill
  );
}

export function getWhatsAppUrl(extra = ""): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  const text = `${getWhatsAppPrefill()}${extra}`.trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppQrValue(): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  return `https://wa.me/${phone}`;
}

export function getDeveloperWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PHONE") || siteConfig.developer.phone;
  return raw.replace(/[^\d]/g, "");
}

export function getDeveloperWhatsAppPhoneDisplay(): string {
  const digits = getDeveloperWhatsAppPhone();
  if (!digits) return "";
  return `+${digits}`;
}

export function getDeveloperWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PREFILL") ||
    siteConfig.developer.prefill
  );
}

export function getDeveloperWhatsAppUrl(): string {
  const phone = getDeveloperWhatsAppPhone();
  if (!phone) return "";
  const text = getDeveloperWhatsAppPrefill().trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getSiteUrl(): string {
  return readPublic("NEXT_PUBLIC_SITE_URL") || "http://localhost:3000";
}

export const hasOpenAiKey = Boolean(process.env.OPENAI_API_KEY);
