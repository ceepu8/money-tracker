import { Toaster } from 'sonner'
import { useDayjsLocale } from '@/configs/dayjs'
import { useYupValidate } from '@/configs/yup'
import { AntdProvider, AuthProvider, ThemeProvider, WrapBalancerProvider } from '@/contexts/libs'

export default function AppProviders({ children, locale }) {
  useDayjsLocale(locale)
  useYupValidate(locale)

  return (
    <AuthProvider>
      <ThemeProvider>
        <AntdProvider>
          <WrapBalancerProvider>
            {children}
            <Toaster position="bottom-right" richColors />
          </WrapBalancerProvider>
        </AntdProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
