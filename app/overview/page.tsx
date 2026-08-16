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
      "اثنتا عشرة عائلة منتج من المجرى إلى ملحقات التركيب",
      "ISO 9001 منذ 1996 وعلامة الجودة الأردنية منذ 1997 وتحقق BSI",
      `مستودع معلن ${siteConfig.claims.warehouseM2} وطاقة احتياطية لعدم تأخير الطلبات`,
      siteConfig.claims.exportHonor,
    ],
  },
  {
    title: "ما لا نعرفه بعد",
    items: [
      "الطاقة بالطن وعدد الخطوط والوردية",
      "أسماء مورّدي الخامات وحدود القبول",
      "هل نتائج المختبر مربوطة بأمر البيع؟",
      "قناة الطلب الحقيقية للمحدّد والموزّع",
      "كيف يُقاس رقم 30% طاقة شمسية وهدف 2026",
    ],
  },
  {
    title: "ماذا يقترح هذا التصور",
    items: [
      "اكتشاف ميداني أولاً",
      "تنظيف الكتالوج وبوابة حسابات قبل متجر تجزئة",
      "إفراج مخبري رقمي قبل الشحن",
      "توافر المستودع للبيع حتى يصدق وعد التلبية الفورية",
      "قرار بشري على السعر والمواصفة والإفراج",
    ],
  },
];

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        eyebrow="Executive brief"
        title="تصور تنفيذي لمصنّع أنظمة أسلاك لا لقالب مصنع"
        description="الإدارة ترى دورة كاملة: مواصفة، خامة، خط، مختبر، مستودع، محدّد، تصدير. ليست دردشة ولا لوحة أرقام مخترعة."
      />
      <HonestyNote>
        أرقام الطاقة والمستودع والشمس وردت كادّعاءات على الموقع الرسمي. نعرضها كذلك، لا كقياس مستقل.
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
