import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const points = [
  { title: "المساحة المعلنة", text: `${siteConfig.claims.warehouseM2} لمنتجات تامة — حسب صفحة الإنجازات.` },
  { title: "التلبية الفورية", text: "سياسة معلنة: مخزون للأصناف القياسية حتى لا يتأخر الطلب. يحتاج رقماً متاحاً للبيع." },
  { title: "عيّنات علامة الجودة", text: "المفتشون يأخذون عيّنات عشوائية من المستودعات سنوياً — أثر الجرد مهم." },
  { title: "الشحن", text: "مسار من الإفراج المخبري إلى التحميل. لا نفترض WMS قائماً." },
];

export default function ColdChainPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="المستودع والتلبية"
        description="وعد التلبية الفورية لا يصدق إلا إن رأت المبيعات الكمية المتاحة قبل وعد العميل."
      />
      <HonestyNote>لا جرد عام منشور. أي رقم مخزون في لوحة القيادة سيناريو تجريبي.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {points.map((item) => (
          <Card key={item.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
