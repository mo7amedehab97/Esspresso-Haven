import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  try {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
      ? requested
      : routing.defaultLocale;

    return {
      locale,
      messages: (await import(`../translations/${locale}.json`)).default,
    };
  } catch (error) {
    console.error("Error loading locale configuration:", error);

    // Fallback to default locale
    return {
      locale: routing.defaultLocale,
      messages: (await import(`../translations/${routing.defaultLocale}.json`))
        .default,
    };
  }
});
