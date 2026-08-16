import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { readinessRows } from "@/data/readiness";

export default function ReadinessPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="جاهزية البيانات"
        description="تقييم من المصدر العام فقط. معظم الصفوف «غير معروف» وهذا مقصود حتى الزيارة."
      />
      <HonestyNote>نعم على الكتالوج والشهادات المعلنة لا تعني أن الملفات الرقمية موجودة داخل المصنع.</HonestyNote>
      <div className="overflow-x-auto rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المصدر</TableHead>
              <TableHead>موجود</TableHead>
              <TableHead>رقمي</TableHead>
              <TableHead>منظّم</TableHead>
              <TableHead>العمق</TableHead>
              <TableHead>واجهة</TableHead>
              <TableHead>جاهزية الذكاء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {readinessRows.map((row) => (
              <TableRow key={row.source}>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.exists}</TableCell>
                <TableCell>{row.digital}</TableCell>
                <TableCell>{row.structured}</TableCell>
                <TableCell>{row.historicalDepth}</TableCell>
                <TableCell>{row.api}</TableCell>
                <TableCell>{row.aiReadiness}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
