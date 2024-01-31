import { useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { EllipsisHorizontalIcon, MenuIcon, TrashIcon } from '@/components/icons'
import { Button, ButtonIcon, InputNumber, Popover } from '@/components/ui'
import Select from '@/components/ui/Select'
import { DATE_RANGE_OPTIONS, TIME_UNIT_OPTIONS } from '@/constants'
import { FilterDateProvider, useFilterDateContext, useFilterSortContext } from '@/contexts/customs'

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

  return (
    <div className="flex gap-x-1">
      <div className="flex-grow-0">
        <Select
          defaultValue={dateRange}
          options={DATE_RANGE_OPTIONS}
          handleChange={setDateRange}
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
          onChange={setCount}
        />
      ) : null}

      <div className="w-full flex-grow-[2]">
        <Select
          defaultValue={timeUnit}
          options={TIME_UNIT_OPTIONS}
          handleChange={setTimeUnit}
          style={{ width: '100%' }}
          dropdownStyle={dropdownStyle}
        />
      </div>
    </div>
  )
}

const FilterDatePopoverContent = () => {
  const [open, setOpen] = useState(false)

  const { dateRange, timeUnit, count } = useFilterDateContext()

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
      <DateRangeControl />
      <MiniCalendar dateRange={dateRange} timeUnit={timeUnit} count={count} />
      <p className="text-center text-xs text-[#7e7e7e]">Filter will update with the current date</p>
    </div>
  )
}

const FilterDatePopover = ({ children, open, onOpenChange }) => {
  return (
    <FilterDateProvider>
      <Popover
        rootClassName="w-[256px]"
        open={open}
        onOpenChange={onOpenChange}
        content={<FilterDatePopoverContent />}
      >
        {children}
      </Popover>
    </FilterDateProvider>
  )
}

export default FilterDatePopover
