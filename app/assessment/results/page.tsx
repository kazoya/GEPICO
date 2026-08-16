"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  STORAGE_KEY,
  defaultAssessment,
  summarizeAssessment,
  type AssessmentValues,
} from "@/lib/assessment";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) ?? "";
}

function getServerSnapshot() {
  return "";
}

function parseAssessment(raw: string): AssessmentValues {
  if (!raw) return defaultAssessment;
  try {
    return { ...defaultAssessment, ...JSON.parse(raw) };
  } catch {
    return defaultAssessment;
  }
}

export default function AssessmentResultsPage() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const values = parseAssessment(raw);
  const summary = summarizeAssessment(values);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="ملخص التقييم"
        description="يُقرأ من هذا المتصفح فقط. لا يُرسل إلى خادم ما لم يُضبط ذلك لاحقاً."
        demo={false}
      />
      <HonestyNote>
        اكتمال الحقول لا يعني اكتمال الاكتشاف الميداني. الحقول الفارغة تبقى «غير معروف».
      </HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">
            {summary.filled} من {summary.total} حقول فيها إجابة ({summary.pct}٪)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
          <p>أنواع العملاء: {values.customerTypes.join(" · ") || "غير محدد"}</p>
          <p>قناة الاستفسار: {values.inquiryChannel || "غير محدد"}</p>
          <p>الإفراج المخبري: {values.holdRelease || "غير محدد"}</p>
          <p>المستودع / التوافر: {values.availableToPromise || "غير محدد"}</p>
          <p>المتجر: {values.shopStatus || "غير محدد"}</p>
          <p>الأنظمة: {values.systems.join(" · ") || "غير محدد"}</p>
          <p>ملاحظات: {values.notes || "لا شيء"}</p>
        </CardContent>
      </Card>
      <Button asChild className="cursor-pointer">
        <Link href="/assessment">تعديل الإجابات</Link>
      </Button>
    </div>
  );
}
