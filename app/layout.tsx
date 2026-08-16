import type { Metadata } from "next";
import { Geist_Mono, Noto_Naskh_Arabic, Noto_Sans_Arabic } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getSiteUrl, siteConfig } from "@/lib/config";
import "./globals.css";

const naskh = Noto_Naskh_Arabic({
  variable: "--font-naskh",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AlMazraa Dairy | تصور التحول الرقمي للألبان",
    template: `%s | ${siteConfig.nameAr}`,
  },
  description:
    "تصور أولي مستقل لمنظومة رقمية وأتمتة لشركة المزرعة للألبان في الأردن. ليس نظاماً رسمياً للشركة، ويحتاج اكتشافاً ميدانياً قبل أي تقدير دقيق.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "AlMazraa Dairy | تصور التحول الرقمي للألبان",
    description: "تصور مستقل للتحول الرقمي في صناعة الألبان — ليس نظاماً رسمياً.",
    locale: "ar_JO",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${naskh.variable} ${arabic.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <TooltipProvider>
          <AppShell>{children}</AppShell>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
