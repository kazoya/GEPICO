import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { qualityControls, recallQuestions } from "@/data/quality";

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="الجودة وسلامة الغذاء"
        description="في الألبان الجودة ليست قسماً جانبياً. الإفراج والتتبع والاستدعاء أعمدة أي تصور موثوق."
      />
      <HonestyNote>الشهادات مأخوذة من نص الشركة. لم نراجع ملفات الشهادات الأصلية.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {qualityControls.map((item) => (
          <Card key={item.id} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
              <p>{item.detail}</p>
              <p className="text-xs">{item.source}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">أسئلة التتبع في الاكتشاف</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pr-5 text-sm leading-7 text-muted-foreground">
            {recallQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <HumanInTheLoop note="الإفراج عن الدفعة والاستدعاء قرار جودة بشري. النظام يوثّق ويقترح النطاق فقط." />
    </div>
  );
}
