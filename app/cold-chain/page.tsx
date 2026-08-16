import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const points = [
  { title: "المختبر إلى الخط", text: "دفعة مفرج عنها لا تعني أنها تحت الحرارة الصحيحة حتى التعبئة." },
  { title: "المستودع", text: "حدود حرارة مختلفة للبن والجميد السائل والأجبان — تُؤكَّد في الاكتشاف." },
  { title: "التحميل", text: "غالباً أضعف حلقة: باب مفتوح وممر دافئ." },
  { title: "الشاحنة", text: "مسجّل حرارة أو افتراض. الفرق يغيّر شكل الحل." },
  { title: "الرف", text: "MultiFresh تطيل العمر على الرف حسب ادّعاء الشركة — لا يغني عن التبريد قبلها." },
];

export default function ColdChainPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="سلسلة التبريد"
        description="منتج تراثي يفقد ميزته إن وصلت الحرارة خارج الحد. لا أجهزة مخترعة هنا — فقط خريطة أسئلة."
      />
      <HonestyNote>لا توجد بيانات حرارة عامة. أي تنبيه في لوحة القيادة سيناريو تجريبي.</HonestyNote>
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
