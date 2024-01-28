import { MiniCalendar } from '@/components/calendar'
import { Popover } from '@/components/ui'

const FilterDatePopoverContent = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <span className="text-xs font-medium text-[#7e7e7e]">Start date is relative to today</span>
      <span>This week</span>
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
