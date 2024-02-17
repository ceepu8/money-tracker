import { memo, useState } from 'react'
import { Popover } from '@/components/ui'
import DateCellSetting from './DateCellSetting'

const DateCell = ({ record, children }) => {
  const { date } = record || {}

  const [open, setOpen] = useState(false)

  return (
    <td height="32" className="ant-table-cell">
      <Popover
        open={open}
        rootClassName="w-[270px]"
        placement="bottomLeft"
        onOpenChange={setOpen}
        content={<DateCellSetting item={date} />}
      >
        <div className="truncate px-2 text-sm leading-[41px]">{children}</div>
      </Popover>
    </td>
  )
}

export default memo(DateCell)
