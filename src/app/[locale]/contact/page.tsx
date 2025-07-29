import { buildMetadata } from "@/utils/metadata";
import { ParamsProps } from "@/utils/types";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  Headphones,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(props: ParamsProps) {
  const { locale } = await props.params;
  return buildMetadata(locale, "ContactMetadata", "contact");
}


export default function Contact({ params }: ParamsProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("ContactPage");

  return (
    <>
      {/* Layered Magazine-Style Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#F5E9DA] via-[#EADBC8] to-[#C9B29B] overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#A47551] to-[#4B2E2B] rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#C9B29B] to-[#A47551] rounded-full opacity-15 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-bl from-[#7B5E57] to-[#A47551] rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            {/* Main Content Area */}
            <div className="lg:col-span-7 space-y-8">
              {/* Header Card */}
              <div className="p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B5E57] to-[#4B2E2B] text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <MessageCircle className="w-4 h-4" />
                  <span>{t("title")}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#4B2E2B] via-[#7B5E57] to-[#A47551] bg-clip-text text-transparent">
                    {t("title")}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-[#7B5E57] leading-relaxed">
                  {t("description")}
                </p>
              </div>

              {/* Contact Methods Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Phone,
                    title: t("phone"),
                    content: t("phoneNumber"),
                    href: `tel:${t("phoneNumber")}`,
                    gradient: "from-[#A47551] to-[#4B2E2B]",
                    bgGradient: "from-[#F5E9DA] to-[#EADBC8]",
                  },
                  {
                    icon: Mail,
                    title: t("email"),
                    content: t("emailAddress"),
                    href: `mailto:${t("emailAddress")}`,
                    gradient: "from-[#7B5E57] to-[#A47551]",
                    bgGradient: "from-[#F5E9DA] to-[#C9B29B]",
                  },
                  {
                    icon: MapPin,
                    title: t("address"),
                    content: t("addressDetails"),
                    href: "#location",
                    gradient: "from-[#C9B29B] to-[#7B5E57]",
                    bgGradient: "from-[#F5E9DA] to-[#EADBC8]",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`group bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 border border-[#EADBC8] block`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-[#7B5E57] mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm font-semibold text-[#4B2E2B]">
                      {item.content}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Side Panel with Overlapping Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 lg:h-[500px]">
                {/* Background Image Card */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern office building"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E2B]/70 to-transparent"></div>
                </div>

                {/* Floating Business Hours Card */}
                <div className="absolute -top-4 -right-4 bg-[#F5E9DA] rounded-2xl p-6 shadow-xl border border-[#EADBC8] transform -rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#A47551] to-[#4B2E2B] rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-[#4B2E2B]">
                      {t("businessHours")}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#7B5E57]">
                        {t("schedule.sundayThursday")}
                      </span>
                      <span className="font-medium">
                        {t("schedule.morningHours")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#7B5E57]">
                        {t("schedule.friday")}
                      </span>
                      <span className="font-medium">
                        {t("schedule.fridayHours")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Support Card */}
                <div className="absolute -bottom-4 -left-4 bg-[#F5E9DA] rounded-2xl p-6 shadow-xl border border-[#EADBC8] transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#A47551] to-[#4B2E2B] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-lg font-bold text-[#4B2E2B] mb-1">
                      24/7
                    </div>
                    <div className="text-[#7B5E57] text-xs">
                      {t("benefits.response")}
                    </div>
                  </div>
                </div>

                {/* Feature Highlight Card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F5E9DA]/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-[#EADBC8] max-w-xs">
                  <div className="text-center">
                    <div className="flex justify-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-[#A47551] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#4B2E2B] rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#7B5E57] rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-[#4B2E2B] mb-2">
                      {t("whyContactUs")}
                    </h3>
                    <p className="text-sm text-[#7B5E57]">
                      {t("benefits.consultation")}
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
              fill="#F5E9DA"
              opacity="0.7"
            />
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5E9DA] via-[#EADBC8]/60 to-[#C9B29B]/60 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Agricultural consultation"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              {/* Contact Form Component */}
              <ContactForm />
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Why Contact Us Benefits */}
              <div className="bg-[#F5E9DA]/90 backdrop-blur-sm rounded-3xl p-8 border border-[#EADBC8]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4B2E2B] to-[#A47551] rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4B2E2B] to-[#A47551] bg-clip-text text-transparent">
                    {t("whyContactUs")}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { text: t("benefits.consultation"), icon: "🌱" },
                    { text: t("benefits.advice"), icon: "🔬" },
                    { text: t("benefits.solutions"), icon: "⚡" },
                    { text: t("benefits.response"), icon: "🚀" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-[#EADBC8] rounded-xl border border-[#C9B29B]"
                    >
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <span className="text-[#7B5E57] font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Information */}
              <div
                id="location"
                className="bg-[#F5E9DA]/90 backdrop-blur-sm rounded-3xl p-8 border border-[#EADBC8]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A47551] to-[#4B2E2B] rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4B2E2B] to-[#A47551] bg-clip-text text-transparent">
                    {t("findUs")}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-[#EADBC8] rounded-xl border border-[#C9B29B]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 bg-[#A47551] rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-[#4B2E2B]">
                        {t("ourLocation")}
                      </span>
                    </div>
                    <p className="text-[#7B5E57] leading-relaxed mb-3">
                      {t("addressDetails")}
                    </p>
                    <div className="text-sm text-[#A47551] font-medium">
                      {t("locationDescription")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              {/* <div className="bg-gradient-to-br from-[#A47551] to-[#4B2E2B] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">{t("cta.title")}</h3>
                <p className="text-[#F5E9DA] mb-6">{t("cta.subtitle")}</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${t("phoneNumber")}`}
                    className="inline-flex items-center gap-3 bg-white text-[#4B2E2B] px-6 py-3 rounded-xl font-semibold hover:bg-[#F5E9DA] transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    {t("cta.callNow")}
                  </a>
                  <a
                    href={`mailto:${t("emailAddress")}`}
                    className="inline-flex items-center gap-3 bg-[#A47551] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7B5E57] transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    {t("cta.emailUs")}
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
