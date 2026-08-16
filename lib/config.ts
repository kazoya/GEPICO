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
  nameAr: "المزرعة للألبان",
  nameEn: "AlMazraa Dairy",
  productName: "تصور التحول الرقمي للألبان",
  recipient: "السيد علاء حماد",
  recipientRole: "مشرف المبيعات",
  founderAr: "أحمد برّاك الشقعة",
  founderEn: "Ahmad Barrak Shakaa",
  country: "الأردن",
  city: "عمّان",
  since: 1994,
  websiteUrl: "https://mazraadairy.com/",
  productsUrl: "https://mazraadairy.com/our-products/",
  aboutUrl: "https://mazraadairy.com/about-us/",
  defaultMapsUrl: "",
  defaultWhatsAppPhone: "962796045082",
  defaultWhatsAppPrefill: "السلام عليكم السيد علاء حماد بخصوص ",
  defaultEmails: [] as const,
  postalAddressAr:
    "صندوق بريد: 851488 عمّان 11185 الأردن — عمّان المقابلين حي الحسنية شارع عين سيرين",
  claims: {
    marketShareBulkWhiteCheese: "65%",
    exportCountries: "أكثر من 12 دولة",
    ingredients: ["حليب طازج", "ملح طبيعي", "إنزيم ميكروبي"],
    certificates: ["ISO 22000", "حلال"],
    packaging: "Multivac ألمانيا — تقنية MultiFresh",
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
