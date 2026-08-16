import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

type BrandLogoProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function BrandLogo({
  className,
  alt = "شعار المزرعة للألبان",
  priority = false,
}: BrandLogoProps) {
  const src = typeof logo === "string" ? logo : logo.src;
  const width = typeof logo === "string" ? 400 : logo.width;
  const height = typeof logo === "string" ? 400 : logo.height;

  return (
    // Native img avoids next/image wrapper mismatches during hydration.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-full w-full object-contain object-center", className)}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
