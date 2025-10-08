import enTranslations from '../locales/en.json'
import zhTranslations from '../locales/zh.json'

export type Locale = 'en' | 'zh'
export type TranslationKey = keyof typeof enTranslations

export const locales: Locale[] = ['en', 'zh']
export const defaultLocale: Locale = 'en'

export const translations = {
  en: enTranslations,
  zh: zhTranslations,
} as const

export function getTranslation(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] || translations[defaultLocale][key] || key
}

export const languageNames = {
  en: { name: 'English', flag: '🇺🇸' },
  zh: { name: '中文', flag: '🇨🇳' },
} as const