import { memo, useState } from 'react'
import { Popover } from '@/components/ui'

const PopoverContent = () => {
  return <div>this is popover content for date select</div>
}

const SelectCell = ({ children, item, record }) => {
  const [open, setOpen] = useState(false)

  return (
    <td height="32" id="select_cell" className="ant-table-cell">
      <Popover open={open} onOpenChange={setOpen} className="truncate" content={<PopoverContent />}>
        <div className="flex-between h-[41px] w-full truncate px-2 text-sm">{children}</div>
      </Popover>
    </td>
  )
}

export default memo(SelectCell)
