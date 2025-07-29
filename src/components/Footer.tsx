import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MapPin, ArrowRight, Sprout } from "lucide-react";
import Image from "next/image";
import { useServerLocale } from "@/hooks";

export default function Footer() {
  const t = useTranslations("HomePage");
  const { isArabic } = useServerLocale();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <div className="relative size-10 lg:size-12 ">
                <Image
                  src="/images/logo.svg"
                  alt="Espresso Haven"
                  fill
                  className="object-contain transition-transform group-hover:scale-105 "
                />
              </div>
              <div className="mx-2">
                <h3 className="text-xl font-bold group-hover:text-[#A47149] transition-colors ">
                  {t("footer.companyName")}
                </h3>
                <p className="text-sm text-gray-400">
                  {t("footer.companyTagline")}
                </p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {/* {t("about.description").substring(0, 150)}... */}
              {t("about.description")}
            </p>
            <div className="flex items-center gap-2 text-[#A47149]">
              <Sprout className="w-5 h-5" />
              <span className="text-sm font-medium">
                {t("footer.companySince")}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t("footer.quickLinks")}
            </h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-gray-300 hover:text-[#A47149] transition-colors duration-200 text-sm"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-[#A47149] transition-colors duration-200 text-sm"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-[#A47149] transition-colors duration-200 text-sm"
              >
                {t("nav.contact")}
              </Link>
              <a
                href="#products"
                className="block text-gray-300 hover:text-[#A47149] transition-colors duration-200 text-sm"
              >
                {t("footer.products")}
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t("footer.contactInfo")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A47149] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t("footer.address")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#A47149] flex-shrink-0" />
                <a
                  href={`tel:${t("footer.phone")}`}
                  className="text-gray-300 hover:text-[#A47149] transition-colors text-sm"
                >
                  {t("footer.phone")}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#A47149] flex-shrink-0" />
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="text-gray-300 hover:text-[#A47149] transition-colors text-sm"
                >
                  {t("footer.email")}
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t("footer.getStarted")}
            </h4>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {t("footer.ctaText")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#4B2E2B] hover:bg-[#A47149] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-sm group"
            >
              {t("footer.ctaButton")}
              <ArrowRight
                className={`size-4 transition-transform group-hover:translate-x-1 ${
                  isArabic
                    ? "rotate-180 group-hover:translate-x-[-0.25rem]"
                    : ""
                } text-[#A47149]`}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-[#A47149] transition-colors"
              >
                {t("footer.privacyPolicy")}
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-400 hover:text-[#A47149] transition-colors"
              >
                {t("footer.termsOfService")}
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-gray-400 hover:text-[#A47149] transition-colors"
              >
                {t("footer.cookiePolicy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
