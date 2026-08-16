import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

type BrandMarkProps = {
  href?: string;
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
};

const sizes = {
  sm: { box: "h-11 w-16" },
  md: { box: "h-14 w-20" },
  lg: { box: "h-20 w-28" },
} as const;

export function BrandMark({
  href = "/",
  className,
  showText = true,
  size = "md",
  tone = "dark",
}: BrandMarkProps) {
  const dim = sizes[size];
  const textMuted = tone === "dark" ? "text-sidebar-foreground/65" : "text-muted-foreground";
  const textMain = tone === "dark" ? "text-sidebar-foreground" : "text-foreground";

  const content = (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-2xl border border-gold/50 bg-black p-1 shadow-[0_0_24px_rgb(196_165_116_/_0.2)]",
          dim.box,
        )}
      >
        <BrandLogo alt={`${siteConfig.nameAr} — شعار المزرعة`} priority />
      </span>
      {showText ? (
        <span className="min-w-0 text-right">
          <span className="block text-[10px] tracking-[0.18em] text-gold uppercase">
            AlMazraa Dairy
          </span>
          <span className={cn("mt-0.5 block text-sm font-semibold leading-5", textMain)}>
            المزرعة للألبان
          </span>
          <span className={cn("block text-[11px] leading-4", textMuted)}>
            {siteConfig.productName}
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;
  return (
    <Link
      href={href}
      className="block cursor-pointer outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold/60"
    >
      {content}
    </Link>
  );
}
