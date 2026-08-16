import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatLabel } from "@/data/products";

const formats = Object.entries(formatLabel);

export default function PackagingPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="التعبئة MultiFresh"
        description="الشركة تعلن تعاوناً مع Multivac ألمانيا وتقنية MultiFresh لحفظ الطعم دون إضافات. هذا ادّعاء تسويقي يُراجع على الخط."
      />
      <HonestyNote>
        لم نرَ مواصفات الآلة أو عدد الخطوط أو OEE. صفحة المنتجات تُظهر سكن وفلكسبل ومرتبان وبراميل.
      </HonestyNote>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map(([key, label]) => (
          <Card key={key} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{label}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">
              فرصة لاحقة: وزن مستهدف، تاريخ إنتاج/انتهاء، وربط باركود الدفعة قبل الخروج من الخط.
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
