import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p className="max-w-[460px]">{t("message")}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        {t("backToHome")}
      </Link>
    </div>
  );
}
