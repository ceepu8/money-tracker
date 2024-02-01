import { Popover } from '@/components/ui'
import { FilterDateProvider } from '@/contexts/customs'
import FilterDatePopoverContent from './PopoverContent'

const FilterDatePopover = ({ children, open, onOpenChange }) => {
  return (
    <FilterDateProvider>
      <Popover
        open={open}
        onOpenChange={onOpenChange}
        rootClassName="w-[256px]"
        content={<FilterDatePopoverContent />}
      >
        {children}
      </Popover>
    </FilterDateProvider>
  )
}

export default FilterDatePopover
