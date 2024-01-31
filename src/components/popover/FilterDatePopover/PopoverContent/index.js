import { useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { EllipsisHorizontalIcon, MenuIcon, TrashIcon } from '@/components/icons'
import { Button, ButtonIcon, InputNumber, Popover } from '@/components/ui'
import Select from '@/components/ui/Select'
import {
  DATE_RANGE_OPTIONS,
  DATE_RANGE_TYPE,
  PLURAL_TIME_UNIT_OPTIONS,
  TIME_UNIT_OPTIONS,
} from '@/constants'
import { useFilterDateContext, useFilterSortContext } from '@/contexts/customs'

const ExtraSettingPopoverContent = () => {
  const { handleDeleteFilterItem } = useFilterSortContext()

  return (
    <div className="-m-2 flex flex-col">
      <Button
        block
        type="text"
        size="medium"
        className="!justify-start"
        icon={<TrashIcon className="size-4" />}
        onClick={() => handleDeleteFilterItem('date')}
      >
        Delete Filter
      </Button>
      <Button
        block
        type="text"
        size="medium"
        className="!justify-start"
        icon={<MenuIcon className="size-4" />}
      >
        Add to advanced filter
      </Button>
    </div>
  )
}

const DateRangeControl = () => {
  const { dateRange, timeUnit, count, setDateRange, setTimeUnit, setCount } = useFilterDateContext()

  const dropdownStyle = {
    width: 180,
    fontSize: '14px',
  }

  const isPluralTimeUnit = count > 1 && dateRange !== DATE_RANGE_TYPE.THIS

  return (
    <div className="flex gap-x-1">
      <div className="flex-grow-0">
        <Select
          value={dateRange}
          options={DATE_RANGE_OPTIONS}
          handleChange={setDateRange}
          style={{ width: '100%', minWidth: '74px' }}
          dropdownStyle={dropdownStyle}
        />
      </div>

      {dateRange === DATE_RANGE_TYPE.PAST || dateRange === DATE_RANGE_TYPE.NEXT ? (
        <InputNumber
          min={0}
          max={12}
          size="small"
          placeholder=""
          value={count}
          onChange={setCount}
        />
      ) : null}

      <div className="w-full flex-grow-[2]">
        <Select
          value={timeUnit}
          options={isPluralTimeUnit ? PLURAL_TIME_UNIT_OPTIONS : TIME_UNIT_OPTIONS}
          handleChange={setTimeUnit}
          style={{ width: '100%', minWidth: '92px' }}
          dropdownStyle={dropdownStyle}
        />
      </div>
    </div>
  )
}

const PopoverContentHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex-between">
      <span className="text-xs font-medium text-[#7e7e7e]">Start date is relative to today</span>
      <Popover
        open={open}
        onOpenChange={setOpen}
        content={<ExtraSettingPopoverContent />}
        placement="rightTop"
        rootClassName="w-[240px]"
      >
        <ButtonIcon icon={<EllipsisHorizontalIcon className="size-5" />} />
      </Popover>
    </div>
  )
}

const PopoverContentFooter = () => {
  return (
    <p className="text-center text-xs text-[#7e7e7e]">Filter will update with the current date</p>
  )
}

const PopoverContent = () => {
  const { dateRange, timeUnit, count } = useFilterDateContext()

  return (
    <div className="flex flex-col gap-y-2">
      <PopoverContentHeader />
      <DateRangeControl />
      <MiniCalendar dateRange={dateRange} timeUnit={timeUnit} count={count} />
      <PopoverContentFooter />
    </div>
  )
}

export default PopoverContent
