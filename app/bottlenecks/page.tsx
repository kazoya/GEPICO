import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bottlenecks } from "@/data/workflow";
import { departmentLabel } from "@/lib/format";

export default function BottlenecksPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="اختناقات محتملة — للتحقق لا للاتهام"
        description="هذه فرضيات من طبيعة تصنيع أنظمة الأسلاك ومن قراءة الموقع. لا نصف بها عمل GEPICO اليوم."
      />
      <HonestyNote>كل بطاقة تنتهي بسؤال اكتشاف. إن لم يُجب السؤال تبقى فرضية.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {bottlenecks.map((item) => (
          <Card key={item.id} className="shadow-sm">
            <CardHeader>
              <p className="text-xs text-copper">{departmentLabel[item.department]}</p>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
              <p>{item.description}</p>
              <p className="text-foreground">سؤال الاكتشاف: {item.signalToInvestigate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
