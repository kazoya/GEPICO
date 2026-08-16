import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { catalogProducts, familyLabel } from "@/data/products";
import { siteConfig } from "@/lib/config";

const families = Object.keys(familyLabel) as Array<keyof typeof familyLabel>;

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="كتالوج المنتجات كما نُشر"
        description="المصدر: صفحات التصنيف على gepico.com في 16 آب 2026. الأسماء كما ظهرت للعامة، بما فيها الأغلاط الظاهرة."
      />
      <HonestyNote>
        لا أسعار هنا. بعض الأصناف مكررة أو تجريبية على الموقع نفسه — نعرض ذلك بأمانة.
        <a className="ms-2 text-copper underline-offset-4 hover:underline" href={siteConfig.websiteUrl} target="_blank" rel="noreferrer">
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
                      {item.note ? <Badge variant="secondary">{item.note}</Badge> : null}
                      {item.siteIssue ? <Badge variant="outline">{item.siteIssue}</Badge> : null}
                    </div>
                    <CardTitle className="text-base">{item.nameAr}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{item.nameEn}</p>
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
