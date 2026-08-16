import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function BrandLogo({
  className,
  alt = "شعار GEPICO",
  priority = false,
}: BrandLogoProps) {
  return (
    // Native img avoids next/image wrapper mismatches during hydration.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.svg"
      alt={alt}
      width={400}
      height={120}
      className={cn("h-full w-full object-contain object-center", className)}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
