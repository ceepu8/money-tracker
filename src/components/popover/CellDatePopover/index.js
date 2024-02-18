import { memo, useState } from 'react'
import { Popover } from '@/components/ui'
import DateSettingForm from './DateSettingForm'

const CellDatePopover = ({ item, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      rootClassName="w-[270px]"
      placement="bottomLeft"
      onOpenChange={setOpen}
      content={<DateSettingForm item={item} />}
    >
      <div className="truncate px-2 text-sm leading-[41px]">{children}</div>
    </Popover>
  )
}

export default memo(CellDatePopover)
