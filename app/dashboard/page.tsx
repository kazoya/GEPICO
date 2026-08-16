import { TrendChart } from "@/components/charts/trend-chart";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { insights, monthlyKpis } from "@/data/kpis";

export default function DashboardPage() {
  const last = monthlyKpis[monthlyKpis.length - 1];

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="لوحة القيادة"
        description="مؤشرات سيناريو لشكل النقاش مع الإدارة. ليست أرقام تشغيل المزرعة."
      />
      <HonestyNote>كل رقم أدناه بيانات تجريبية. لا يُنقل إلى عرض مالي أو تقرير داخلي على أنه واقع.</HonestyNote>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="حليب (لتر) — سيناريو" value={last.milkLiters} hint={last.month} />
        <KpiCard label="جبن (كغ) — سيناريو" value={last.cheeseKg} hint={`عائد ${last.yieldPct}%`} />
        <KpiCard label="دفعات محتجزة" value={last.holdLots} hint="تحتاج إفراجاً بشرياً" />
        <KpiCard label="تنبيهات تبريد" value={last.coldAlerts} hint="سيناريو" />
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">اتجاه تجريبي</CardTitle>
        </CardHeader>
        <CardContent>
          <TrendChart
            data={monthlyKpis}
            xKey="month"
            series={[
              { key: "cheeseKg", name: "جبن كغ", color: "#1b4332" },
              { key: "holdLots", name: "احتجاز", color: "#c4a574" },
            ]}
          />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        {insights.map((item) => (
          <Card key={item.id} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
              <p>{item.reason}</p>
              <p className="text-foreground">{item.recommendedAction}</p>
              <p className="text-xs">ثقة النموذج التجريبية: {Math.round(item.confidence * 100)}٪</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop />
    </div>
  );
}
