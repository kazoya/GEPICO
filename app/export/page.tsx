import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const markets = ["دول الخليج", "فلسطين", "الولايات المتحدة", "كندا", "أستراليا"];

export default function ExportPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="التصدير"
        description={`حسب الموقع: وصول إلى ${siteConfig.claims.exportCountries} بعد فحوصات في تلك الأسواق.`}
      />
      <HonestyNote>الأسماء أدناه مناطق ذكرها الموقع. ليست قائمة شحنات فعلية ولا تواريخ.</HonestyNote>
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
          ربط كل شحنة تصدير: رقم الدفعة، شهادة حلال، ISO 22000، متطلبات بلد الوصول، وسلسلة تبريد الشحن.
          الزمن المستهدف يُقاس بعد الاكتشاف لا قبله.
        </CardContent>
      </Card>
    </div>
  );
}
