import { Form } from 'antd'
import dayjs from 'dayjs'
import { memo, useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { ClockIcon } from '@/components/icons'
import { Button, Divider, Input, Popover } from '@/components/ui'
import { DATE_FORMAT_OPTIONS } from '@/constants'

const PopoverContent = memo(({ record }) => {
  const { date } = record || {}

  const [value, setValue] = useState(dayjs(date))

  return (
    <div className="flex flex-col gap-y-1">
      <Form.Item style={{ marginBottom: 0 }}>
        <Input value={value.format('DD/MM/YYYY')} size="small" placeholder="" />
      </Form.Item>
      <MiniCalendar startDate={dayjs(date)} endDate={dayjs(date)} />
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

const DateCell = ({ record, children }) => {
  const [open, setOpen] = useState(false)

  const childNode = children

  return (
    <td height="32" className="ant-table-cell">
      <Popover
        open={open}
        placement="bottomLeft"
        onOpenChange={setOpen}
        content={<PopoverContent record={record} />}
      >
        <div className="truncate px-2 text-sm leading-[41px]">{children}</div>
      </Popover>
    </td>
  )
}

export default memo(DateCell)
