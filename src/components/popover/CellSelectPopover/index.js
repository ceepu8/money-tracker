import { memo, useState } from 'react'
import { Popover } from '@/components/ui'
import SearchSelectMenu from './SearchSelectMenu'

const CellSelectPopover = ({ children, item }) => {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className="truncate"
      placement="bottomLeft"
      rootClassName="w-[300px]"
      content={<SearchSelectMenu item={item} />}
    >
      <div className="flex-between h-[41px] w-full truncate px-2 text-sm">{children}</div>
    </Popover>
  )
}

export default memo(CellSelectPopover)
