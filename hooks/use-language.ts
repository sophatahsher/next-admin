import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { type Locale, type TranslationKey, getTranslation, defaultLocale } from '@/lib/i18n'

interface LanguageStore {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      locale: defaultLocale,
      setLocale: (locale: Locale) => set({ locale }),
      t: (key: TranslationKey) => {
        const currentLocale = get().locale
        return getTranslation(currentLocale, key)
      },
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ locale: state.locale }),
    }
  )
)