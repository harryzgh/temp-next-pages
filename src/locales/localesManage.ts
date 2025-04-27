import { cookies, headers } from 'next/headers'


const COOKIE_NAME = 'USER_LOCALE'
export const locales = ['cn', 'en', 'es', 'fr']
export const defaultLocale = 'cn'

export async function getUserLocale() {
  const locale = (await cookies()).get(COOKIE_NAME)?.value
  if (locale) return locale

  const acceptLanguage = (await headers()).get('accept-language')
  const parsedLocale = acceptLanguage?.split(',')[0].split('-')[0]
  return locales.includes(parsedLocale!) ? parsedLocale : defaultLocale
}

export async function setUserLocale(locale: string) {
  (await cookies()).set(COOKIE_NAME, locale)
}
