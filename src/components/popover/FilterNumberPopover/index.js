import { Popover } from '@/components/ui'
import FilterNumberPopoverContent from './PopoverContent'

const FilterNumberPopover = ({ children, open, onOpenChange, item }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      rootClassName="w-[220px]"
      content={<FilterNumberPopoverContent item={item} />}
    >
      {children}
    </Popover>
  )
}

export default FilterNumberPopover
