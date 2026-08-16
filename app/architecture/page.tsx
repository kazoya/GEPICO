import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const layers = [
  { title: "الواجهة", text: "عربية RTL — لوحات جودة وإنتاج ومبيعات. هذا المشروع هو الطبقة الظاهرة." },
  { title: "العمليات", text: "استلام، إفراج، دفعات، مخزون FEFO، طلبات B2B، حزمة تصدير." },
  { title: "التكامل", text: "لاحقاً: موازين، حرارة، خط Multivac إن وُجدت واجهة، ومحاسبة قائمة." },
  { title: "الذكاء", text: "بحث في الوثائق + اقتراحات بعد تاريخ كافٍ. لا قرار ذاتي على الوصفة أو الإفراج." },
];

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="البنية المقترحة"
        description="طبقات واضحة حتى لا يُفهم المشروع على أنه «شات بوت على المصنع»."
      />
      <HonestyNote>لا ERP مخترع هنا. إن وُجد نظام قائم نتكامل معه بعد الاكتشاف.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {layers.map((item) => (
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
