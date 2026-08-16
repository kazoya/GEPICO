import { MapPin } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import {
  getCompanyWebsiteUrl,
  getDiscoveryFormUrl,
  getMapsUrl,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/config";

export function SiteFooter() {
  const whatsapp = getWhatsAppUrl();
  const formUrl = getDiscoveryFormUrl();
  const mapsUrl = getMapsUrl();
  const website = getCompanyWebsiteUrl();

  return (
    <footer className="mt-16 border-t border-border/80 bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-2xl border border-gold/40 bg-black p-1">
              <BrandLogo alt={siteConfig.nameAr} />
            </span>
            <div>
              <p className="text-sm font-medium">نبدأ من واقع المصنع، لا من افتراضات الألبان العامة.</p>
              <p className="text-xs text-muted-foreground">
                {siteConfig.nameAr} · منذ {siteConfig.since}
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            للتواصل مع {siteConfig.recipient} — {siteConfig.recipientRole}. العنوان البريدي
            المنشور: {siteConfig.postalAddressAr}
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {whatsapp ? (
              <a
                className="cursor-pointer text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                محادثة واتساب
              </a>
            ) : null}
            {mapsUrl ? (
              <a
                className="inline-flex cursor-pointer items-center gap-1 text-copper underline-offset-4 transition-colors hover:text-foreground hover:underline"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="size-3.5" aria-hidden />
                موقع المصنع على الخريطة
              </a>
            ) : null}
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
            تابعاً لشركة المزرعة للألبان.
          </p>
        </div>
        <div className="space-y-4">
          <WhatsAppQr />
          <div className="rounded-xl border border-gold/30 bg-primary p-3">
            <p className="mb-2 text-xs text-primary-foreground/80">للتواصل مع المبرمج امسح الرمز</p>
            <DeveloperQr />
          </div>
        </div>
      </div>
    </footer>
  );
}
