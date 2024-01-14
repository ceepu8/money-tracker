import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import duration from 'dayjs/plugin/duration'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isToday from 'dayjs/plugin/isToday'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc'

const locales = {
  default: () => import('dayjs/locale/en'),
  en: () => import('dayjs/locale/en'),
  vi: () => import('dayjs/locale/vi'),
}

dayjs.extend(calendar)
dayjs.extend(duration)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(isToday)
dayjs.extend(relativeTime)
dayjs.extend(timezone)
dayjs.extend(updateLocale)
dayjs.extend(utc)

export function useDayjsLocale(locale) {
  if (locales[locale] !== undefined) {
    locales[locale]().then(() => dayjs.locale(locale))
  }
}
