import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isNumber from 'lodash/isNumber'
import maxBy from 'lodash/maxBy'
import minBy from 'lodash/minBy'
import { DATE_RANGE_TYPE, FORMAT_STRING } from '@/constants'

dayjs.extend(isSameOrBefore)
dayjs.extend(utc)
dayjs.extend(isBetween)
dayjs.extend(weekOfYear)

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

export const getDateRange = (dateRange, timeUnit, count) => {
  let start
  let end

  switch (dateRange) {
    case DATE_RANGE_TYPE.THIS:
      start = dayjs().startOf(timeUnit)
      end = dayjs().endOf(timeUnit)
      break

    case DATE_RANGE_TYPE.PAST:
      start = dayjs().subtract(count, timeUnit)
      end = dayjs()
      break

    case DATE_RANGE_TYPE.NEXT:
      start = dayjs()
      end = dayjs().add(count, timeUnit)
      break

    default:
      break
  }

  return {
    startDate: start,
    endDate: end,
  }
}
export const formatDate = (date, unit) => (date ? dayjs(date).format(unit) : '')

export const formatDateDash = (date) => formatDate(date, FORMAT_STRING.date_dash)

export const formatDatetimeSlash = (date) => formatDate(date, FORMAT_STRING.datetime_slash)

export const getAge = (birthday) => (birthday ? dayjs().diff(dayjs(birthday), 'y') : '')
// export const getAge = (birthday) => (birthday ? dayjs().year() - dayjs(birthday).year() : '') // App does not set age

export const getDiff = (date1, date2, unit = 'h') => Math.abs(dayjs(date1).diff(dayjs(date2), unit))

export const getSame = (date1, date2, unit = 'h') => dayjs(date1).isSame(dayjs(date2), unit)

export const getBetween = (date1, date2, date3) =>
  dayjs(date1).isSameOrAfter(dayjs(date2)) && dayjs(date1).isSameOrBefore(dayjs(date3))

export const getMinDate = (data, key) => {
  if (data.length === 0) return null

  const minDate = minBy(data, (item) => dayjs(item[key]))
  return dayjs(minDate[key]).format()
}

export const getMaxDate = (data, key) => {
  if (data.length === 0) return null

  const maxDate = maxBy(data, (item) => dayjs(item[key]))
  return dayjs(maxDate[key]).format()
}

export const getHourFromMinute = (minutes) => {
  if (typeof minutes !== 'number') return '-'

  const hours = Number(minutes) / 60
  const formattedHours = hours % 1 === 0 ? hours.toFixed(0) : hours.toFixed(1)

  return formattedHours
}

export const getDayOfMonth = (datetime, format = FORMAT_STRING.date_slash) => {
  const numOfDays = dayjs(datetime).daysInMonth()
  const result = []

  for (let index = 1; index <= numOfDays; index += 1) {
    result.push(dayjs(datetime).date(index).format(format))
  }

  return result
}

export const getDaysWithRange = (datetime, rangeDate, format = FORMAT_STRING.date_slash) => {
  const result = []
  const currentDate = dayjs(datetime)

  for (let i = 0; i < rangeDate; i += 1) {
    const date = currentDate.add(i, 'day')
    const dayOfWeek = date.day()
    const lastWeek = dayOfWeek === 6 || dayOfWeek === 0 // Kiểm tra ngày cuối tuần (thứ 7 và chủ nhật)

    result.push({
      id: i + 1,
      date: date.format(format),
      lastWeek,
    })
  }

  return result
}

export const getMergedStartDate = (_startTime, _startDate) => {
  const [time, unit] = _startTime?.split(' ') || []
  const startTime = isNumber(Number(time)) && unit && dayjs().subtract(time, unit).startOf('days')
  const startDate = _startDate && dayjs(_startDate).startOf('days')

  if (!startTime || !startDate) return startTime || startDate
  if (!(startTime && startDate)) return null

  return startTime.isAfter(startDate) ? startTime.toDate() : startDate.toDate()
}

export const getAgeRangeFilters = (minAge, maxAge) => {
  const currentYear = dayjs().year()
  const result = {}

  if (isNumber(minAge)) {
    result.min = dayjs()
      .year(currentYear - minAge)
      .endOf('year')
      .toDate()
  }

  if (isNumber(maxAge)) {
    result.max = dayjs()
      .year(currentYear - maxAge)
      .startOf('year')
      .toDate()
  }

  return result
}

export const formatPublishDate = (date) => (date ? dayjs(date).utc().second(0).format() : null)

export const getBirthdayByAge = (age) => dayjs().subtract(age, 'year')
