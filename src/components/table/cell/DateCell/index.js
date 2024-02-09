import { Pressable } from '@react-aria/interactions'
import { Form } from 'antd'
import dayjs from 'dayjs'
import { memo, useState } from 'react'
import { MiniCalendar } from '@/components/calendar'
import { ClockIcon } from '@/components/icons'
import { Button, Divider, Input, Popover, Switch } from '@/components/ui'
import RemindSettingSelect from './RemindSettingSelect'

const BaseSwitch = ({ id, name, children, value, onChange }) => {
  const toggleSwitch = () => {
    onChange((prev) => !prev)
  }

  return (
    <Pressable onPress={toggleSwitch}>
      <div className="flex-between h-6 cursor-pointer rounded px-2 transition-colors hover:bg-[rgba(55,_53,_47_,0.08)]">
        <label htmlFor={id} className="cursor-pointer text-sm">
          {children}
        </label>
        <Switch id={id} name={name} size="small" value={value} />
      </div>
    </Pressable>
  )
}

const DateCellSetting = memo(({ item }) => {
  const { date } = item || {}

  const [endDateChecked, setEndDateChecked] = useState(false)
  const [includeTimeChecked, setIncludeTimeChecked] = useState(false)
  const [value, setValue] = useState(dayjs(date))

  return (
    <div id="filter-date-cell" className="flex flex-col gap-y-1">
      <Form.Item style={{ marginBottom: 0 }}>
        <Input value={value.format('DD/MM/YYYY')} size="small" placeholder="" />
      </Form.Item>

      <MiniCalendar startDate={dayjs(date)} endDate={dayjs(date)} />

      <Divider className="m-0" />

      <RemindSettingSelect isIncludeTime={includeTimeChecked} />

      <Divider className="m-0" />

      <BaseSwitch id="endDate" value={endDateChecked} onChange={setEndDateChecked}>
        End Date
      </BaseSwitch>

      <BaseSwitch id="includeTime" value={includeTimeChecked} onChange={setIncludeTimeChecked}>
        Include Time
      </BaseSwitch>

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

  return (
    <td height="32" className="ant-table-cell">
      <Popover
        open={open}
        rootClassName="w-[270px]"
        placement="bottomLeft"
        onOpenChange={setOpen}
        content={<DateCellSetting item={record} />}
      >
        <div className="truncate px-2 text-sm leading-[41px]">{children}</div>
      </Popover>
    </td>
  )
}

export default memo(DateCell)
