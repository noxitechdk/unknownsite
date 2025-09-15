"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { translations } from "@/lib/translations"

interface LanguageSwitcherProps {
  currentLocale: string
}

const availableLanguages = Object.entries(translations).map(([code, obj]: [string, any]) => ({
  code,
  name: obj.language,
  flag: obj.flag,
}))

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()

  const handleLanguageChange = (newLocale: string) => {
    router.push(`/${newLocale}`)
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-emerald-600" />
      <Select value={currentLocale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-32 border-emerald-200">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {availableLanguages.map(({ code, name, flag }) => (
            <SelectItem key={code} value={code}>
              <img
                src={`https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${flag}.svg`}
                alt=""
                className="inline-block w-5 h-5 mr-2 rounded-sm align-middle"
                loading="lazy"
              />
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
