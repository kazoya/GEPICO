import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { shopFindings } from "@/data/crm";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="البوابة والقنوات"
        description="الموقع يعرض سلة وتحميلاً للكتالوج. التصفح العام يُظهر سلة فارغة وتسجيلاً للتنزيل وملف عيّنة. هذا فراغ تشغيلي أكثر مما هو خلل تجميلي."
      />
      <HonestyNote>
        لا نبني متجراً استهلاكياً قبل فهم من يطلب المجرى وكيف يُسعَّر الطلب. التسعير يبقى بشرياً.
      </HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {shopFindings.map((item) => (
          <Card key={item.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
          </Card>
        ))}
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">تسلسل مقترح للقنوات</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          <ol className="list-decimal space-y-2 pr-5">
            <li>توثيق قناة الطلب الحالية (مندوب / هاتف / بريد / معرض).</li>
            <li>تنظيف الكتالوج: إزالة العناصر الاختبارية والنسخ، واستبدال sample.pdf بملف رسمي.</li>
            <li>بوابة حسابات للمحدّد والموزّع: أصناف وكميات وموافقة السعر.</li>
            <li>لا تُترك سلة WooCommerce فارغة إن كانت واجهة عامة — إمّا تُشغَّل أو تُخفى حتى لا تُضعف الثقة.</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
