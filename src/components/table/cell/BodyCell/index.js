import { memo } from 'react'
import { PROPERTY_TYPE } from '@/constants'
import DateCell from '../DateCell'
import SelectCell from '../SelectCell'
import TextCell from '../TextCell'

export const PROPERTY_TYPE_CELL = {
  [PROPERTY_TYPE.TEXT]: TextCell,
  [PROPERTY_TYPE.NUMBER]: TextCell,
  [PROPERTY_TYPE.SELECT]: SelectCell,
  // [PROPERTY_TYPE.MULTI_SELECT]: SelectCell,
  // [PROPERTY_TYPE.STATUS]: SelectCell,
  [PROPERTY_TYPE.DATE]: DateCell,
  // [PROPERTY_TYPE.FILES_AND_MEDIA]: DateCell,
  // [PROPERTY_TYPE.URL]: DateCell,
  // [PROPERTY_TYPE.CHECKBOX]: DateCell,
  // [PROPERTY_TYPE.EMAIL]: DateCell,
}

const BodyCell = (props) => {
  const { children, type } = props || {}

  const Cell = PROPERTY_TYPE_CELL[type]

  if (!Cell) {
    return (
      <td height="32" className="ant-table-cell !px-2">
        <span className="truncate text-sm"> {children}</span>
      </td>
    )
  }

  return <Cell {...props}>{children}</Cell>
}

export default memo(BodyCell)
