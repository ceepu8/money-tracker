import { memo } from 'react'
import DateCell from '../DateCell'
import SelectCell from '../SelectCell'
import TextCell from '../TextCell'

const BodyCell = (props) => {
  const { dataIndex, type, record } = props

  if (type === 'date') {
    return <DateCell {...props} />
  }

  if (type === 'select') {
    return <SelectCell {...props} />
  }

  return <TextCell {...props} />
}

export default memo(BodyCell)
