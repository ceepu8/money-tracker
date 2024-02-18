import { memo } from 'react'
import { CellSelectPopover } from '@/components/popover'

const SelectCell = ({ children, record }) => {
  const { category } = record || {}

  return (
    <td height="32" id="select_cell" className="ant-table-cell">
      <CellSelectPopover item={category}>{children}</CellSelectPopover>
    </td>
  )
}

export default memo(SelectCell)
