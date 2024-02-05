import { Popover } from '@/components/ui'
import FilterSelectPopoverContent from './PopoverContent'

const FilterSelectPopover = ({ children, open, onOpenChange, content }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      rootClassName="w-[260px]"
      content={<FilterSelectPopoverContent content={content} />}
    >
      {children}
    </Popover>
  )
}

export default FilterSelectPopover
