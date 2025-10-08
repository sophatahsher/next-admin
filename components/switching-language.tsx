"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"
import { type Locale, languageNames, locales } from "@/lib/i18n"

export function SwitchingLanguage() {
  const { locale, setLocale } = useLanguage()
  const currentLanguage = languageNames[locale]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-3 gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium hidden sm:inline">
            {currentLanguage.name}
          </span>
          <span className="text-lg sm:hidden">
            {currentLanguage.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {locales.map((code) => {
          const language = languageNames[code]
          const isActive = locale === code

          return (
            <DropdownMenuItem
              key={code}
              onClick={() => setLocale(code)}
              className={cn(
                "flex items-center justify-between cursor-pointer",
                isActive && "bg-accent text-accent-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-base">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </div>
              {isActive && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}