import { useSortable } from '@dnd-kit/sortable'
import { useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { EllipsisHorizontalIcon, MenuIcon, TrashIcon } from '@/components/icons'
import { Button, ButtonIcon, Popover } from '@/components/ui'
import Select from '@/components/ui/Select'
import { DATE_RANGE_OPTIONS, TIME_UNIT_OPTIONS } from '@/constants'
import { useFilterSortContext } from '@/contexts/customs'

const SettingPopover = () => {
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

const FilterDatePopoverContent = () => {
  const [open, setOpen] = useState(false)
  const [dateRange, setDateRange] = useState('this')
  const [timeUnit, setTimeUnit] = useState('month')

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
        <Popover
          open={open}
          onOpenChange={setOpen}
          content={<SettingPopover />}
          placement="rightTop"
          rootClassName="w-[240px]"
        >
          <ButtonIcon icon={<EllipsisHorizontalIcon className="size-5" />} />
        </Popover>
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
      <MiniCalendar defaultActiveRange={`${dateRange}-${timeUnit}`} />
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
