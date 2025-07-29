import { ParamsProps } from "@/utils/types";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import {
  ArrowRight,
  CheckCircle,
  Sprout,
  Truck,
  Users,
  Star,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useServerLocale } from "@/hooks";

export default function Home({ params }: ParamsProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("HomePage");
  const { isArabic } = useServerLocale();

  return (
    <>
      {/* Hero Section - Design Option 3: Immersive 3D Card Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4B2E2B] via-[#A47149] to-[#DCC6B2]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,241,235,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
              animation: "float 6s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#A47149]/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-24 h-24 bg-[#DCC6B2]/20 rotate-45 blur-lg animate-spin"
            style={{ animationDuration: "12s" }}
          ></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-[#4B2E2B]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Hero Content Container */}
          <div className="text-center mb-16">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4B2E2B]/10 to-[#A47149]/10 backdrop-blur-2xl border border-[#fff] text-[#fff] px-8 py-4 rounded-full text-sm font-medium my-12 shadow-2xl">
              <div className="relative">
                <div className="w-3 h-3 bg-[#4B2E2B]-400 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-[#4B2E2B]-400 rounded-full"></div>
              </div>
              <Sprout className="w-5 h-5" />
              <span className="font-semibold text-md">{t("hero.badge")}</span>
            </div>

            {/* Main Title with Typewriter Effect */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
              <span className=" bg-gradient-to-r to-[#4B2E2B]/100  from-white bg-clip-text text-transparent drop-shadow-2xl">
                {t("hero.title")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-2xl lg:text-3xl text-white max-w-5xl mx-auto mb-16 leading-relaxed font-light">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 ">
            {[
              {
                icon: "🌱",
                titleKey: "organic.title",
                subtitleKey: "organic.subtitle",
                color: "from-[#4B2E2B] to-[#A47149]",
              },
              {
                icon: "🚀",
                titleKey: "tech.title",
                subtitleKey: "tech.subtitle",
                color: "from-[#4B2E2B] to-[#A47149]",
              },
              {
                icon: "⚡",
                titleKey: "delivery.title",
                subtitleKey: "delivery.subtitle",
                color: "from-[#4B2E2B] to-[#A47149]",
              },
              {
                icon: "🏆",
                titleKey: "quality.title",
                subtitleKey: "quality.subtitle",
                color: "from-[#4B2E2B] to-[#A47149]",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateY(${
                    index % 2 === 0 ? "5deg" : "-5deg"
                  })`,
                  animation: `float 3s ease-in-out infinite ${index * 0.5}s`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(`hero.features.${card.titleKey}`)}
                  </h3>
                  <p className="text-[#4B2E2B]-200/80 text-sm">
                    {t(`hero.features.${card.subtitleKey}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section with Morphing Button */}
          <div className="text-center space-y-8 pb-16">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#4B2E2B] via-[#A47149] to-[#DCC6B2] hover:from-[#4B2E2B] hover:via-[#A47149] hover:to-[#DCC6B2] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"
                style={{ animationDuration: "0.6s" }}
              ></div>
              <span className="relative z-10">{t("hero.cta")}</span>
              <ArrowRight
                className={`w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10 ${
                  isArabic ? "rotate-180 group-hover:translate-x-[-0.5rem]" : ""
                }`}
              />
            </Link>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-white/60 mt-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-[#4B2E2B]/40 to-[#A47149]/40 backdrop-blur-sm rounded-full border-2 border-[#4B2E2B]/50 flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">4.9/5</div>
                  <div className="text-sm">
                    1000+ {t("hero.social.reviews")}
                  </div>
                </div>
              </div>

              <div className="h-12 w-px bg-[#4B2E2B]/30"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm">{t("hero.social.support")}</div>
              </div>

              <div className="h-12 w-px bg-[#4B2E2B]/30"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm">{t("hero.social.experience")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Magazine Style */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1EB] via-[#DCC6B2] to-[#A47149] relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#4B2E2B]/20 to-[#A47149]/20 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#4B2E2B]/20 to-[#A47149]/20 rounded-full opacity-15 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-bl from- [#4B2E2B]/20 to-[#A47149]/20 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Area */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main About Card */}
              {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 transform hover:scale-105 transition-transform duration-300"> */}
              <div className="p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4B2E2B] to-[#A47149] text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <Sprout className="w-4 h-4" />
                  <span>{t("about.badge")}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#4B2E2B] via-[#A47149] to-[#DCC6B2] bg-clip-text text-transparent">
                    {t("about.title")}
                  </span>
                </h2>

                {/* Description */}
                <p className="text-lg text-white leading-relaxed mb-6">
                  {t("about.description")}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      key: "experience",
                      icon: "⭐",
                      gradient: "from-amber-400 to-amber-600",
                    },
                    {
                      key: "clients",
                      icon: "🤝",
                      gradient: "from-[#4B2E2B] to-[#A47149]",
                    },
                  ].map(item => (
                    <div
                      key={item.key}
                      className="bg-[#F5F1EB] rounded-xl p-4 border border-[#DCC6B2]"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-3 shadow-lg`}
                      >
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-1">
                        {t(`about.stats.${item.key}.number`)}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {t(`about.stats.${item.key}.label`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Panel */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 lg:h-[500px]">
                {/* Background Image Card */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
                  <Image
                        src="/images/blackcoffe.jpg"
                    alt="Coffee beans and cup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E2B]/60 to-transparent"></div>
                </div>

                {/* Floating Mission Card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t("about.mission.title")}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t("about.mission.description")}
                  </p>
                </div>

                {/* Floating Vision Card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t("about.vision.title")}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t("about.vision.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - 3D Card Layout */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-[#F5F1EB] via-[#DCC6B2]/30 to-[#A47149]/30 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-15 transform translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full opacity-10 transform -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4B2E2B] to-[#A47149] text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>☕</span>
                <span>{t("products.badge")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#4B2E2B] via-[#A47149] to-[#DCC6B2] bg-clip-text text-transparent">
                  {t("products.title")}
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t("products.subtitle")}
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                key: "espresso",
                icon: "☕",
                gradient: "from-[#4B2E2B] to-[#A47149]",
                bgGradient: "from-[#F5F1EB] to-[#DCC6B2]",
                borderColor: "border-[#A47149]",
                image: "/images/coffe.jpg",
              },
              {
                key: "latte",
                icon: "🥛",
                gradient: "from-[#DCC6B2] to-[#A47149]",
                bgGradient: "from-[#F5F1EB] to-[#DCC6B2]",
                borderColor: "border-[#DCC6B2]",
                image: "/images/espresso.jpg",
              },
              {
                key: "iced",
                icon: "🧊",
                gradient: "from-[#A47149] to-[#6E7C4E]",
                bgGradient: "from-[#DCC6B2] to-[#F5F1EB]",
                borderColor: "border-[#A47149]",
                image: "/images/Cold Brews & Iced Coffees.jpg",
              },
              {
                key: "pastries",
                icon: "🥐",
                gradient: "from-[#DCC6B2] to-[#fff]",
                bgGradient: "from-[#F5F1EB] to-[#DCC6B2]",
                borderColor: "border-[#DCC6B2]",
                image: "/images/bakery.jpg",
              },
              {
                key: "tea",
                icon: "🍵",
                gradient: "from-[#6E7C4E] to-[#fff]",
                bgGradient: "from-[#F5F1EB] to-[#DCC6B2]",
                borderColor: "border-[#6E7C4E]",
                image: "/images/tea.jpg",
              },
            ].map(
              (
                { key, icon, gradient, bgGradient, borderColor, image },
                index,
              ) => (
                <div
                  key={key}
                  className={`group relative backdrop-blur-sm bg-gradient-to-br ${bgGradient} rounded-3xl p-6  transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer`}
                  style={{
                    transform: `perspective(1000px) rotateY(${
                      index % 2 === 0 ? "2deg" : "-2deg"
                    })`,
                    // animation: `float 3s ease-in-out infinite ${index * 0.5}s`,
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </div>

                  {/* Product Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
            src={image}
            alt="Coffee beans"
            fill
            className="object-cover"
          />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-70`}
                    ></div>

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span className="text-2xl">{icon}</span>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mb-3 shadow-lg`}
                        >
                          <span className="text-lg text-white font-bold">
                            💡
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(`products.${key}.title`)}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t(`products.${key}.description`)}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {[1, 2].map(i => (
                        <div key={i} className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center`}
                          >
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-sm text-gray-600">
                            {t(`products.${key}.features.feature${i}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Interactive Cards */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1EB] via-[#DCC6B2] to-[#A47149] relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#A47149] to-[#4B2E2B] rounded-full opacity-20 transform -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-[#DCC6B2] to-[#A47149] rounded-full opacity-15 transform translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-bl from-[#4B2E2B] to-[#A47149] rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="p-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A47149] to-[#4B2E2B] text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>☕</span>
                <span>{t("whyUs.badge")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#4B2E2B] via-[#A47149] to-[#DCC6B2] bg-clip-text text-transparent">
                  {t("whyUs.title")}
                </span>
              </h2>

              <p className="text-lg text-[#4B2E2B] leading-relaxed">
                {t("whyUs.subtitle")}
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Benefits Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    key: "quality",
                    icon: CheckCircle,
                    gradient: "from-[#4B2E2B] to-[#A47149]",
                    bgGradient: "from-[#F5F1EB] to-[#DCC6B2]",
                    borderColor: "border-[#4B2E2B]",
                  },
                  {
                    key: "team",
                    icon: Users,
                    gradient: "from-[#A47149] to-[#DCC6B2]",
                    bgGradient: "from-[#F5F1EB] to-[#A47149]/30",
                    borderColor: "border-[#A47149]",
                  },
                  {
                    key: "delivery",
                    icon: Truck,
                    gradient: "from-[#DCC6B2] to-[#4B2E2B]",
                    bgGradient: "from-[#F5F1EB] to-[#DCC6B2]/60",
                    borderColor: "border-[#DCC6B2]",
                  },
                ].map(
                  ({
                    key,
                    icon: IconComponent,
                    gradient,
                    bgGradient,
                    borderColor,
                  }) => (
                    <div
                      key={key}
                      className={`group relative bg-gradient-to-br ${bgGradient} backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border ${borderColor}`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)`,
                            backgroundSize: "15px 15px",
                          }}
                        ></div>
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-[#4B2E2B] mb-4">
                        {t(`whyUs.${key}.title`)}
                      </h3>

                      <p className="text-[#A47149] leading-relaxed mb-4">
                        {t(`whyUs.${key}.description`)}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {[1, 2].map(i => (
                          <div key={i} className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center`}
                            >
                              <CheckCircle className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-sm text-[#4B2E2B]">
                              {t(`whyUs.${key}.features.feature${i}`)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      ></div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Side Statistics Panel */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* Statistics Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60">
                  <h3 className="text-2xl font-bold mb-6 text-[#4B2E2B]">
                    {t("whyUs.stats.title")}
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        key: "satisfaction",
                        value: "99%",
                        color: "amber",
                      },
                      {
                        key: "projects",
                        value: "500+",
                        color: "amber",
                      },
                      {
                        key: "response",
                        value: "24h",
                        color: "amber",
                      },
                    ].map(({ key, value, color }) => (
                      <div key={key} className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}
                        >
                          {/* No emoji */}
                        </div>
                        <div>
                          <div
                            className={`text-2xl font-bold text-[#A47149]`}
                          >
                            {value}
                          </div>
                          <div className="text-[#4B2E2B] text-sm">
                            {t(`whyUs.stats.${key}`)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-gradient-to-br from-[#4B2E2B] to-[#A47149] rounded-3xl p-8 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-[#F5F1EB] italic mb-4">
                    &ldquo;{t("whyUs.testimonial.quote")}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      {/* No emoji */}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("whyUs.testimonial.author")}
                      </div>
                      <div className="text-[#DCC6B2] text-sm">
                        {t("whyUs.testimonial.role")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/coffe-beans.jpg"
            alt="Coffee beans"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4B2E2B]/95 to-[#A47149]/95"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 4
                }s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            {t("cta.title")}
          </h2>
          <p className="text-xl sm:text-2xl text-[#DCC6B2] max-w-4xl mx-auto mb-12 leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-[#4B2E2B] px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EB] to-[#DCC6B2] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">{t("cta.button")}</span>
            <ArrowRight
              className={`w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10 ${
                isArabic ? "rotate-180 group-hover:translate-x-[-0.5rem]" : ""
              }`}
            />
          </Link>

          {/* Social proof stars */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-white/80 ml-3 text-lg">
              {t("cta.socialProof")}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
