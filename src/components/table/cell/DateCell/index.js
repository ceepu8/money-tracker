import { memo } from 'react'
import { CellDatePopover } from '@/components/popover'

const DateCell = ({ record, children }) => {
  const { date } = record || {}

  return (
    <td height="32" className="ant-table-cell">
      <CellDatePopover item={date}>{children}</CellDatePopover>
    </td>
  )
}

export default memo(DateCell)
