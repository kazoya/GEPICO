import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getCompanyWebsiteUrl,
  getContactEmails,
  getDiscoveryFormUrl,
  getPhoneDisplay,
  getPhoneUrl,
  getWhatsAppPhoneDisplay,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/config";

export default function ContactPage() {
  const whatsapp = getWhatsAppUrl();
  const formUrl = getDiscoveryFormUrl();
  const website = getCompanyWebsiteUrl();
  const phone = getPhoneDisplay();
  const phoneUrl = getPhoneUrl();
  const emails = getContactEmails();
  const salesPhone = getWhatsAppPhoneDisplay();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="تواصل معنا"
        description="للتواصل مع مشرف المبيعات أو مطوّر هذا التصور. هاتف وبريد المصنع أدناه كما ظهرا على gepico.com."
        demo={false}
      />
      {salesPhone ? (
        <p className="text-sm text-muted-foreground">
          واتساب {siteConfig.recipientRole}:{" "}
          <span className="font-mono text-foreground" dir="ltr">
            {salesPhone}
          </span>
        </p>
      ) : null}
      {phone ? (
        <p className="text-sm text-muted-foreground">
          هاتف الشركة المنشور (24 ساعة حسب الموقع):{" "}
          <span className="font-mono text-foreground" dir="ltr">
            {phone}
          </span>
        </p>
      ) : null}
      <div className="flex flex-col gap-2 rounded-xl border border-gold/20 bg-ochre/40 p-4 text-sm">
        <p className="font-medium text-foreground">البريد الإلكتروني</p>
        {emails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="inline-flex cursor-pointer items-center gap-2 text-copper underline-offset-4 hover:underline"
          >
            <Mail className="size-3.5" aria-hidden />
            <span dir="ltr">{email}</span>
          </a>
        ))}
      </div>
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
        {phoneUrl ? (
          <Button asChild variant="outline" className="cursor-pointer border-gold/40">
            <a href={phoneUrl}>
              <Phone className="size-4" aria-hidden />
              اتصال بالمصنع
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
          <CardTitle className="text-base">ما نُشر على الموقع</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7">
          <p>
            {siteConfig.legalNameAr} — {siteConfig.city}، {siteConfig.country}. لم يُنشر عنوان شارع تفصيلي
            على صفحة التواصل التي راجعناها.
          </p>
          <a href={website} target="_blank" rel="noreferrer" className="text-copper underline-offset-4 hover:underline">
            {siteConfig.websiteUrl}
          </a>
        </CardContent>
      </Card>
      <DeveloperQr />
      <HonestyNote>
        {siteConfig.recipient}، صُمم هذا النموذج ليكون بداية نقاش عملي. الهاتف والبريد أعلاه من الموقع العام.
        رقم الواتساب أعلاه للتواصل مع مشرف المبيعات، ولم يكن منشوراً على gepico.com وقت المراجعة.
      </HonestyNote>
    </div>
  );
}
