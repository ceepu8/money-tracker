import { Toaster } from 'sonner'
import { useDayjsLocale } from '@/configs/dayjs'
import { useYupValidate } from '@/configs/yup'
import AuthProvider from '@/contexts/AuthProvider'
import ThemeProvider from '@/contexts/ThemeProvider'
import WrapBalancerProvider from '@/contexts/WrapBalancerProvider'

export default function AppProviders({ children, locale }) {
  useDayjsLocale(locale)
  useYupValidate(locale)

  return (
    <AuthProvider>
      <ThemeProvider>
        <WrapBalancerProvider>
          {children}
          <Toaster position="bottom-right" richColors />
        </WrapBalancerProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
