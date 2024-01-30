import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { DATE_RANGE_TYPE } from '@/constants'

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

export const getActiveByRange = (day, count, dateRange, timeUnit) => {
  const start = dayjs()
  let end
  switch (dateRange) {
    case DATE_RANGE_TYPE.THIS:
      return dayjs().isSame(day, timeUnit)

    case DATE_RANGE_TYPE.PAST:
      end = dayjs().subtract(count, timeUnit)
      break

    case DATE_RANGE_TYPE.NEXT:
      end = dayjs().add(count, timeUnit)
      break

    default:
      return false
  }
  return dayjs(day).isBetween(start, end, 'day', '[]')
}

export const getFirstByRange = (day, time, dateRange, timeUnit) => {
  switch (dateRange) {
    case DATE_RANGE_TYPE.THIS:
      return dayjs().startOf(timeUnit).isSame(day, 'date')

    case DATE_RANGE_TYPE.PAST:
      return dayjs().subtract(time, timeUnit).isSame(day, 'date')

    case DATE_RANGE_TYPE.NEXT:
      return dayjs().isSame(day, 'date')

    default:
      return false
  }
}

export const getEndByRange = (day, time, dateRange, timeUnit) => {
  switch (dateRange) {
    case DATE_RANGE_TYPE.THIS:
      return dayjs().endOf(timeUnit).isSame(day, 'date')

    case DATE_RANGE_TYPE.PAST:
      return dayjs().isSame(day, 'date')

    case DATE_RANGE_TYPE.NEXT:
      return dayjs().add(time, timeUnit).isSame(day, 'date')

    default:
      return false
  }
}
