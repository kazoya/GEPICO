import Link from "next/link";
import { ArrowLeft, Award, Cable, Factory, Globe2, Package, ShieldCheck, Warehouse } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { getCompanyWebsiteUrl, getPhoneDisplay, siteConfig } from "@/lib/config";
import { familyLabel } from "@/data/products";

const pillars = [
  {
    title: "جودة تتجاوز المواصفة",
    text: "ISO 9001 منذ 1996، وعلامة الجودة الأردنية منذ 1997 بادّعاء 110%، وتحقق BSI — حسب الموقع.",
  },
  {
    title: "تلبية ومخزون معلن",
    text: "طاقة إنتاج باحتياطي حتى لا يتأخر طلب، ومستودع منتجات تامة يتجاوز 20,000 م² — ادّعاء الشركة.",
  },
  {
    title: "مسار أخضر معلن",
    text: "30% طاقة شمسية اليوم، وهدف صافي صفر بحلول 2026، وعمليات بلا نفايات — حسب صفحة الإنجازات.",
  },
];

const families = Object.values(familyLabel);

export default function HomePage() {
  const website = getCompanyWebsiteUrl();
  const phone = getPhoneDisplay();

  return (
    <div className="dairy-glow meadow-grid -mx-4 rounded-2xl px-4 py-4 sm:-mx-6 sm:px-6">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-primary px-5 py-8 text-primary-foreground shadow-[0_20px_60px_rgb(5_24_46_/_0.35)] sm:px-10 sm:py-12">
        <div className="animate-brand-rise flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="relative h-24 w-48 shrink-0 overflow-hidden rounded-3xl border border-gold/50 bg-white p-3 shadow-[0_12px_40px_rgb(30_88_175_/_0.35)]">
            <BrandLogo alt={`${siteConfig.nameAr} — الشعار`} priority />
          </span>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
              GEPICO · Jordan · منذ {siteConfig.since}
            </p>
            <h1 className="mt-2 font-heading text-[1.65rem] font-bold tracking-tight text-balance sm:text-4xl">
              من الخامة إلى المجرى المركّب — ثم إلى قرار أوضح
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
              تأسست {siteConfig.legalNameAr} عام {siteConfig.since} على يد {siteConfig.founderAr}.
              هذا التصور يقترح منظومة رقمية حول دورة GEPICO الفعلية: المواصفة، الخامة، الخط، المختبر،
              المستودع، المحدّد والتصدير — لا حول قالب مصنع عام.
            </p>
          </div>
        </div>

        <p className="animate-brand-rise-delay-1 mt-6 text-sm font-medium text-gold">
          إلى عناية {siteConfig.recipient} — {siteConfig.recipientRole}
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-primary-foreground/80">
          راجعنا الموقع العام فقط. لم نخترع طاقة بالطن ولا أسعار. التواصل مع{" "}
          {siteConfig.recipient} — {siteConfig.recipientRole} عبر واتساب. الهاتف المنشور للمصنع: {phone}.
          ما يظهر من أرقام داخل المنصة بيانات تجريبية للنقاش.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 text-gold underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            <Globe2 className="size-3.5" aria-hidden />
            gepico.com
          </a>
        </div>

        <div className="animate-brand-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="cursor-pointer bg-ochre text-primary hover:bg-gold">
            <Link href="/overview">
              استكشف التصور
              <ArrowLeft />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/assessment">ساعدنا على فهم المصنع</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto -mt-5 grid max-w-5xl gap-3 px-1 md:grid-cols-3">
        {pillars.map((item, index) => (
          <div
            key={item.title}
            className={[
              "cream-panel rounded-2xl px-4 py-5 shadow-md",
              index === 0
                ? "animate-brand-rise-delay-1"
                : index === 1
                  ? "animate-brand-rise-delay-2"
                  : "animate-brand-rise-delay-3",
            ].join(" ")}
          >
            <p className="text-xs font-semibold tracking-wide opacity-80">0{index + 1}</p>
            <h2 className="mt-1 font-heading text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 opacity-90">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-gold/25 bg-card/90 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-medium tracking-[0.16em] text-copper uppercase">من الموقع الرسمي</p>
        <h2 className="mt-1 font-heading text-2xl font-semibold">عوائل المنتج كما أعلنتها الشركة</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
          الكتالوج العام يغطي المجرى الصلب والمموج والقنوات والعلب والحاويات وملحقات التركيب. التفاصيل في صفحة المنتجات.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {families.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/20 bg-secondary px-3 py-1.5 text-xs text-primary"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Fact icon={ShieldCheck} title="شهادات معلنة" text={`ISO 9001 · علامة الجودة الأردنية · BSI`} />
          <Fact icon={Warehouse} title="المستودع" text={siteConfig.claims.warehouseM2} />
          <Fact icon={Award} title="التصدير" text="سفراء التصدير وأحد أكبر 100 مصدر — حسب الموقع" />
        </div>
        <p className="mt-4 text-xs leading-6 text-muted-foreground">
          {siteConfig.catalogNote} كما تظهر على الموقع أصناف مكررة وعنصر «Testing Everything» وأخبار بعنوان تجريبي.
        </p>
        <Button asChild variant="outline" className="mt-4 cursor-pointer">
          <Link href="/products">عرض الكتالوج</Link>
        </Button>
      </section>

      <section className="mx-auto mt-6 max-w-5xl">
        <HonestyNote>
          الهاتف المنشور: {phone}. البريد: {siteConfig.defaultEmails[0]}. واتساب{" "}
          {siteConfig.recipient} للتواصل مع مشرف المبيعات، ولم يكن منشوراً على gepico.com وقت المراجعة.
        </HonestyNote>
      </section>

      <section className="mx-auto mt-6 grid max-w-5xl gap-3 md:grid-cols-3">
        <NextCard href="/workflow" icon={Cable} title="رحلة العملية" text="من المواصفة والخامة إلى المختبر والمستودع والشحنة." />
        <NextCard href="/shop" icon={Package} title="البوابة والقنوات" text="سلة فارغة وكتالوج خلف تسجيل — فرصة حسابات معتمدة." />
        <NextCard href="/quality" icon={Factory} title="الجودة والمختبر" text="اختبار كل تشغيل وعلامة جودة — يحتاج أثراً رقمياً قبل الشحن." />
      </section>
    </div>
  );
}

function Fact({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border bg-background/70 p-3">
      <Icon className="size-4 text-copper" aria-hidden />
      <p className="mt-2 text-sm font-medium">{title}</p>
      <p className="mt-1 text-xs leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function NextCard({
  href,
  icon: Icon,
  title,
  text,
}: {
  href: string;
  icon: typeof Cable;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="cursor-pointer rounded-2xl border bg-card p-4 shadow-sm transition-colors hover:border-gold/50"
    >
      <Icon className="size-4 text-copper" aria-hidden />
      <p className="mt-2 font-medium">{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </Link>
  );
}
