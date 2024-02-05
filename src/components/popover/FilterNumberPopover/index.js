import { Popover } from '@/components/ui'
import FilterNumberPopoverContent from './PopoverContent'

const FilterNumberPopover = ({ children, open, onOpenChange, content }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      rootClassName="w-[220px]"
      content={<FilterNumberPopoverContent content={content} />}
    >
      {children}
    </Popover>
  )
}

export default FilterNumberPopover
