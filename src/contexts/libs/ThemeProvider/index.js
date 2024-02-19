'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { THEME } from '@/constants'

export default function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme={THEME.PINKY_LADY}
      themes={Object.values(THEME)}
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
