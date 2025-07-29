"use client";

import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";

export interface UseLocaleReturn {
  locale: Locale;
  isArabic: boolean;
}

export function useLocale(): UseLocaleReturn {
  const params = useParams();
  const locale = (params?.locale as Locale) || "ar"; // Default to Arabic as per routing config
  const isArabic = locale === "ar";

  return {
    locale,
    isArabic,
  };
}
