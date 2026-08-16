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
        description="تنوع الأصناف بين دلي وتجزئة يعني تحويلات كثيرة. الجدول سيناريو لشكل لوحة الوردية بعد الرقمنة — ليس إنتاج اليوم."
      />
      <HonestyNote>لا طاقة إنتاج معلنة على الموقع. أي لتر أو كيلوغرام هنا تجريبي.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">دفعات تجريبية</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الدفعة</TableHead>
                <TableHead>الصنف</TableHead>
                <TableHead>الحليب</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>المختبر</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demoBatches.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-mono text-xs">{row.id}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.milkSource}</TableCell>
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
