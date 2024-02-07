import { memo, useState } from 'react'
import { Popover } from '@/components/ui'

const PopoverContent = () => {
  return <div>this is popover content for date cell</div>
}

const DateCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [open, setOpen] = useState(false)

  const childNode = children

  return (
    <td {...restProps}>
      <Popover open={open} onOpenChange={setOpen} content={<PopoverContent />}>
        <div role="presentation" className="editable-cell-value-wrap px-2">
          {childNode}
        </div>
      </Popover>
    </td>
  )
}

export default memo(DateCell)
