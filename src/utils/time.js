import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(isSameOrBefore)
dayjs.extend(utc)
dayjs.extend(isBetween)
dayjs.extend(weekOfYear)

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

export const getActiveByRange = (day, time, activeRange) => {
  const start = dayjs()
  let end

  switch (activeRange) {
    case 'this-day':
      return dayjs().isSame(day, 'date')
    case 'this-week':
      return dayjs().isSame(day, 'week')
    case 'this-month':
      return dayjs().isSame(day, 'month')
    case 'this-year':
      return dayjs().isSame(day, 'year')
    case 'past-day':
      end = dayjs().subtract(time, 'day')
      break
    case 'past-week':
      end = dayjs().subtract(time, 'week')
      break
    case 'past-month':
      end = dayjs().subtract(time, 'month')
      break
    case 'past-year':
      end = dayjs().subtract(time, 'year')
      break
    case 'next-day':
      end = dayjs().add(time, 'day')
      break
    case 'next-week':
      end = dayjs().add(time, 'week')
      break
    case 'next-month':
      end = dayjs().add(time, 'month')
      break
    case 'next-year':
      end = dayjs().add(time, 'year')
      break
    default:
      return false
  }

  return dayjs(day).isBetween(start, end, 'day', '[]')
}

export const getFirstByRange = (day, time, activeRange) => {
  switch (activeRange) {
    case 'this-day':
      return dayjs().isSame(day, 'date')
    case 'this-week':
      return dayjs(rangeWeek[0]).isSame(day, 'date')
    case 'this-month':
      return dayjs().startOf('month').isSame(day, 'day')
    case 'this-year':
      return dayjs().startOf('year').isSame(day, 'day')
    case 'past-day': {
      const date = dayjs().subtract(time, 'day')
      return date.isSame(day, 'date')
    }
    case 'past-week': {
      const date = dayjs().subtract(time * 7, 'day')
      return date.isSame(day, 'date')
    }
    case 'past-month': {
      const date = dayjs().subtract(time, 'month')
      return date.isSame(day, 'day')
    }
    case 'past-year': {
      const date = dayjs().subtract(time, 'year')
      return date.isSame(day, 'day')
    }
    case 'next-day':
    case 'next-week':
    case 'next-month':
    case 'next-year':
      return dayjs().isSame(day, 'day')

    default:
      return false
  }
}

export const getEndByRange = (day, time, activeRange) => {
  switch (activeRange) {
    case 'this-day':
      return dayjs().isSame(day, 'date')
    case 'this-week':
      return dayjs(rangeWeek[6]).isSame(day, 'date')
    case 'this-month':
      return dayjs().endOf('month').isSame(day, 'day')
    case 'this-year':
      return dayjs().endOf('year').isSame(day, 'day')

    case 'past-day':
    case 'past-week':
    case 'past-month':
    case 'past-year':
      return dayjs().isSame(day, 'day')

    case 'next-day': {
      const date = dayjs().add(time, 'day')
      return date.isSame(day, 'date')
    }
    case 'next-week': {
      const date = dayjs().add(time * 7, 'day')
      return date.isSame(day, 'date')
    }
    case 'next-month': {
      const date = dayjs().add(time, 'month')
      return date.isSame(day, 'day')
    }
    case 'next-year': {
      const date = dayjs().add(time, 'year')
      return date.isSame(day, 'day')
    }
    default:
      return false
  }
}
