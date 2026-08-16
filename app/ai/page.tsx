import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { aiOpportunities } from "@/data/opportunities";

export default function AiPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="فرص الذكاء الاصطناعي"
        description="الذكاء هنا يفسّر ويقترح بعد توفر أثر رقمي. لا يفرج عن دفعة ولا يغيّر وصفة الثلاثة مكوّنات."
      />
      <HonestyNote>معظم فرص الذكاء تحتاج تاريخاً. مساعد المعرفة يمكن تجريبه مبكراً على الوثائق المعتمدة.</HonestyNote>
      <HumanInTheLoop />
      <OpportunityGrid items={aiOpportunities} />
    </div>
  );
}
