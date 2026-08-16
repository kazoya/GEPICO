import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phases = [
  { title: "الأسبوع 1–2", text: "جولة اكتشاف: قناة الطلب، المختبر، المستودع، الخطوط، الكتالوج الداخلي." },
  { title: "الأسبوع 3–5", text: "تجريب إفراج مخبري رقمي على عدد محدود من التشغيلات." },
  { title: "الأسبوع 6–8", text: "بوابة محدّد/موزّع لحسابات تجريبية، دون تسعير آلي، وتنظيف الكتالوج العام." },
  { title: "بعدها", text: "توافر المستودع، حزمة تصدير، ومساعد مواصفات إن اكتملت الأرشفة." },
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="خطة التنفيذ"
        description="تجريب ضيق يمكن إيقافه. لا استبدال لخط الإنتاج في المرحلة الأولى."
      />
      <HonestyNote>الجدول زمني إرشادي للنقاش. المدة الحقيقية تُحدَّد بعد زيارة المصنع.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {phases.map((item) => (
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
