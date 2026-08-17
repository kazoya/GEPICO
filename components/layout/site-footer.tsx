import { Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import {
  getCompanyWebsiteUrl,
  getContactEmails,
  getDiscoveryFormUrl,
  getPhoneDisplay,
  getPhoneUrl,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/config";

export function SiteFooter() {
  const whatsapp = getWhatsAppUrl();
  const formUrl = getDiscoveryFormUrl();
  const website = getCompanyWebsiteUrl();
  const emails = getContactEmails();
  const phone = getPhoneDisplay();
  const phoneUrl = getPhoneUrl();

  return (
    <footer className="mt-16 border-t border-border/80 bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-28 shrink-0 overflow-hidden rounded-2xl border border-gold/40 bg-white p-1.5">
              <BrandLogo alt={siteConfig.nameAr} />
            </span>
            <div>
              <p className="text-sm font-medium">نبدأ من واقع المصنع، لا من افتراضات قطاع الكهرباء العامة.</p>
              <p className="text-xs text-muted-foreground">
                {siteConfig.legalNameAr} · منذ {siteConfig.since}
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            إلى عناية {siteConfig.recipient} — {siteConfig.recipientRole}. الهاتف المنشور: {phone}.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {phoneUrl ? (
              <a
                className="inline-flex cursor-pointer items-center gap-1 text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={phoneUrl}
              >
                <Phone className="size-3.5" aria-hidden />
                <span dir="ltr">{phone}</span>
              </a>
            ) : null}
            {emails.map((email) => (
              <a
                key={email}
                className="inline-flex cursor-pointer items-center gap-1 text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={`mailto:${email}`}
              >
                <Mail className="size-3.5" aria-hidden />
                <span dir="ltr">{email}</span>
              </a>
            ))}
            <a
              className="cursor-pointer text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
              href={website}
              target="_blank"
              rel="noreferrer"
            >
              الموقع الرسمي
            </a>
            {formUrl ? (
              <a
                className="cursor-pointer text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={formUrl}
                target="_blank"
                rel="noreferrer"
              >
                نموذج الاكتشاف الكامل
              </a>
            ) : null}
          </div>
          <p className="text-xs leading-6 text-muted-foreground">
            هذا النموذج تصور تقني مستقل ومقترح أولي لأغراض العرض والنقاش، ولا يمثل نظاماً رسمياً
            تابعاً لـ {siteConfig.legalNameAr}.
          </p>
        </div>
        <div className="space-y-4">
          {whatsapp ? <WhatsAppQr /> : null}
          <DeveloperQr />
        </div>
      </div>
    </footer>
  );
}
