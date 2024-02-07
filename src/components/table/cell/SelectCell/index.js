import { memo, useState } from 'react'
import { Popover } from '@/components/ui'

const PopoverContent = () => {
  return <div>this is popover content for date select</div>
}

const SelectCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [open, setOpen] = useState(false)

  const childNode = children

  return (
    <td id="select_cell" {...restProps}>
      <Popover open={open} onOpenChange={setOpen} className="truncate" content={<PopoverContent />}>
        <div role="presentation" className="editable-cell-value-wrap truncate px-2">
          {childNode}
        </div>
      </Popover>
    </td>
  )
}

export default memo(SelectCell)
