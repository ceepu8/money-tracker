import { memo, useState } from 'react'
import { Popover } from '@/components/ui'

const PopoverContent = () => {
  return <div>this is popover content for date select</div>
}

const SelectCell = ({ children, item }) => {
  const [open, setOpen] = useState(false)

  return (
    <td id="select_cell" className="ant-table-cell">
      <Popover open={open} onOpenChange={setOpen} className="truncate" content={<PopoverContent />}>
        <span className="truncate px-2 text-sm">{children}</span>
      </Popover>
    </td>
  )
}

export default memo(SelectCell)
