import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DirectionProvider } from "@base-ui-components/react";
import { ParamsProps, Props } from "@/utils/types";
import { buildMetadata } from "@/utils/metadata";

// Baloo Bhaijaan 2 for both English and Arabic
const balooBhaijaan2 = Baloo_Bhaijaan_2({
  variable: "--font-baloo-bhaijaan-2",
  subsets: ["latin", "arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["Georgia", "serif", "sans-serif"],
});

export async function generateMetadata(props: ParamsProps) {
  const { locale } = await props.params;
  return buildMetadata(locale, "Metadata", "");
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  // Choose font class based on locale (always Baloo Bhaijaan 2)
  const fontClass = `${balooBhaijaan2.variable} font-baloo-bhaijaan-2`;

  // Set font-family for body based on locale
  const fontFamily =
    locale === "ar"
      ? "'Baloo Bhaijaan 2', sans-serif"
      : "'Baloo Bhaijaan 2', Georgia, serif";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${fontClass} antialiased !bg-white !text-gray-900 overflow-x-hidden`}
        style={{ fontFamily }}
      >
        <NextIntlClientProvider>
          <DirectionProvider direction={dir}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
