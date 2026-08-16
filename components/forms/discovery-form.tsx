"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getDiscoveryFormUrl } from "@/lib/config";
import {
  customerTypeOptions,
  defaultAssessment,
  loadAssessment,
  saveAssessment,
  systemOptions,
  type AssessmentValues,
} from "@/lib/assessment";

const steps = [
  "العملاء والطلب",
  "الجودة والمختبر",
  "الإنتاج والخامات",
  "المستودع والقنوات",
  "الأنظمة والتقارير",
];

export function DiscoveryForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const formUrl = getDiscoveryFormUrl();
  const form = useForm<AssessmentValues>({
    defaultValues: defaultAssessment,
  });

  useEffect(() => {
    form.reset(loadAssessment());
  }, [form]);

  function persist() {
    saveAssessment(form.getValues());
  }

  const values = form.watch();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="تقييم اكتشاف مصنع أنظمة الأسلاك"
        description="كل إجابة تساعدنا على تحويل هذا التصور من قراءة للموقع إلى مقترح مبني على واقع الخط والمختبر والمستودع."
        demo={false}
      />
      <HonestyNote>
        يُحفظ التقدم في هذا المتصفح فقط. لا نفترض أرقاماً إن تُرك الحقل فارغاً.
      </HonestyNote>
      {formUrl ? (
        <a href={formUrl} className="text-sm text-copper underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
          نموذج خارجي إن وُجد
        </a>
      ) : null}
      <p className="text-sm text-muted-foreground">
        القسم {step + 1} من {steps.length}: {steps[step]}
      </p>
      <div className="h-1 overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-primary" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{steps[step]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 0 ? (
            <>
              <p className="text-sm text-muted-foreground">أنواع العملاء اليوم</p>
              <CheckList
                options={customerTypeOptions}
                selected={values.customerTypes}
                onToggle={(item) =>
                  form.setValue(
                    "customerTypes",
                    values.customerTypes.includes(item)
                      ? values.customerTypes.filter((v) => v !== item)
                      : [...values.customerTypes, item],
                  )
                }
              />
              <Field label="كيف يصل الاستفسار اليوم؟" name="inquiryChannel" register={form.register} />
              <Field label="كيف يُعد عرض السعر؟" name="quoteProcess" register={form.register} />
              <Field label="من يعتمد السعر النهائي؟" name="priceApproval" register={form.register} />
            </>
          ) : null}

          {step === 1 ? (
            <>
              <Field label="فحوصات المختبر الحالية" name="labStages" register={form.register} />
              <Field label="كيف يتم الاحتجاز والإفراج؟" name="holdRelease" register={form.register} />
              <Field label="الشهادات وتواريخها (ISO 9001، علامة الجودة، BSI)" name="certificates" register={form.register} />
              <Field label="هل يمكن تتبع الشحنة إلى التشغيل ونتائج المختبر؟" name="recallReady" register={form.register} />
            </>
          ) : null}

          {step === 2 ? (
            <>
              <Field label="عدد الخطوط / الوردية التقريبي" name="lineCount" register={form.register} />
              <Field label="كيف تُدار الطاقة الاحتياطية المعلنة؟" name="capacityReserve" register={form.register} />
              <Field label="كم مرة يتغيّر الصنف في الوردية؟" name="changeover" register={form.register} />
              <Field label="شراكات الخامات — ماذا يُوثَّق عند الاستلام؟" name="materialPartners" register={form.register} />
              <Field label="كيف تُحمى التزامات العملاء من تقلب سعر الخامة؟" name="materialBuffer" register={form.register} />
              <Field label="ملصق التعبئة: من يطبعه وكيف يُطابق الصنف؟" name="packLabel" register={form.register} />
            </>
          ) : null}

          {step === 3 ? (
            <>
              <Field label="نظام المستودع الحالي" name="warehouseSystem" register={form.register} />
              <Field label="هل يظهر للمبيعات المخزون المتاح للبيع قبل وعد العميل؟" name="availableToPromise" register={form.register} />
              <Field label="قنوات الطلب الأخرى (مندوب، معرض، تصدير…)" name="inquiryChannel" register={form.register} />
              <Field label="حالة متجر الموقع (يعمل / فارغ / غير مستخدم)" name="shopStatus" register={form.register} />
              <Field label="هل تحتاجون بوابة محدّد/موزّع؟" name="specifierPortalNeed" register={form.register} />
              <Field label="أسواق التصدير الفعلية اليوم" name="exportMarkets" register={form.register} />
              <Field label="كم يستغرق تجهيز ملف تصدير؟" name="exportDocsHours" register={form.register} />
              <Field label="كيف يُقاس رقم الطاقة الشمسية 30% وهدف 2026؟" name="solarMetering" register={form.register} />
            </>
          ) : null}

          {step === 4 ? (
            <>
              <p className="text-sm text-muted-foreground">الأنظمة الحالية</p>
              <CheckList
                options={systemOptions}
                selected={values.systems}
                onToggle={(item) =>
                  form.setValue(
                    "systems",
                    values.systems.includes(item)
                      ? values.systems.filter((v) => v !== item)
                      : [...values.systems, item],
                  )
                }
              />
              <Field label="هل توجد واجهة برمجية أو تصدير ملفات؟" name="hasApi" register={form.register} />
              <Field label="تقارير يومية للإدارة" name="dailyReports" register={form.register} />
              <Field label="تقارير أسبوعية / شهرية" name="weeklyReports" register={form.register} />
              <div className="space-y-2">
                <Label htmlFor="notes">ملاحظات حرة</Label>
                <Textarea id="notes" rows={4} {...form.register("notes")} />
              </div>
            </>
          ) : null}
        </CardContent>
      </Card>

      <div className="flex flex-wrap justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer"
          disabled={step === 0}
          onClick={() => {
            persist();
            setStep((s) => Math.max(0, s - 1));
          }}
        >
          السابق
        </Button>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            className="cursor-pointer"
            onClick={() => {
              persist();
              toast.success("حُفظ التقدم في هذا المتصفح");
            }}
          >
            حفظ
          </Button>
          {step < steps.length - 1 ? (
            <Button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                persist();
                setStep((s) => s + 1);
              }}
            >
              التالي
            </Button>
          ) : (
            <Button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                persist();
                toast.success("تم حفظ التقييم");
                router.push("/assessment/results");
              }}
            >
              عرض الملخص
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  register,
}: {
  label: string;
  name: keyof AssessmentValues;
  register: ReturnType<typeof useForm<AssessmentValues>>["register"];
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...register(name)} />
    </div>
  );
}

function CheckList({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (item: string) => void;
}) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {options.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Checkbox
            checked={selected.includes(item)}
            onCheckedChange={() => onToggle(item)}
            id={item}
          />
          <Label htmlFor={item} className="cursor-pointer font-normal">
            {item}
          </Label>
        </li>
      ))}
    </ul>
  );
}
