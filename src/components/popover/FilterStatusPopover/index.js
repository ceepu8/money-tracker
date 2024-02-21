import { Popover } from '@/components/ui'
import FilterStatusPopoverContent from './PopoverContent'

const FilterStatusPopover = ({ children, open, onOpenChange, content }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      rootClassName="w-[260px]"
      content={<FilterStatusPopoverContent content={content} />}
    >
      {children}
    </Popover>
  )
}

export default FilterStatusPopover
