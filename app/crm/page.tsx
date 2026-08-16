import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { crmDeals } from "@/data/crm";

export default function CrmPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="العملاء والطلبات"
        description="لا توجد قائمة عملاء عامة. الجدول يوضح شكل خط الأنابيب بعد الرقمنة."
      />
      <HonestyNote>كل حساب أدناه سيناريو. لا علاقة له بعملاء حقيقيين للمزرعة.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">خط أنابيب تجريبي</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الحساب</TableHead>
                <TableHead>القناة</TableHead>
                <TableHead>المرحلة</TableHead>
                <TableHead>التركيز</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {crmDeals.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.account}</TableCell>
                  <TableCell>{row.channel}</TableCell>
                  <TableCell>{row.stage}</TableCell>
                  <TableCell>{row.skuFocus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
