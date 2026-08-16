"use client";

import { useMemo, useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatNumber } from "@/lib/format";

export function RoiCalculator() {
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(8);
  const [waste, setWaste] = useState(400);
  const [pilot, setPilot] = useState(4500);

  const yearly = useMemo(() => hours * rate * 48 + waste * 12, [hours, rate, waste]);
  const payback = yearly > 0 ? pilot / (yearly / 12) : 0;

  return (
    <div className="space-y-4">
      <HonestyNote>
        آلة حاسبة توضيحية فقط. الأرقام افتراضية ولا تمثّل تكلفة أو هدراً في GEPICO. لا تُستخدم في عرض مالي.
      </HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="ساعات تنسيق أسبوعية تُوفَّر (افتراض)" value={hours} onChange={setHours} />
        <Field label="تكلفة الساعة بالدينار (افتراض)" value={rate} onChange={setRate} />
        <Field label="هدر إعادة تشغيل / مرتجعات شهري بالدينار (افتراض)" value={waste} onChange={setWaste} />
        <Field label="تكلفة تجريب أولى بالدينار (افتراض)" value={pilot} onChange={setPilot} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">ناتج السيناريو التجريبي</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          <p className="text-sm">
            أثر سنوي مفترض: <span className="tabular font-semibold">{formatNumber(yearly)}</span> د.أ
          </p>
          <p className="text-sm">
            استرداد تقريبي: <span className="tabular font-semibold">{payback.toFixed(1)}</span> شهر
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        type="number"
        min={0}
        value={value}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
      />
    </div>
  );
}
