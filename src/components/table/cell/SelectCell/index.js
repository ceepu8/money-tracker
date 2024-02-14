import { memo, useState } from 'react'
import { Popover } from '@/components/ui'
import SearchSelectMenu from './SearchSelectMenu'

const SelectCell = ({ children, record }) => {
  const { category } = record || {}

  const [open, setOpen] = useState(false)

  return (
    <td height="32" id="select_cell" className="ant-table-cell">
      <Popover
        open={open}
        onOpenChange={setOpen}
        className="truncate"
        placement="bottomLeft"
        rootClassName="w-[300px]"
        content={<SearchSelectMenu item={category} />}
      >
        <div className="flex-between h-[41px] w-full truncate px-2 text-sm">{children}</div>
      </Popover>
    </td>
  )
}

export default memo(SelectCell)
