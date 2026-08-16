import Link from "next/link";
import { MapPin } from "lucide-react";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getCompanyWebsiteUrl,
  getDiscoveryFormUrl,
  getMapsUrl,
  getWhatsAppPhoneDisplay,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/config";

export default function ContactPage() {
  const whatsapp = getWhatsAppUrl();
  const formUrl = getDiscoveryFormUrl();
  const mapsUrl = getMapsUrl();
  const website = getCompanyWebsiteUrl();
  const phone = getWhatsAppPhoneDisplay();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="تواصل معنا"
        description="للتواصل مع مشرف المبيعات أو مطوّر هذا التصور. العنوان أدناه كما نُشر للعامة على الموقع الرسمي."
        demo={false}
      />
      {phone ? (
        <p className="text-sm text-muted-foreground">
          واتساب {siteConfig.recipientRole}:{" "}
          <span className="font-mono text-foreground" dir="ltr">
            {phone}
          </span>
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild className="cursor-pointer">
          <Link href="/assessment">إكمال تقييم المصنع</Link>
        </Button>
        {whatsapp ? (
          <Button asChild variant="outline" className="cursor-pointer border-gold/40">
            <a href={whatsapp} target="_blank" rel="noreferrer">
              طلب جلسة Discovery
            </a>
          </Button>
        ) : null}
        {mapsUrl ? (
          <Button asChild variant="secondary" className="cursor-pointer">
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin className="size-4" aria-hidden />
              موقع المصنع
            </a>
          </Button>
        ) : null}
        <Button asChild variant="secondary" className="cursor-pointer">
          <a href={website} target="_blank" rel="noreferrer">
            الموقع الرسمي
          </a>
        </Button>
        {formUrl ? (
          <Button asChild variant="ghost" className="cursor-pointer">
            <a href={formUrl} target="_blank" rel="noreferrer">
              النموذج الكامل
            </a>
          </Button>
        ) : null}
      </div>
      <WhatsAppQr />
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">العنوان المنشور على الموقع</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7">
          <p>{siteConfig.postalAddressAr}</p>
          <a href={website} target="_blank" rel="noreferrer" className="text-copper underline-offset-4 hover:underline">
            {siteConfig.websiteUrl}
          </a>
        </CardContent>
      </Card>
      <div className="rounded-xl border border-gold/30 bg-primary p-4">
        <p className="mb-3 text-sm text-primary-foreground/80">للتواصل مع المبرمج امسح الرمز</p>
        <DeveloperQr />
      </div>
      <HonestyNote>
        {siteConfig.recipient}، صُمم هذا النموذج ليكون بداية نقاش عملي حول ما يمكن للتحول الرقمي
        والأتمتة إضافته إلى عمليات الألبان. رقم الواتساب أعلاه للتواصل مع مشرف المبيعات، ولم يكن
        منشوراً على mazraadairy.com وقت المراجعة.
      </HonestyNote>
    </div>
  );
}
