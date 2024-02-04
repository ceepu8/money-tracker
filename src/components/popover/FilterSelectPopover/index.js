import { Popover } from '@/components/ui'
import FilterSelectPopoverContent from './PopoverContent'

const FilterSelectPopover = ({ children, open, onOpenChange, item }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      rootClassName="w-[260px]"
      content={<FilterSelectPopoverContent item={item} />}
    >
      {children}
    </Popover>
  )
}

export default FilterSelectPopover
