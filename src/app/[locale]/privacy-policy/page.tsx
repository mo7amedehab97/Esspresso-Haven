import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeft,
  Shield,
  Eye,
  Database,
  Lock,
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
  return buildMetadata(locale, "PrivacyPolicyMetadata", "privacy-policy");
}

export default function PrivacyPolicyPage({ params }: ParamsProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("PrivacyPolicyPage");
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
            <Shield className="w-8 h-8 text-amber-700" />
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
                <Eye className="w-6 h-6 text-amber-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("introduction.title")}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("introduction.content")}
              </p>
            </section>

            {/* Information Collection */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-amber-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("informationCollection.title")}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("informationCollection.content")}
              </p>
              <div className="space-y-4">
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">
                    {isArabic ? "البيانات الشخصية" : "Personal Data"}
                  </h3>
                  <p className="text-amber-800">
                    {t("informationCollection.personalInfo")}
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-2">
                    {isArabic ? "معلومات الأعمال" : "Business Information"}
                  </h3>
                  <p className="text-orange-800">
                    {t("informationCollection.businessInfo")}
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">
                    {isArabic ? "بيانات الاستخدام" : "Usage Data"}
                  </h3>
                  <p className="text-amber-800">
                    {t("informationCollection.usageData")}
                  </p>
                </div>
              </div>
            </section>

            {/* Information Use */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-amber-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("informationUse.title")}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("informationUse.content")}
              </p>
              <ul className="space-y-3">
                {Array.isArray(t.raw("informationUse.purposes")) &&
                  t
                    .raw("informationUse.purposes")
                    .map((purpose: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{purpose}</span>
                      </li>
                    ))}
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("informationSharing.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("informationSharing.content")}
              </p>
              <ul className="space-y-3">
                {Array.isArray(t.raw("informationSharing.exceptions")) &&
                  t
                    .raw("informationSharing.exceptions")
                    .map((exception: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{exception}</span>
                      </li>
                    ))}
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("dataSecurity.title")}
              </h2>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <p className="text-gray-700 leading-relaxed">
                  {t("dataSecurity.content")}
                </p>
              </div>
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
