'use client'

import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'
import times from 'lodash/times'
import { memo, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'
import ButtonIcon from '@/components/ui/ButtonIcon'
import {
  cn,
  getActiveByRange,
  getEndByRange,
  getFirstByRange,
  getPastActiveRange,
  getWeekFromDate,
} from '@/utils'

dayjs.extend(isSameOrBefore)
dayjs.extend(utc)

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
          'w-full border-[2px] border-transparent p-0.5 text-center text-sm leading-[24px]',
          'cursor-pointer hover:rounded hover:border-blue hover:bg-[rgba(35,_131,_226,_0.15)]',
          isFuture && 'cursor-default hover:border-transparent hover:bg-transparent',
          isThisMonth && !isFuture ? 'text-gray-700' : 'text-gray-400',
          isActive &&
            'cursor-pointer bg-[rgba(35,_131,_226,_0.15)] hover:border-blue hover:bg-[rgba(35,_131,_226,_0.15)]',
          isActive && isFuture && 'text-gray-700',
          isActive && isFuture && !isThisMonth && 'text-gray-400',
          isFirst && 'rounded-l bg-blue text-white hover:rounded-r-none hover:bg-blue',
          isEnd && 'rounded-r bg-blue text-white hover:rounded-l-none hover:bg-blue',
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

const CalendarDayList = ({ pivot, month, activeRange, count }) => {
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
        isEnd={getEndByRange(day, count, activeRange)}
        isFirst={getFirstByRange(day, count, activeRange)}
        isActive={getActiveByRange(day, count, activeRange)}
      />
    )
  }

  return <div className="grid grid-cols-7 gap-x-0">{times(42, renderItem)}</div>
}

const MiniCalendarBody = ({ pivot, month, activeRange, count }) => {
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
      <CalendarDayList pivot={pivot} month={month} activeRange={activeRange} count={count} />
    </div>
  )
}

const MiniCalendar = ({ defaultActiveRange, count }) => {
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
        <MiniCalendarBody
          pivot={pivot}
          month={month}
          activeRange={defaultActiveRange}
          count={count}
        />
      </div>
    </div>
  )
}

export default MiniCalendar
