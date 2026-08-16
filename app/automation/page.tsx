import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { automationOpportunities } from "@/data/opportunities";

export default function AutomationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="فرص الأتمتة"
        description="نبدأ بما يمنع الخطأ في الحليب والجودة والطلب، لا بروbot على أرض المصنع من اليوم الأول."
      />
      <HonestyNote>الأولوية المقترحة: استلام رقمي → إفراج مخبري → قناة طلب B2B. الأجهزة لاحقاً.</HonestyNote>
      <OpportunityGrid items={automationOpportunities} />
    </div>
  );
}
