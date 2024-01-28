import { Popover } from '@/components/ui'

const FilterDatePopoverContent = () => {
  return <div>123</div>
}

const FilterDatePopover = ({ children, open, onOpenChange }) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange} content={<FilterDatePopoverContent />}>
      {children}
    </Popover>
  )
}

export default FilterDatePopover
