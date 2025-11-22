'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Supported languages
export type Language = 'zh' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (namespace: string, key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Import all translation files
import zhCommon from '../../../locales/zh/common.json';
import zhHome from '../../../locales/zh/home.json';
import zhAbout from '../../../locales/zh/about.json';
import zhApplication from '../../../locales/zh/application.json';
import zhJoin from '../../../locales/zh/join.json';

import enCommon from '../../../locales/en/common.json';
import enHome from '../../../locales/en/home.json';
import enAbout from '../../../locales/en/about.json';
import enApplication from '../../../locales/en/application.json';
import enJoin from '../../../locales/en/join.json';

const translations = {
  zh: {
    common: zhCommon,
    home: zhHome,
    about: zhAbout,
    application: zhApplication,
    join: zhJoin
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    application: enApplication,
    join: enJoin
  }
};

// Detect browser language
function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'zh';

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('en')) return 'en';
  return 'zh'; // Default to Chinese
}

// Get saved language from localStorage
function getSavedLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem('language');
  return saved === 'zh' || saved === 'en' ? saved : null;
}

// Save language to localStorage
function saveLanguage(lang: Language) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize language on client side
    const savedLang = getSavedLanguage();
    const initialLang = savedLang || detectBrowserLanguage();
    setLanguageState(initialLang);
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
  };

  const t = (namespace: string, key: string): string => {
    const keys = key.split('.');
    let value: unknown =
      translations[language][namespace as keyof typeof translations.zh];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  // Don't render children until language is initialized to avoid hydration mismatch
  if (!isInitialized) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
