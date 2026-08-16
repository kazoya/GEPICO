import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RetailPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="التجزئة والتوزيع"
        description="الموقع يقول إن المنتجات متوفرة في سوبرماركت ومتاجر الأردن. لا قائمة سلاسل ولا جداول توزيع علنية."
      />
      <HonestyNote>أي اسم سلسلة في صفحات أخرى سيناريو مستعار وليس عميلاً مؤكداً.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">ما يظهر للعامة</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            توفر وطني، سلة موقع غير مكتملة، وكتالوج غني بالأوزان. علاقة الدلي (4–5 كغ) بالتجزئة (150–250 غ)
            تحتاج تخطيط إنتاج مختلف.
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">ما نسأله في الاكتشاف</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            من يأخذ الطلب؟ هل يوجد حد أدنى للدلي؟ كيف تُدار المرتجعات وانتهاء الصلاحية على الرف؟ هل التسليم
            بأسطول الشركة أم موزّع؟
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
