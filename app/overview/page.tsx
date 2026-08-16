import Link from "next/link";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const layers = [
  {
    title: "ما نعرفه من المصدر العام",
    items: [
      `تأسيس ${siteConfig.since} على يد ${siteConfig.founderAr}`,
      "أجبان بيضاء تراثية ولبنة وجميد ولبن وشنينة وسمنة",
      "ISO 22000 وحلال — حسب الموقع",
      "تعبئة MultiFresh مع Multivac ألمانيا — حسب الموقع",
      `تصدير معلن إلى ${siteConfig.claims.exportCountries}`,
    ],
  },
  {
    title: "ما لا نعرفه بعد",
    items: [
      "طاقة الحليب اليومية وعدد الخطوط",
      "قائمة الموردين وحدود القبول",
      "هل التتبع من العبوة إلى الصهريج مكتمل؟",
      "قناة الطلب الحقيقية للدلي والتجزئة",
      "هاتف أو بريد تشغيل معلن",
    ],
  },
  {
    title: "ماذا يقترح هذا التصور",
    items: [
      "اكتشاف ميداني أولاً",
      "رقمنة الاستلام والمختبر قبل الذكاء",
      "بوابة B2B أوضح من سلة تجزئة فارغة",
      "تبريد وتتبع كشرط لأي توسع تصدير",
      "قرار بشري على السعر والوصفة والإفراج",
    ],
  },
];

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        eyebrow="Executive brief"
        title="تصور تنفيذي لشركة ألبان لا لقالب مصنع"
        description="الإدارة ترى دورة كاملة: حليب، جودة، خط، تبريد، رف، تصدير. ليست دردشة ولا لوحة أرقام مخترعة."
      />
      <HonestyNote>
        حصة السوق {siteConfig.claims.marketShareBulkWhiteCheese} في الجبن الأبيض بالجملة وردت في الموقع
        الرسمي فقط. نعرضها كادّعاء شركة.
      </HonestyNote>
      <div className="grid gap-4 md:grid-cols-3">
        {layers.map((layer) => (
          <Card key={layer.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{layer.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pr-4 text-sm leading-7 text-muted-foreground">
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop />
      <div className="flex flex-wrap gap-2">
        <Button asChild className="cursor-pointer">
          <Link href="/workflow">رحلة العملية</Link>
        </Button>
        <Button asChild variant="outline" className="cursor-pointer">
          <Link href="/assessment">ابدأ الاكتشاف</Link>
        </Button>
      </div>
    </div>
  );
}
