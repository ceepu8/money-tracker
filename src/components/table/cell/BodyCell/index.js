import { memo } from 'react'
import { PROPERTY_TYPE } from '@/constants'
import DateCell from '../DateCell'
import SelectCell from '../SelectCell'
import TextCell from '../TextCell'

const BodyCell = ({ type, children, editable, dataIndex, record }) => {
  const props = {
    record,
    editable,
    dataIndex,
  }

  if (type === PROPERTY_TYPE.DATE) {
    return <DateCell {...props}>{children}</DateCell>
  }

  if (type === PROPERTY_TYPE.SELECT) {
    return <SelectCell {...props}>{children}</SelectCell>
  }

  return <TextCell {...props}>{children}</TextCell>
}

export default memo(BodyCell)
