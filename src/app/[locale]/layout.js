import { NextIntlClientProvider } from 'next-intl'
import { Montserrat, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
import { Suspense } from 'react'
import { APP_NAME } from '@/constants'
import { cn } from '@/utils'
import Provider from './providers'

export const metadata = {
  title: APP_NAME,
  description: APP_NAME,
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
})

async function LocaleLayout({ children, params: { locale }, modal }) {
  let messages

  try {
    messages = (await import(`../../lang/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} translate="no" suppressHydrationWarning>
      <body className={cn(montserrat.variable, roboto.variable, 'min-h-screen font-sans')}>
        <Suspense>
          <NextTopLoader />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Provider locale={locale}>
              {children}
              {modal}
            </Provider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  )
}

export default LocaleLayout
