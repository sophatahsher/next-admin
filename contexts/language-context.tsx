"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Language {
  code: string
  name: string
  flag: string
}

interface LanguageContextType {
  currentLanguage: Language
  changeLanguage: (languageCode: string) => void
  languages: Language[]
  t: (key: string) => string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

// Basic translations - you can expand this or use a proper i18n library
const translations: Record<string, Record<string, string>> = {
  en: {
    dashboard: "Dashboard",
    analytics: "Analytics",
    settings: "Settings",
    profile: "Profile",
    logout: "Log out",
    search: "Search...",
    notifications: "Notifications",
    // Add more translations as needed
  },
  es: {
    dashboard: "Panel de Control",
    analytics: "Análisis",
    settings: "Configuración",
    profile: "Perfil",
    logout: "Cerrar Sesión",
    search: "Buscar...",
    notifications: "Notificaciones",
  },
  fr: {
    dashboard: "Tableau de Bord",
    analytics: "Analytique",
    settings: "Paramètres",
    profile: "Profil",
    logout: "Se Déconnecter",
    search: "Rechercher...",
    notifications: "Notifications",
  },
  // Add more languages as needed
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguageCode, setCurrentLanguageCode] = useState("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguageCode(savedLanguage)
    }
  }, [])

  const currentLanguage = languages.find(lang => lang.code === currentLanguageCode) || languages[0]

  const changeLanguage = (languageCode: string) => {
    if (languages.find(lang => lang.code === languageCode)) {
      setCurrentLanguageCode(languageCode)
      localStorage.setItem("language", languageCode)
    }
  }

  const t = (key: string): string => {
    return translations[currentLanguageCode]?.[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      languages,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}