'use client'

import dayjs from 'dayjs'
import times from 'lodash/times'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'
import ButtonIcon from '@/components/ui/ButtonIcon'
import { cn } from '@/utils'

const CalendarDayItem = ({ value, isCurrent, isThisMonth, isFuture, className }) => {
  return (
    <span
      className={cn(
        'w-8 border-[2px] border-transparent text-center leading-[28px]',
        'cursor-pointer',
        isThisMonth ? 'font-medium text-gray-700' : 'text-gray-400',
        isCurrent
          ? 'rounded-full bg-red-500 text-white hover:bg-red-500/80'
          : 'rounded bg-white hover:border-blue',
        isFuture && 'cursor-default font-normal text-gray-400 hover:border-transparent',
        className
      )}
    >
      {dayjs(value).format('D')}
    </span>
  )
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

const CalendarDayList = ({ pivot, month }) => {
  let start = pivot

  const renderItem = (index) => {
    const day = start.add(1, 'day')
    start = start.add(1, 'day')

    const isCurrent = dayjs().isSame(day, 'date')
    const isThisMonth = dayjs(month).isSame(day, 'month')
    const isFuture = day.diff(dayjs(), 'date') > 0

    return (
      <CalendarDayItem
        key={index}
        value={day}
        isCurrent={isCurrent}
        isThisMonth={isThisMonth}
        isFuture={isFuture}
      />
    )
  }

  return <div className="grid grid-cols-7 gap-x-1">{times(42, renderItem)}</div>
}

const MiniCalendarBody = ({ pivot, month }) => {
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
      <CalendarDayList pivot={pivot} month={month} />
    </div>
  )
}

const MiniCalendar = () => {
  // day/ week/ month/ year
  // const [active, setActive] = useState('day')

  const currentMonth = dayjs()
  const [month, setMonth] = useState(currentMonth)

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
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{dayjs(month).format('MMM YYYY')}</span>
        <MiniCalendarControl onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />
      </div>

      <div className="flex-1">
        <MiniCalendarBody pivot={pivot} month={month} />
      </div>
    </div>
  )
}

export default MiniCalendar
