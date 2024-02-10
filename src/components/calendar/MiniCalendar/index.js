'use client'

import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'
import times from 'lodash/times'
import { memo, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'
import ButtonIcon from '@/components/ui/ButtonIcon'
import { FORMAT_STRING } from '@/constants'
import { cn, formatDate } from '@/utils'

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
  ({
    value,
    isCurrent,
    isThisMonth,
    isFuture,
    isActive,
    isFirst,
    isEnd,
    isBetween,
    onClick,
    className,
  }) => {
    return (
      <div
        role="presentation"
        className={cn(
          'w-full border-[2px] border-transparent p-0.5 text-center text-sm leading-[24px]',
          'cursor-pointer hover:rounded hover:border-blue hover:bg-[rgba(35,_131,_226,_0.15)]',

          isFuture && 'cursor-default hover:border-transparent hover:bg-transparent',

          isBetween &&
            'cursor-pointer bg-[rgba(35,_131,_226,_0.15)] hover:border-blue hover:bg-[rgba(35,_131,_226,_0.15)]',

          isThisMonth && 'text-gray-700',
          (isFuture || !isThisMonth) && 'text-gray-400',
          isFuture && isBetween && isThisMonth && 'text-gray-700',

          isFirst && 'rounded-l bg-blue text-white hover:rounded-r-none hover:bg-blue',
          isEnd && 'rounded-r bg-blue text-white hover:rounded-l-none hover:bg-blue',

          isActive && 'rounded bg-blue text-white hover:bg-blue',

          className
        )}
        onClick={() => {
          onClick(value)
        }}
      >
        <p
          className={cn(
            'size-full',
            isCurrent && !isFirst && !isEnd && !isActive && 'rounded-full bg-red-500 text-white'
          )}
        >
          {dayjs(value).format('D')}
        </p>
      </div>
    )
  }
)

const CalendarDayList = ({ date, onChangeDate, endDate, startDate, month }) => {
  const pivot = month.startOf('week')

  const handleChangeDate = (value) => {
    onChangeDate?.(value)
  }

  const renderItem = (index) => {
    const day = pivot.add(index, 'day')

    const isCurrent = dayjs().isSame(day, 'date')
    const isThisMonth = month.isSame(day, 'month')
    const isFuture = day.diff(dayjs(), 'date') > 0

    const isBetween = startDate && endDate && dayjs(day).isBetween(startDate, endDate, 'day', '[]')

    const isFirst = startDate && dayjs(day).isSame(startDate, 'date')
    const isEnd = endDate && dayjs(day).isSame(endDate, 'date')
    const isActive = date && dayjs(day).isSame(date, 'date')

    return (
      <CalendarDayItem
        key={day}
        value={day}
        isEnd={isEnd}
        isFirst={isFirst}
        isActive={isActive}
        isBetween={isBetween}
        isFuture={isFuture}
        isCurrent={isCurrent}
        isThisMonth={isThisMonth}
        onClick={handleChangeDate}
      />
    )
  }

  return <div className="grid grid-cols-7 gap-x-0">{times(42, renderItem)}</div>
}

const MiniCalendarBody = ({ date, onChangeDate, startDate, endDate, month }) => {
  const renderItem = (index) => {
    return (
      <span
        key={index}
        className="w-8 text-center text-xs font-semibold leading-[32px] text-[#7e7e7e]"
      >
        {formatDate(dayjs().day(index), FORMAT_STRING.dd)}
      </span>
    )
  }

  return (
    <div>
      <div className="flex w-full justify-between">{times(7, renderItem)}</div>
      <CalendarDayList
        date={date}
        onChangeDate={onChangeDate}
        month={month}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  )
}

const MiniCalendar = ({ date, onChangeDate, startDate, endDate }) => {
  const [month, setMonth] = useState(
    date?.startOf('month') || startDate?.startOf('month') || dayjs().startOf('month')
  )

  const onPrevMonth = () => {
    setMonth(() => month.subtract(1, 'month'))
  }

  const onNextMonth = () => {
    setMonth(() => month.add(1, 'month'))
  }

  return (
    <div className="mx-auto flex w-full max-w-[224px] flex-col rounded-md bg-white">
      <div className="flex items-center justify-between px-2">
        <span className="text-sm font-semibold">{dayjs(month).format('MMM YYYY')}</span>
        <MiniCalendarControl onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />
      </div>

      <div className="flex-1">
        <MiniCalendarBody
          date={date}
          month={month}
          endDate={endDate}
          startDate={startDate}
          onChangeDate={onChangeDate}
        />
      </div>
    </div>
  )
}

export default MiniCalendar
