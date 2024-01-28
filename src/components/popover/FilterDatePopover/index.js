import { useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { EllipsisHorizontalIcon } from '@/components/icons'
import { ButtonIcon, Popover } from '@/components/ui'
import Select from '@/components/ui/Select'
import { DATE_RANGE_OPTIONS, TIME_UNIT_OPTIONS } from '@/constants'

const FilterDatePopoverContent = () => {
  const [dateRange, setDateRange] = useState(DATE_RANGE_OPTIONS[1])
  const [timeUnit, setTimeUnit] = useState(TIME_UNIT_OPTIONS[2])

  const handleSetDateRange = (value) => {
    setDateRange(value)
  }

  const handleSetTimeUnit = (value) => {
    setTimeUnit(value)
  }
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex-between">
        <span className="text-xs font-medium text-[#7e7e7e]">Start date is relative to today</span>
        <ButtonIcon icon={<EllipsisHorizontalIcon className="size-5" />} />
      </div>
      <div className="grid grid-cols-3 gap-x-1">
        <Select
          defaultValue={dateRange}
          options={DATE_RANGE_OPTIONS}
          handleChange={handleSetDateRange}
          dropdownStyle={{
            width: 180,
            fontSize: '14px',
          }}
        />
        <Select
          defaultValue={timeUnit}
          options={TIME_UNIT_OPTIONS}
          handleChange={handleSetTimeUnit}
          className="col-span-2"
          dropdownStyle={{
            width: 180,
            fontSize: '14px',
          }}
        />
      </div>
      <MiniCalendar />
      <p className="text-center text-xs text-[#7e7e7e]">Filter will update with the current date</p>
    </div>
  )
}

const FilterDatePopover = ({ children, open, onOpenChange }) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange} content={<FilterDatePopoverContent />}>
      {children}
    </Popover>
  )
}

export default FilterDatePopover
