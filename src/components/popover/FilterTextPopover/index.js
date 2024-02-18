import { Popover } from '@/components/ui'
import FilterTextPopoverContent from './PopoverContent'

const FilterTextPopover = ({ children, open, onOpenChange, content }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      rootClassName="w-[220px]"
      content={<FilterTextPopoverContent content={content} />}
    >
      {children}
    </Popover>
  )
}

export default FilterTextPopover
