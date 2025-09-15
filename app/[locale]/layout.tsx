import type React from "react"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getTranslations } from "@/lib/translations"

const locales = ["en", "da", "de", "fr"] as const
type Locale = (typeof locales)[number]


export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  return t.metadata;
}

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as Locale) ? locale : "en"
  const t = getTranslations(safeLocale)

  return (
    <html lang={safeLocale}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen">
            <header className="border-b border-emerald-200 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-emerald-800 dark:text-emerald-200">{t.title}</h1>
                <LanguageSwitcher currentLocale={safeLocale} />
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}