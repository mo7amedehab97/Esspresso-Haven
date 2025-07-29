import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function buildMetadata(
  locale: string,
  namespace:
    | "Metadata"
    | "AboutMetadata"
    | "ContactMetadata"
    | "PrivacyPolicyMetadata"
    | "TermsOfServiceMetadata"
    | "CookiePolicyMetadata",
  path:
    | ""
    | "about"
    | "contact"
    | "privacy-policy"
    | "terms-of-service"
    | "cookie-policy",
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  // const url = "https://espressohaven.com";
  const url = "https://espressohaven.vercel.app/";
  const ogImage =
    locale === "ar" ? `${url}og-image.ar.png` : `${url}og-image.en.png`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(","),
    category: "Coffee Shop",
    creator: "Espresso Haven",
    themeColor: "#4B2E2B",
    alternates: {
      canonical: `${url}${path}`,
      languages: {
        en: `en/${path}`,
        ar: `ar/${path}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${url}${path}`,
      siteName: "Espresso Haven",
      locale: locale === "ar" ? "ar_AE" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
      other: [
        {
          rel: "icon",
          url: "/favicon.svg",
          type: "image/svg+xml",
        },
      ],
    },
  };
}
