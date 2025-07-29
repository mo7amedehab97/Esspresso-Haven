import { useLocale } from "next-intl";

export interface UseServerLocaleReturn {
  locale: string;
  isArabic: boolean;
}

/**
 * Server-side utility function to get locale information
 * Use this in Server Components
 */
export function useServerLocale(): UseServerLocaleReturn {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return {
    locale,
    isArabic,
  };
}
