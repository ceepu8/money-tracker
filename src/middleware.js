import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import { locales, Routes } from '@/constants'
import { checkIsPublicPage, parseQueryString, removeLocalesFromPathname } from './utils'

const PUBLIC_FILE = /\.(.*)$/

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: false,
})

const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    async authorized() {
      return true
    },
  },
  pages: {
    signIn: Routes.AUTH.LOGIN,
  },
})

export default async function middleware(req) {
  const webviewToken = parseQueryString(req.nextUrl.search)?.token
  const pathName = removeLocalesFromPathname(req.nextUrl.pathname)
  const isPublicPage = checkIsPublicPage(pathName)
  const token = await getToken({ req })
  const isAuth = !!token || !!webviewToken

  const isPublicFolder =
    pathName.startsWith('/_next') ||
    pathName.startsWith('/api') ||
    pathName.startsWith('/static') ||
    PUBLIC_FILE.test(pathName)

  const isAuthPage = [Routes.AUTH.LOGIN, Routes.AUTH.SIGNUP, Routes.AUTH.FORGOT_PASSWORD].includes(
    pathName
  )

  if (pathName === Routes.HOME && isAuth) {
    return NextResponse.redirect(new URL(Routes.AUTH.HOME, req.url))
  }

  if (isPublicPage || isPublicFolder) {
    return intlMiddleware(req)
  }

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL(Routes.AUTH.HOME, req.url))
    }
    return intlMiddleware(req)
  }

  if (!isAuth && !isPublicPage && req.method !== 'POST') {
    return NextResponse.redirect(new URL(Routes.AUTH.LOGIN, req.url))
  }
  return authMiddleware(req)
}

export const config = {
  unstable_allowDynamic: ['/node_modules/**'],
  matcher: ['/((?!api|_vercel|_next|icons|images|.well-known|favicon.ico).*)'],
}
