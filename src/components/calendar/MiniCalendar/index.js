'use client'

import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'
import times from 'lodash/times'
import { memo, useEffect, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'
import ButtonIcon from '@/components/ui/ButtonIcon'
import { cn } from '@/utils'

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

const MiniCalendarControl = ({ onPrevMonth, onNextMonth }) => {
  return (
    <div className="flex">
      <ButtonIcon
        type="text"
        size="small"
        onClick={onPrevMonth}
        icon={<ChevronLeftIcon className="size-4" />}
      />
      <ButtonIcon
        type="text"
        size="small"
        onClick={onNextMonth}
        icon={<ChevronRightIcon className="size-4" />}
      />
    </div>
  )
}

const CalendarDayItem = memo(
  ({ value, isActive, isCurrent, isThisMonth, isFuture, isFirst, isEnd, className }) => {
    return (
      <div
        className={cn(
          'w-9 border-[2px] border-transparent p-0.5 text-center text-sm leading-[28px] hover:border-blue',
          'cursor-pointer',
          isFuture && 'cursor-default font-normal text-gray-400 hover:border-transparent',
          isThisMonth && 'font-medium text-gray-700',
          isActive && 'cursor-pointer bg-[rgba(35,_131,_226,_0.15)] hover:border-blue',
          isFirst && 'rounded-l bg-blue text-white',
          isEnd && 'rounded-r bg-blue text-white',
          className
        )}
      >
        <p
          className={cn(
            'h-full w-full',
            isCurrent && !isFirst && !isEnd && 'rounded-full bg-red-500 text-white'
          )}
        >
          {dayjs(value).format('D')}
        </p>
      </div>
    )
  }
)

const getActiveByRange = (day, activeRange) => {
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

const rangeWeek = getWeekFromDate(dayjs())

const getFirstByRange = (day, activeRange) => {
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

const getEndByRange = (day, activeRange) => {
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

const CalendarDayList = ({ pivot, month, activeRange }) => {
  let start = pivot

  const renderItem = () => {
    const day = start.add(1, 'day')
    start = start.add(1, 'day')

    const isCurrent = dayjs().isSame(day, 'date')
    const isThisMonth = dayjs(month).isSame(day, 'month')
    const isFuture = day.diff(dayjs(), 'date') > 0

    return (
      <CalendarDayItem
        key={day}
        value={day}
        isFuture={isFuture}
        isCurrent={isCurrent}
        isThisMonth={isThisMonth}
        isActive={getActiveByRange(day, activeRange)}
        isFirst={getFirstByRange(day, activeRange)}
        isEnd={getEndByRange(day, activeRange)}
      />
    )
  }

  return <div className="grid grid-cols-7">{times(42, renderItem)}</div>
}

const MiniCalendarBody = ({ pivot, month, activeRange }) => {
  const DAY_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const renderItem = (day) => {
    return (
      <span
        className="w-8 text-center text-xs font-semibold leading-[32px] text-[#7e7e7e]"
        key={day}
      >
        {day}
      </span>
    )
  }

  return (
    <div>
      <div className="flex w-full justify-between">{DAY_OF_WEEK.map(renderItem)}</div>
      <CalendarDayList pivot={pivot} month={month} activeRange={activeRange} />
    </div>
  )
}

const MiniCalendar = ({ defaultActiveRange }) => {
  const [month, setMonth] = useState(dayjs())

  const onPrevMonth = () => {
    setMonth(() => month.subtract(1, 'month'))
  }

  const onNextMonth = () => {
    setMonth(() => month.add(1, 'month'))
  }

  const startDayOfMonth = dayjs(month).startOf('month').day()
  const startDateOfMonth = dayjs(month).startOf('month')

  const pivot = dayjs(startDateOfMonth).subtract(startDayOfMonth + 1, 'day')

  return (
    <div className="flex flex-col rounded-md bg-white">
      <div className="flex items-center justify-between px-2">
        <span className="text-sm font-semibold">{dayjs(month).format('MMM YYYY')}</span>
        <MiniCalendarControl onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />
      </div>

      <div className="flex-1">
        <MiniCalendarBody pivot={pivot} month={month} activeRange={defaultActiveRange} />
      </div>
    </div>
  )
}

export default MiniCalendar
