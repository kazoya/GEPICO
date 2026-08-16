import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const markets = ["الشرق الأوسط", "أسواق عالمية (غير مفصّلة)", "توسّع مصانع في أسواق أخرى — خطة معلنة"];

export default function ExportPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="التصدير والأسواق"
        description={siteConfig.claims.exportHonor}
      />
      <HonestyNote>الموقع لا ينشر قائمة دول أو أحجام شحن. الأسماء أدناه مناطق ذكر عامة لا جدول تصدير.</HonestyNote>
      <div className="flex flex-wrap gap-2">
        {markets.map((m) => (
          <span key={m} className="rounded-full border bg-card px-3 py-1.5 text-sm">
            {m}
          </span>
        ))}
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">حزمة المستندات المقترحة</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          ربط كل شحنة: رقم التشغيل، ISO 9001، علامة الجودة الأردنية، تحقق BSI إن طُلب، ومتطلبات بلد الوصول.
          الزمن المستهدف يُقاس بعد الاكتشاف لا قبله.
        </CardContent>
      </Card>
    </div>
  );
}
