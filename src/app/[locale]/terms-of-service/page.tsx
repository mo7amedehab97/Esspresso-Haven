import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeft,
  FileText,
  Sprout,
  Shield,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useServerLocale } from "@/hooks";
import { use } from "react";
import { ParamsProps } from "@/utils/types";
import { setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/utils/metadata";

export async function generateMetadata(props: ParamsProps) {
  const { locale } = await props.params;
  return buildMetadata(locale, "TermsOfServiceMetadata", "terms-of-service");
}

export default function TermsOfServicePage({ params }: ParamsProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("TermsOfServicePage");
  const contactT = useTranslations("HomePage");
  const { isArabic } = useServerLocale();

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors mb-4"
          >
            <ArrowLeft className={`w-5 h-5 ${isArabic ? "rotate-180" : ""}`} />
            <span className="text-sm font-medium">
              {isArabic ? "العودة إلى الرئيسية" : "Back to Home"}
            </span>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-amber-700" />
            <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          </div>
          <p className="text-gray-600 text-lg">{t("description")}</p>
          <div className="mt-4 text-sm text-gray-500">
            {t("lastUpdated")}:{" "}
            {new Date().toLocaleDateString(isArabic ? "ar-AE" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-amber-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("introduction.title")}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("introduction.content")}
              </p>
            </section>

            {/* Our Services */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sprout className="w-6 h-6 text-amber-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("services.title")}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("services.content")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.isArray(t.raw("services.servicesList")) &&
                  t
                    .raw("services.servicesList")
                    .map((service: string, index: number) => (
                      <div
                        key={index}
                        className="bg-amber-50 p-4 rounded-lg border border-amber-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{service}</span>
                        </div>
                      </div>
                    ))}
              </div>
            </section>

            {/* Product Use and Safety */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-amber-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("productUse.title")}
                </h2>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2">
                      {isArabic ? "تحذير مهم" : "Important Warning"}
                    </h3>
                    <p className="text-orange-800 text-sm">
                      {t("productUse.content")}
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {Array.isArray(t.raw("productUse.requirements")) &&
                  t
                    .raw("productUse.requirements")
                    .map((requirement: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("liability.title")}
              </h2>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <p className="text-gray-700 leading-relaxed">
                  {t("liability.content")}
                </p>
              </div>
            </section>

            {/* Product Warranty */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("warranty.title")}
              </h2>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <p className="text-gray-700 leading-relaxed">
                  {t("warranty.content")}
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("termination.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termination.content")}
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("changes.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("changes.content")}
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("contact.content")}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0" />
                  <span className="text-gray-700">
                    {contactT("footer.address")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-700 flex-shrink-0" />
                  <a
                    href={`tel:${contactT("footer.phone")}`}
                    className="text-gray-700 hover:text-amber-700 transition-colors"
                  >
                    {contactT("footer.phone")}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-700 flex-shrink-0" />
                  <a
                    href={`mailto:${contactT("footer.email")}`}
                    className="text-gray-700 hover:text-amber-700 transition-colors"
                  >
                    {contactT("footer.email")}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
