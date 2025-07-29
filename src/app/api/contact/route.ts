import { NextRequest, NextResponse } from "next/server";

// Translation imports
import arTranslations from "@/translations/ar.json";
import enTranslations from "@/translations/en.json";

const translations = {
  ar: arTranslations,
  en: enTranslations,
};

function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.en;
}

export async function POST(request: NextRequest) {
  let t = getTranslations("en"); // Default fallback

  try {
    const body = await request.json();
    const { name, email, message, locale = "en" } = body;

    // Get translations for response messages
    t = getTranslations(locale);

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: t.ContactPage.form.api.allFieldsRequired },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: t.ContactPage.form.api.invalidEmail },
        { status: 400 },
      );
    }

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log the contact form submission (for demo purposes)
    console.log("Contact Form Submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      locale,
    });

    // Return success response (no actual email sent)
    return NextResponse.json(
      { message: t.ContactPage.form.api.successMessage },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: t.ContactPage.form.api.errorMessage },
      { status: 500 },
    );
  }
}
