import { useState } from 'react'
import { Menu } from '@/components/common'
import { ChevronDownIcon, ClockIcon } from '@/components/icons'
import { Button, Popover } from '@/components/ui'
import {
  DATE_FORMAT_AND_TIMEZONE_OPTIONS,
  DATE_FORMAT_OPTIONS,
  DATE_FORMAT_TEXTS,
} from '@/constants'

const DateFormatSelect = () => {
  const item = DATE_FORMAT_AND_TIMEZONE_OPTIONS[0]

  const [value, setValue] = useState(DATE_FORMAT_OPTIONS[0].value)
  const [open, setOpen] = useState(false)

  const handleSetValue = (val) => {
    setValue(val)
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      rootClassName="w-[180px]"
      onOpenChange={setOpen}
      content={<Menu list={DATE_FORMAT_OPTIONS} value={value} onChange={handleSetValue} />}
    >
      <Menu.Item item={item}>
        <span>{item.label}</span>
        <div className="flex items-center gap-x-1 text-[rgba(55,_53,_47,_0.65)]">
          <span>{DATE_FORMAT_TEXTS[value]}</span>
          <ChevronDownIcon className="size-3" />
        </div>
      </Menu.Item>
    </Popover>
  )
}

const DateFormatTimezoneSelect = () => {
  const [open, setOpen] = useState(false)

  const popoverContent = (
    <Menu>
      <DateFormatSelect />
      <Menu.Item item={DATE_FORMAT_AND_TIMEZONE_OPTIONS[1]} isDisabled />
      <Menu.Item item={DATE_FORMAT_AND_TIMEZONE_OPTIONS[2]} isDisabled />
    </Menu>
  )

  return (
    <Popover
      open={open}
      placement="right"
      rootClassName="w-[250px]"
      onOpenChange={setOpen}
      content={popoverContent}
    >
      <Button
        size="small"
        type="text"
        className="!justify-start"
        icon={<ClockIcon className="size-3.5" />}
      >
        <span>Date format & timezone</span>
      </Button>
    </Popover>
  )
}

export default DateFormatTimezoneSelect
