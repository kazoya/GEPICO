import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { catalogProducts, familyLabel, formatLabel } from "@/data/products";
import { siteConfig } from "@/lib/config";

const families = Object.keys(familyLabel) as Array<keyof typeof familyLabel>;

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="كتالوج المنتجات كما نُشر"
        description="المصدر: صفحة Our Products على الموقع الرسمي. لا أسعار هنا لأن التصفح العام لم يُظهر أسعاراً موثوقة."
      />
      <HonestyNote>
        الأوزان والتعريفات من الموقع. أي رقم مبيعات أو تكلفة في صفحات أخرى تجريبي.
        <a className="ms-2 text-copper underline-offset-4 hover:underline" href={siteConfig.productsUrl} target="_blank" rel="noreferrer">
          المصدر
        </a>
      </HonestyNote>
      {families.map((family) => {
        const items = catalogProducts.filter((item) => item.family === family);
        if (!items.length) return null;
        return (
          <section key={family}>
            <h2 className="mb-3 font-heading text-lg font-semibold">{familyLabel[family]}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Card key={item.id} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{formatLabel[item.format]}</Badge>
                      {item.milkHint ? <Badge variant="secondary">{item.milkHint}</Badge> : null}
                    </div>
                    <CardTitle className="text-base">{item.nameAr}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{item.nameEn}</p>
                    <p className="mt-1">{item.packNote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
