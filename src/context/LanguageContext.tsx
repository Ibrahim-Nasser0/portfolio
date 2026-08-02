"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en, TranslationKeys } from "@/i18n/locales/en";
import { ar } from "@/i18n/locales/ar";

type Locale = "en" | "ar";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string) => string;
  isRTL: boolean;
}

const dictionaries: Record<Locale, TranslationKeys> = { en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Load saved locale from localStorage if available
    const savedLocale = localStorage.getItem("preferred_locale") as Locale | null;
    if (savedLocale === "en" || savedLocale === "ar") {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    // Update HTML dir and lang attributes dynamically for full RTL/LTR support
    const root = document.documentElement;
    if (locale === "ar") {
      root.setAttribute("dir", "rtl");
      root.setAttribute("lang", "ar");
    } else {
      root.setAttribute("dir", "ltr");
      root.setAttribute("lang", "en");
    }
    localStorage.setItem("preferred_locale", locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  };

  // Safe nested translation key resolver e.g. t("hero.title")
  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = dictionaries[locale];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English dictionary if key is missing in active locale
        let fallback: any = dictionaries["en"];
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return typeof fallback === "string" ? fallback : path;
      }
    }

    return typeof current === "string" ? current : path;
  };

  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
