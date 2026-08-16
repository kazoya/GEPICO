import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const points = [
  { title: "تقليل المادة", text: "الموقع يذكر إعادة تصميم التعبئة لتقليل الخامة وزيادة الحماية." },
  { title: "قيمة معلنة", text: "من القيم السبع: استخدام أنسب تعبئة. التفاصيل التشغيلية غير منشورة." },
  { title: "خطر الملصق", text: "عيارات متشابهة (320N / 750N / 1250N) إن أُخطئ الملصق وصلت شحنة خاطئة للموقع." },
  { title: "فرصة", text: "طباعة الملصق من أمر التشغيل ومنع الشحن دون مطابقة الصنف والقياس." },
];

export default function PackagingPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="التعبئة والشحن"
        description="التعبئة جزء من معادلة القيمة المعلنة. لا مواصفات عبوة علنية — نسأل الخط في الاكتشاف."
      />
      <HonestyNote>لم نرَ صور عبوات معتمدة أو وزن شحنة معياري من مصدر عام موثوق بخلاف ادّعاء إعادة التصميم.</HonestyNote>
      <div className="grid gap-3 sm:grid-cols-2">
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
