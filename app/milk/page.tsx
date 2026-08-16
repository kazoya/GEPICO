import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { demoSuppliers } from "@/data/crm";

export default function MilkPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="الحليب والموردون"
        description="الموقع يؤكد الاعتماد على حليب طازج من بقر وغنم وماعز في أصناف محددة. أسماء الموردين غير معلنة."
      />
      <HonestyNote>الجدول أدناه أسماء مستعارة لسيناريو النقاش فقط.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">موردون تجريبيون</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الرمز</TableHead>
                <TableHead>المصدر</TableHead>
                <TableHead>موثوقية تجريبية</TableHead>
                <TableHead>آخر توريد</TableHead>
                <TableHead>ملاحظة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demoSuppliers.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.alias}</TableCell>
                  <TableCell>{row.milkSource}</TableCell>
                  <TableCell className="tabular">{row.reliabilityScore}</TableCell>
                  <TableCell>{row.lastDelivery}</TableCell>
                  <TableCell className="text-muted-foreground">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">حرارة الوصول</Badge>
        <Badge variant="outline">رفض مقترح / قرار بشري</Badge>
        <Badge variant="outline">ربط الدفعة بالمورد</Badge>
      </div>
    </div>
  );
}
