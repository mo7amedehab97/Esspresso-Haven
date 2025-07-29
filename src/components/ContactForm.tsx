"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "@/hooks/useLocale";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Coffee theme colors
const coffee = {
  brown: "#4B2E2B",
  brownLight: "#A47149",
  cream: "#F5F1EB",
  gold: "#B5884A",
  error: "#B94A2C",
};

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  const { locale } = useLocale();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t("form.validation.nameRequired");
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("form.validation.nameMinLength");
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t("form.validation.emailRequired");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t("form.validation.emailInvalid");
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t("form.validation.messageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("form.validation.messageMinLength");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || t("form.error"));
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="backdrop-blur-sm rounded-3xl p-8 border"
      style={{
        background: `linear-gradient(135deg, ${coffee.cream} 0%, #EDE6DD 100%)`,
        borderColor: `${coffee.brown}20`,
      }}
    >
      <div className="mb-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: coffee.brown }}
        >
          {t("form.title")}
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ color: coffee.brownLight }}
        >
          {t("form.description")}
        </p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div
          className="mb-6 p-4 rounded-xl flex items-center gap-3"
          style={{
            background: `${coffee.cream}`,
            border: `1px solid ${coffee.brownLight}40`,
          }}
        >
          <CheckCircle className="w-5 h-5" style={{ color: coffee.brown }} />
          <p className="font-medium" style={{ color: coffee.brown }}>
            {submitMessage}
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div
          className="mb-6 p-4 rounded-xl flex items-center gap-3"
          style={{
            background: "#FDEDE7",
            border: `1px solid ${coffee.error}30`,
          }}
        >
          <AlertCircle className="w-5 h-5" style={{ color: coffee.error }} />
          <p className="font-medium" style={{ color: coffee.error }}>
            {submitMessage}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: coffee.brown }}
            >
              {t("form.name")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("form.namePlaceholder")}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 outline-0 bg-white`}
              style={{
                borderColor: errors.name
                  ? "#FCA5A5"
                  : coffee.brownLight + "40",
                boxShadow: errors.name
                  ? "0 0 0 2px #FCA5A5"
                  : "0 0 0 0 transparent",
                color: coffee.brown,
              }}
            />
            {errors.name && (
              <p className="mt-1 text-sm" style={{ color: coffee.error }}>
                {errors.name}
              </p>
            )}
          </div>

          <div className="group">
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: coffee.brown }}
            >
              {t("form.email")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("form.emailPlaceholder")}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 outline-0 bg-white`}
              style={{
                borderColor: errors.email
                  ? "#FCA5A5"
                  : coffee.brownLight + "40",
                boxShadow: errors.email
                  ? "0 0 0 2px #FCA5A5"
                  : "0 0 0 0 transparent",
                color: coffee.brown,
              }}
            />
            {errors.email && (
              <p className="mt-1 text-sm" style={{ color: coffee.error }}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="group">
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: coffee.brown }}
          >
            {t("form.message")} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("form.messagePlaceholder")}
            rows={6}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 resize-none outline-0 bg-white`}
            style={{
              borderColor: errors.message
                ? "#FCA5A5"
                : coffee.brownLight + "40",
              boxShadow: errors.message
                ? "0 0 0 2px #FCA5A5"
                : "0 0 0 0 transparent",
              color: coffee.brown,
            }}
          />
          {errors.message && (
            <p className="mt-1 text-sm" style={{ color: coffee.error }}>
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, ${coffee.brown} 0%, ${coffee.brownLight} 100%)`,
            color: coffee.cream,
            boxShadow:
              "0 2px 16px 0 rgba(75,46,43,0.10), 0 1.5px 6px 0 rgba(180,113,73,0.10)",
          }}
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" style={{ color: coffee.cream }} />
          ) : (
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: coffee.cream }} />
          )}
          {isSubmitting ? t("form.sending") : t("form.submit")}
        </button>
      </form>
    </div>
  );
}
