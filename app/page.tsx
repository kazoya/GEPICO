import Link from "next/link";
import { ArrowLeft, Award, Globe2, Leaf, Milk, Package } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { getCompanyWebsiteUrl, getWhatsAppPhoneDisplay, siteConfig } from "@/lib/config";

const pillars = [
  {
    title: "طعم تراثي معلن",
    text: "الشركة تقول إنها تحفظ طعم الجبن العربي كما عرفه الأجداد — بثلاثة مكوّنات ودون إضافات اصطناعية.",
  },
  {
    title: "تعبئة MultiFresh",
    text: "تعاون معلن مع Multivac ألمانيا لخط تعبئة مسبقة يحفظ الطزاجة على الرف.",
  },
  {
    title: "سوق محلي وتصدير",
    text: "توفر في سوبرماركت الأردن، ووصول معلن لأكثر من 12 دولة بعد فحوصات في تلك الأسواق.",
  },
];

const families = ["نابلسي", "حلوم", "عكاوي", "لبنة", "جميد", "لبن وشنينة", "سمنة", "أصناف تراثية"];

export default function HomePage() {
  const website = getCompanyWebsiteUrl();
  const phone = getWhatsAppPhoneDisplay();

  return (
    <div className="dairy-glow meadow-grid -mx-4 rounded-2xl px-4 py-4 sm:-mx-6 sm:px-6">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-primary px-5 py-8 text-primary-foreground shadow-[0_20px_60px_rgb(15_42_31_/_0.28)] sm:px-10 sm:py-12">
        <div className="animate-brand-rise flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="relative h-24 w-40 shrink-0 overflow-hidden rounded-3xl border border-gold/70 bg-black p-2 shadow-[0_12px_40px_rgb(196_165_116_/_0.35)]">
            <BrandLogo alt={`${siteConfig.nameAr} — الشعار`} priority />
          </span>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
              AlMazraa Dairy · Jordan · منذ {siteConfig.since}
            </p>
            <h1 className="mt-2 font-heading text-[1.65rem] font-bold tracking-tight text-balance sm:text-4xl">
              من الحليب الطازج إلى الجبن العربي — ثم إلى قرار أوضح
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
              تأسست شركة المزرعة للألبان عام {siteConfig.since} على يد {siteConfig.founderAr}.
              هذا التصور يقترح منظومة رقمية تُبنى حول دورة الألبان الفعلية: الاستلام، المختبر،
              التصنيع، التعبئة، التبريد، التجزئة والتصدير — لا حول قالب مصنع عام.
            </p>
          </div>
        </div>

        <p className="animate-brand-rise-delay-1 mt-6 text-sm font-medium text-gold">
          إلى عناية {siteConfig.recipient} — {siteConfig.recipientRole}
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-primary-foreground/80">
          راجعنا الموقع العام فقط. لم نخترع طاقة إنتاج ولا أسعار. التواصل مع{" "}
          {siteConfig.recipient} — {siteConfig.recipientRole} عبر واتساب. ما يظهر من أرقام
          داخل المنصة بيانات تجريبية للنقاش.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 text-gold underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            <Globe2 className="size-3.5" aria-hidden />
            mazraadairy.com
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
          الكتالوج العام يغطي دلي البراميل وقطع التجزئة والمرتبانات وتعبئة السكن. التفاصيل في صفحة المنتجات.
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
          <Fact icon={Leaf} title="ثلاثة مكوّنات" text={siteConfig.claims.ingredients.join(" · ")} />
          <Fact icon={Award} title="شهادات معلنة" text={siteConfig.claims.certificates.join(" · ")} />
          <Fact icon={Package} title="التعبئة" text={siteConfig.claims.packaging} />
        </div>
        <p className="mt-4 text-xs leading-6 text-muted-foreground">
          حصة «{siteConfig.claims.marketShareBulkWhiteCheese} من سوق الجبن الأبيض بالجملة» ادّعاء الموقع
          الرسمي وليست حقيقة تحققنا منها.
        </p>
        <Button asChild variant="outline" className="mt-4 cursor-pointer">
          <Link href="/products">عرض الكتالوج</Link>
        </Button>
      </section>

      <section className="mx-auto mt-6 max-w-5xl">
        <HonestyNote>
          العنوان المنشور: {siteConfig.postalAddressAr}
          {phone ? ` — واتساب ${siteConfig.recipientRole}: ${phone}` : ""}
        </HonestyNote>
      </section>

      <section className="mx-auto mt-6 grid max-w-5xl gap-3 md:grid-cols-3">
        <NextCard href="/workflow" icon={Milk} title="رحلة العملية" text="من استلام الحليب إلى التتبع والاستدعاء." />
        <NextCard href="/shop" icon={Package} title="فرصة القنوات" text="سلة الموقع تبدو غير مكتملة — بوابة دلي أوضح." />
        <NextCard href="/quality" icon={Award} title="سلامة الغذاء" text="ISO 22000 وحلال والتتبع قبل أي لوحة جميلة." />
      </section>
    </div>
  );
}

function Fact({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Leaf;
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
  icon: typeof Milk;
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
