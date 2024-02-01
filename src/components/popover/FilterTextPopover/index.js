import { Popover } from '@/components/ui'
import FilterTextPopoverContent from './PopoverContent'

const FilterTextPopover = ({ children, open, onOpenChange, item }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      rootClassName="w-[220px]"
      content={<FilterTextPopoverContent item={item} />}
    >
      {children}
    </Popover>
  )
}

export default FilterTextPopover
