import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RetailPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="المحدّدون والتركيب"
        description="الشركة تعلن فريقاً هندسياً يعرف المواصفات وحالات التركيب، وتتعلم من العملاء لإطلاق أصناف مثل LSF وUV للألواح الشمسية."
      />
      <HonestyNote>أي اسم مكتب أو مشروع في صفحات أخرى سيناريو مستعار وليس عميلاً مؤكداً.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">ما يظهر للعامة</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            استشارة تركيب، أجندة معارض، ورؤية أن تصبح الشركة المورّد الإقليمي من حيث حجم المبيعات خلال خمس سنوات.
            الكتالوج العام مع ذلك خلف تسجيل وملف عيّنة.
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">ما نسأله في الاكتشاف</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            من يصل المحدّد اليوم؟ كم يستغرق الرد على مواصفة مشروع؟ هل المهندسون يعملون من دليل داخلي أدق من الموقع؟
            كيف تُلتقط دروس المعارض في سجل عملاء؟
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
