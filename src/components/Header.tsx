"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("HomePage");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top contact bar */}
      <div className="hidden lg:block bg-[#4B2E2B] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${t("footer.phone")}`}
                  className="hover:text-[#A47149] transition-colors"
                >
                  {t("footer.phone")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="hover:text-[#A47149] transition-colors"
                >
                  {t("footer.email")}
                </a>
              </div>
            </div>
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative size-12 lg:size-14">
              <Image
                src="/images/logo.svg"
                alt="Espresso Haven"
                fill
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block  mx-2 ">
              <h1 className="text-xl lg:text-1xl font-bold text-gray-900 group-hover:text-[#A47149] transition-colors">
                {t("footer.companyName")}
              </h1>
              <p className="text-xs text-gray-500">
                {t("footer.companyTagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#A47149] font-medium transition-colors duration-200 relative group"
            >
              {t("nav.home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A47149] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#A47149] font-medium transition-colors duration-200 relative group"
            >
              {t("nav.about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A47149] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-[#4B2E2B] hover:bg-[#A47149] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="lg:hidden">
              <LocaleSwitcher />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-[#A47149] hover:bg-[#DCC6B2] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-[#A47149] hover:bg-[#DCC6B2] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 bg-[#4B2E2B] text-white rounded-lg text-center font-medium hover:bg-[#A47149] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            {/* Mobile contact info */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${t("footer.phone")}`}
                  className="hover:text-[#A47149]"
                >
                  {t("footer.phone")}
                </a>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="hover:text-[#A47149]"
                >
                  {t("footer.email")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
