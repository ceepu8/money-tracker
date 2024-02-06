import { Form } from 'antd'
import dayjs from 'dayjs'
import { memo, useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { ClockIcon } from '@/components/icons'
import { Button, Divider, Input, Popover } from '@/components/ui'
import { DATE_FORMAT_OPTIONS } from '@/constants'

const PopoverContent = memo(() => {
  const [value, setValue] = useState(dayjs())

  return (
    <div className="flex flex-col gap-y-1">
      <Form.Item style={{ marginBottom: 0 }}>
        <Input value={value.format('DD/MM/YYYY')} size="small" placeholder="" />
      </Form.Item>
      <MiniCalendar />
      <Divider className="m-0" />
      <Button
        size="small"
        type="text"
        className="!justify-start"
        icon={<ClockIcon className="size-3.5" />}
      >
        Remind
      </Button>
      <Divider className="m-0" />
      <Button size="small" type="text" className="!justify-start">
        End date
      </Button>
      <Button size="small" type="text" className="!justify-start">
        Include time
      </Button>
      <Divider className="m-0" />
      <Button
        size="small"
        type="text"
        className="!justify-start"
        icon={<ClockIcon className="size-3.5" />}
      >
        Date format & timezone
      </Button>
      <Divider className="m-0" />
      <Button size="small" type="text" className="!justify-start">
        Clear
      </Button>
    </div>
  )
})

const DateCell = ({ children }) => {
  const [open, setOpen] = useState(false)

  const childNode = children

  return (
    <td className="ant-table-cell">
      <Popover
        open={open}
        placement="bottomLeft"
        onOpenChange={setOpen}
        content={<PopoverContent />}
      >
        <span className="truncate px-2 text-sm">{children}</span>
      </Popover>
    </td>
  )
}

export default memo(DateCell)
