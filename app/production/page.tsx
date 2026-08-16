import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { demoBatches } from "@/data/kpis";
import { batchStatusLabel } from "@/lib/format";

export default function ProductionPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="الإنتاج"
        description="الشركة تعلن استثماراً في الخطوط وطاقة احتياطية حتى لا يتأخر طلب. الجدول سيناريو لشكل لوحة الوردية بعد الرقمنة — ليس إنتاج اليوم."
      />
      <HonestyNote>لا طاقة بالطن معلنة على الموقع. أي رقم تشغيل هنا تجريبي.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">تشغيلات تجريبية</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>التشغيل</TableHead>
                <TableHead>الصنف</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>المختبر</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demoBatches.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-mono text-xs">{row.id}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{batchStatusLabel[row.status]}</Badge>
                  </TableCell>
                  <TableCell>{row.labResult}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
