import { useEffect, useState } from 'react'
import { Menu } from '@/components/common'
import { ChevronDownIcon, ClockIcon } from '@/components/icons'
import { Button, Popover } from '@/components/ui'
import {
  INCLUDE_TIME_REMIND_OPTIONS,
  INCLUDE_TIME_REMIND_TEXTS,
  NOT_INCLUDE_TIME_REMIND_OPTIONS,
  NOT_INCLUDE_TIME_REMIND_TEXTS,
} from '@/constants'

const RemindSelect = ({ isIncludeTime }) => {
  const OPTIONS = isIncludeTime ? INCLUDE_TIME_REMIND_OPTIONS : NOT_INCLUDE_TIME_REMIND_OPTIONS
  const TEXTS = isIncludeTime ? INCLUDE_TIME_REMIND_TEXTS : NOT_INCLUDE_TIME_REMIND_TEXTS

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(OPTIONS[0].value)

  const handleChangeValue = (value) => {
    setValue(value)
    setOpen(false)
  }

  useEffect(() => {
    if (!TEXTS[value]) {
      setValue(OPTIONS[0].value)
    }
  }, [isIncludeTime])

  const popoverContent = <Menu list={OPTIONS} value={value} onChange={handleChangeValue} />

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
        <div className="flex-between flex-1">
          <span>Remind</span>

          <div className="flex items-center gap-x-1 text-[rgba(55,_53,_47,_0.65)]">
            <span>{TEXTS?.[value]?.replace('(9:00 AM)', '')}</span>
            <ChevronDownIcon className="size-3" />
          </div>
        </div>
      </Button>
    </Popover>
  )
}

export default RemindSelect
