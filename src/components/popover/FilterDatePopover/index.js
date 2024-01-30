import { useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { EllipsisHorizontalIcon, MenuIcon, TrashIcon } from '@/components/icons'
import { Button, ButtonIcon, InputNumber, Popover } from '@/components/ui'
import Select from '@/components/ui/Select'
import { DATE_RANGE_OPTIONS, TIME_UNIT_OPTIONS } from '@/constants'
import { useFilterSortContext } from '@/contexts/customs'

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

const DateRangeControl = ({
  dateRange,
  handleSetDateRange,
  count,
  handleSetCount,
  timeUnit,
  handleSetTimeUnit,
}) => {
  const dropdownStyle = {
    width: 180,
    fontSize: '14px',
  }

  return (
    <div className="flex gap-x-1">
      <div className="flex-grow-0">
        <Select
          defaultValue={dateRange}
          options={DATE_RANGE_OPTIONS}
          handleChange={handleSetDateRange}
          style={{ minWidth: '74px' }}
          dropdownStyle={dropdownStyle}
        />
      </div>

      {dateRange === 'past' || dateRange === 'next' ? (
        <InputNumber
          min={0}
          max={12}
          size="small"
          placeholder=""
          defaultValue={count}
          onChange={handleSetCount}
        />
      ) : null}

      <div className="w-full flex-grow-[2]">
        <Select
          defaultValue={timeUnit}
          options={TIME_UNIT_OPTIONS}
          handleChange={handleSetTimeUnit}
          style={{ width: '100%' }}
          dropdownStyle={dropdownStyle}
        />
      </div>
    </div>
  )
}

const FilterDatePopoverContent = () => {
  const [open, setOpen] = useState(false)

  const [dateRange, setDateRange] = useState('this')
  const [timeUnit, setTimeUnit] = useState('month')
  const [count, setCount] = useState(1)

  const handleSetDateRange = (value) => {
    setDateRange(value)
  }

  const handleSetTimeUnit = (value) => {
    setTimeUnit(value)
  }

  const handleSetCount = (value) => {
    setCount(value)
  }

  return (
    <div className="flex flex-col gap-y-2">
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
      <DateRangeControl
        dateRange={dateRange}
        timeUnit={timeUnit}
        count={count}
        handleSetDateRange={handleSetDateRange}
        handleSetTimeUnit={handleSetTimeUnit}
        handleSetCount={handleSetCount}
      />
      <MiniCalendar dateRange={dateRange} timeUnit={timeUnit} count={count} />
      <p className="text-center text-xs text-[#7e7e7e]">Filter will update with the current date</p>
    </div>
  )
}

const FilterDatePopover = ({ children, open, onOpenChange }) => {
  return (
    <Popover
      rootClassName="w-[256px]"
      open={open}
      onOpenChange={onOpenChange}
      content={<FilterDatePopoverContent />}
    >
      {children}
    </Popover>
  )
}

export default FilterDatePopover
