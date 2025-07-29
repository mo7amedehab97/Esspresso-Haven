import { buildMetadata } from "@/utils/metadata";
import { ParamsProps } from "@/utils/types";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import {
  Target,
  Eye,
  Users,
  Award,
  Sprout,
  CheckCircle,
  TrendingUp,
  Leaf,
  Handshake,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useServerLocale } from "@/hooks";

export async function generateMetadata(props: ParamsProps) {
  const { locale } = await props.params;
  return buildMetadata(locale, "AboutMetadata", "about");
}

export default function About({ params }: ParamsProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const { isArabic } = useServerLocale();

  // Coffee color palette
  const coffeeColors = {
    dark: "#4B2E2B",
    medium: "#7B4A2D",
    light: "#C7A17A",
    cream: "#F5F1EB",
    accent: "#B5884A",
    green: "#6F8A4F",
    beige: "#EDE6DD",
    brown: "#A47149",
  };

  return (
    <>
      {/* Layered Magazine-Style Hero Section */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #F5F1EB 0%, #C7A17A 50%, #4B2E2B 100%)",
        }}
      >
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle at 70% 30%, ${coffeeColors.brown} 0%, ${coffeeColors.light} 100%)`,
              transform: "translateX(33%) translateY(-33%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-25"
            style={{
              background: `radial-gradient(circle at 30% 70%, ${coffeeColors.cream} 0%, ${coffeeColors.brown} 100%)`,
              transform: "translateX(-33%) translateY(33%)",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${coffeeColors.light} 0%, ${coffeeColors.brown} 100%)`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            {/* Main Content Area */}
            <div className="lg:col-span-7 space-y-8">
              {/* Header Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 transform hover:scale-105 transition-transform duration-300">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, #7B4A2D 0%, #B5884A 100%)",
                  }}
                >
                  
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <Sprout className="w-4 h-4" />
                  <span>{t("hero.badge")}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background:
                        "url('/images/coffe-beans.jpg') center/cover no-repeat",
                        
                    }}
                  >
                    
                    {t("hero.title")}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-[#7B4A2D] leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

      {/* Stats Cards Row - update keys to match translation file */}
      <div className="grid grid-cols-2 gap-4">
        {[ 
          {
            key: "products",
            icon: "☕",
            gradient: "from-[#4B2E2B] to-[#C7A17A]",
          },
          {
            key: "farms",
            icon: "🌱",
            gradient: "from-[#B5884A] to-[#7B4A2D]",
          },
        ].map(item => (
          <div
            key={item.key}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 border border-white/60"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
            >
              <span className="text-xl">{item.icon}</span>
            </div>
            <div className="text-2xl font-bold text-[#4B2E2B] mb-1">
              {t(`impact.${item.key}.number`)}
            </div>
            <div className="text-[#7B4A2D] text-sm font-medium">
              {t(`impact.${item.key}.label`)}
            </div>
          </div>
        ))}
      </div>
            </div>


            {/* Side Panel with Overlapping Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 lg:h-[500px]">
                {/* Background Image Card */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
                  <Image
                    src="/images/coffe-cup.jpg"
                    alt="Espresso shot"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #4B2E2Bcc 60%, transparent 100%)",
                    }}
                  ></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-[#EDE6DD] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700] to-[#B5884A] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg">⭐</span>
                    </div>
                    <div className="text-xl font-bold text-[#4B2E2B]">
                      {t("impact.experience.number")}
                    </div>
                    <div className="text-[#7B4A2D] text-xs">
                      {t("impact.experience.label")}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-[#EDE6DD] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#B5884A] to-[#C7A17A] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg">❤️</span>
                    </div>
                    <div className="text-xl font-bold text-[#4B2E2B]">
                      {t("impact.satisfaction.number")}
                    </div>
                    <div className="text-[#7B4A2D] text-xs">
                      {t("impact.satisfaction.label")}
                    </div>
                  </div>
                </div>

                {/* Feature Highlight Card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-[#EDE6DD] max-w-xs">
                  <div className="text-center">
                    <div className="flex justify-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-[#7B4A2D] rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#6F8A4F] rounded-full flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#B5884A] rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-[#4B2E2B] mb-2">
                      {t("hero.feature.title")}
                    </h3>
                    <p className="text-sm text-[#7B4A2D]">
                      {t("hero.feature.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,95 900,5 1200,50 L1200,100 L0,100 Z"
              fill={coffeeColors.cream}
              opacity="0.7"
            />
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fff 0%, #EDE6DD 50%, #C7A17A22 100%)",
        }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <Image
            src="/images/coffe-beans.jpg"
            alt="Coffee beans and cup"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="group relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #B5884A 0%, #6F8A4F 100%)",
                }}
              ></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-[#B5884A]/30 transition-all duration-500 transform hover:-translate-y-2">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#B5884A]/10 text-[#7B4A2D] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  <span>{t("mission.badge")}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#B5884A] to-[#7B4A2D] text-white rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2E2B]">
                    {t("mission.title")}
                  </h2>
                </div>
                <p className="text-lg text-[#7B4A2D] leading-relaxed">
                  {t("mission.content")}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #6F8A4F 0%, #B5884A 100%)",
                }}
              ></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-[#6F8A4F]/30 transition-all duration-500 transform hover:-translate-y-2">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#6F8A4F]/10 text-[#6F8A4F] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Eye className="w-4 h-4" />
                  <span>{t("vision.badge")}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#6F8A4F] to-[#B5884A] text-white rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2E2B]">
                    {t("vision.title")}
                  </h2>
                </div>
                <p className="text-lg text-[#7B4A2D] leading-relaxed">
                  {t("vision.content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #F5F1EB 0%, #EDE6DD 100%)",
        }}
      >
    

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4B2E2B] mb-8">
              {t("values.title")}
            </h2>
            <p className="text-xl text-[#7B4A2D] max-w-4xl mx-auto leading-relaxed">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                key: "quality",
                icon: CheckCircle,
                color: "from-[#B5884A] to-[#7B4A2D]",
                bgColor: "from-[#F5F1EB] to-[#EDE6DD]",
                borderColor: "border-[#B5884A]/30",
              },
              {
                key: "innovation",
                icon: TrendingUp,
                color: "from-[#7B4A2D] to-[#B5884A]",
                bgColor: "from-[#EDE6DD] to-[#C7A17A]",
                borderColor: "border-[#7B4A2D]/20",
              },
              {
                key: "sustainability",
                icon: Leaf,
                color: "from-[#6F8A4F] to-[#B5884A]",
                bgColor: "from-[#F5F1EB] to-[#EDE6DD]",
                borderColor: "border-[#6F8A4F]/20",
              },
              {
                key: "partnership",
                icon: Users,
                color: "from-[#A47149] to-[#B5884A]",
                bgColor: "from-[#EDE6DD] to-[#F5F1EB]",
                borderColor: "border-[#A47149]/20",
              },
            ].map(
              (
                { key, icon: IconComponent, color, bgColor, borderColor },
                index,
              ) => (
                <div
                  key={index}
                  className={`group relative text-center p-8 rounded-3xl bg-gradient-to-br ${bgColor} border ${borderColor} transition-all duration-300 transform hover:-translate-y-4 hover:scale-105`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${color} mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#4B2E2B] mb-4">
                      {t(`values.${key}.title`)}
                    </h3>
                    <p className="text-[#7B4A2D] leading-relaxed">
                      {t(`values.${key}.description`)}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-3/4 opacity-10">
          <Image
            src="/images/coffe-bg.jpg"
            alt="Greenhouse crops"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#B5884A]/10 text-[#7B4A2D] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>{t("story.badge")}</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-[#4B2E2B] mb-8">
                {t("story.title")}
              </h2>
              <p className="text-xl text-[#7B4A2D] leading-relaxed mb-8">
                {t("story.content")}
              </p>

              {/* Team Info */}
              <div className="bg-gradient-to-r from-[#F5F1EB] to-[#EDE6DD] rounded-3xl p-8 border border-[#B5884A]/20">
                <h3 className="text-2xl font-bold text-[#4B2E2B] mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#B5884A]" />
                  {t("team.title")}
                </h3>
                <p className="text-[#7B4A2D] mb-4">{t("team.subtitle")}</p>
                <p className="text-lg text-[#7B4A2D] leading-relaxed">
                  {t("team.description")}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/iced-coffe.jpg"
                  alt="Modern agriculture technology"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#B5884A]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#6F8A4F]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/coffe-bg.jpg"
            alt="Modern irrigation system"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #4B2E2Bcc 95%, #B5884Acc 100%)",
            }}
          ></div>
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
                animation: `float ${3 + Math.random() * 4
                  }s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            {t("cta.title")}
          </h2>
          <p className="text-xl sm:text-2xl text-[#EDE6DD] max-w-4xl mx-auto mb-12 leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-[#7B4A2D] px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EB] to-[#EDE6DD] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">{t("cta.button")}</span>
            <ArrowRight
              className={`w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10 ${isArabic ? "rotate-180 group-hover:translate-x-[-0.5rem]" : ""
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
