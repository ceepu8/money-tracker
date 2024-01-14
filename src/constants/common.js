export const __DEBUG__ = process.env.NODE_ENV !== 'production'
export const __PRODUCTION__ = process.env.NEXT_PUBLIC_MODE === 'production'

export const APP_NAME = 'MONEY_TRACKER'

export const locales = ['en', 'vi']

export const DEBOUNCE_DELAY = 250
export const DEBOUNCE_OPTIONS = { leading: true, trailing: false }

export const THEME = { LIGHT: 'light', DARK: 'dark', CEEPU: 'ceepu', TIST: 'tist' }
