import { type NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale } from "@/lib/translations"

function getPreferredLocale(request: NextRequest) {
  const acceptLang = request.headers.get("accept-language")
  if (!acceptLang) return defaultLocale
  const preferred = acceptLang
    .split(",")
    .map(l => l.split(";")[0].trim().split("-")[0])
    .find(l => locales.includes(l))
  return preferred || defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (!pathnameHasLocale) {
    const locale = getPreferredLocale(request)
    request.nextUrl.pathname = `/${locales.includes(locale) ? locale : defaultLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico).*)",
  ],
}