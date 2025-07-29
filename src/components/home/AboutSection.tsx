import { useTranslations } from "next-intl";
import { Sprout } from "lucide-react";
import Image from "next/image";
import { Badge, Section } from "@/components/ui";

export default function AboutSection() {
  const t = useTranslations("HomePage");

  const stats = [
    {
      key: "experience",
      icon: "⭐",
      gradient: "from-amber-400 to-amber-600",
    },
    {
      key: "clients",
      icon: "🤝",
      gradient: "from-[var(--color-primary)] to-[var(--color-primary-light)]",
    },
  ];

  return (
    <Section variant="gradient">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Content Area */}
        <div className="lg:col-span-7 space-y-8">
          <div className="p-8">
            {/* Badge */}
            <Badge
              variant="primary"
              size="md"
              icon={<Sprout className="w-4 h-4" />}
              className="mb-6"
            >
              {t("about.badge")}
            </Badge>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-lighter)] bg-clip-text text-transparent">
                {t("about.title")}
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white leading-relaxed mb-6 font-medium">
              {t("about.description")}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(item => (
                <div
                  key={item.key}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[var(--color-primary-lighter)] shadow-lg"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-3 shadow-lg`}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div className="text-xl font-bold text-[var(--color-primary)] mb-1">
                    {t(`about.stats.${item.key}.number`)}
                  </div>
                  <div className="text-[var(--color-primary-light)] text-sm font-medium">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent"></div>
            </div>

            {/* Floating Mission Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                {t("about.mission.title")}
              </h3>
              <p className="text-sm text-[var(--color-primary-light)]">
                {t("about.mission.description")}
              </p>
            </div>

            {/* Floating Vision Card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                {t("about.vision.title")}
              </h3>
              <p className="text-sm text-[var(--color-primary-light)]">
                {t("about.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 