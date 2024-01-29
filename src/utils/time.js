import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'

dayjs.extend(isSameOrBefore)
dayjs.extend(utc)

export function getWeekFromDate(date) {
  const inputDate = dayjs(date).startOf('day')
  const startOfWeek = inputDate.startOf('week')
  const endOfWeek = inputDate.endOf('week')

  const week = []
  let currentDate = startOfWeek

  while (currentDate.isSameOrBefore(endOfWeek)) {
    week.push(currentDate)
    currentDate = currentDate.add(1, 'day')
  }

  return week
}

const rangeWeek = getWeekFromDate(dayjs())

export const getActiveByRange = (day, activeRange) => {
  switch (activeRange) {
    case 'this-day':
      return dayjs().isSame(day, 'date')
    case 'this-week':
      return dayjs().isSame(day, 'week')
    case 'this-month':
      return dayjs().isSame(day, 'month')
    case 'this-year':
      return dayjs().isSame(day, 'year')

    default:
      return false
  }
}

export const getFirstByRange = (day, activeRange) => {
  switch (activeRange) {
    case 'this-day':
      return dayjs().isSame(day, 'date')
    case 'this-week':
      return dayjs(rangeWeek[0]).isSame(day, 'date')
    case 'this-month':
      return dayjs().startOf('month').isSame(day, 'day')
    case 'this-year':
      return dayjs().startOf('year').isSame(day, 'day')

    default:
      return false
  }
}

export const getEndByRange = (day, activeRange) => {
  switch (activeRange) {
    case 'this-day':
      return dayjs().isSame(day, 'date')
    case 'this-week':
      return dayjs(rangeWeek[6]).isSame(day, 'date')
    case 'this-month':
      return dayjs().endOf('month').isSame(day, 'day')
    case 'this-year':
      return dayjs().endOf('year').isSame(day, 'day')

    default:
      return false
  }
}
