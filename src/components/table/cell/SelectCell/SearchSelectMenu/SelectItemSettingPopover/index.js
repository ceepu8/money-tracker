import { memo, useDeferredValue, useState } from 'react'
import { Menu } from '@/components/common'
import { EllipsisHorizontalIcon, TrashIcon } from '@/components/icons'
import { Button, ButtonIcon, Divider, Input, Popover } from '@/components/ui'
import { FILTER_SELECT_COLOR_OPTIONS } from '@/constants'

const ColorMenuItem = memo(({ item }) => {
  const {
    color: { BOX_COLOR },
    label,
  } = item

  return (
    <div className="flex items-center">
      <div
        className="h-[18px] w-[18px] rounded"
        style={{
          backgroundColor: BOX_COLOR.RGBA,
          boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset',
        }}
      />
      <span className="pl-3 text-sm">{label}</span>
    </div>
  )
})

const ColorMenu = ({ colorValue }) => {
  const renderItem = (item) => {
    const { value } = item
    const isActive = value === colorValue

    return (
      <Menu.Item key={value} isActive={isActive}>
        <ColorMenuItem item={item} />
      </Menu.Item>
    )
  }
  return (
    <div>
      <span className="pl-3 text-xs text-[rgba(55,_53,_47,_0.65)]">Colors</span>
      <Menu>{FILTER_SELECT_COLOR_OPTIONS.map(renderItem)}</Menu>
    </div>
  )
}

const PopoverContent = ({ value, onChange, onDelete, colorValue }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Input size="small" value={value} onChange={onChange} />

      <div className="-mx-2">
        <Button
          block
          type="text"
          size="small"
          className="!justify-start"
          icon={<TrashIcon className="size-4" />}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>

      <div className="-mx-3">
        <Divider className="!my-0" />
      </div>

      <div className="-mx-2">
        <ColorMenu colorValue={colorValue} />
      </div>
    </div>
  )
}

const SelectItemSettingPopover = ({ item, open, setOpen }) => {
  const { label, color } = item || {}

  const [inputValue, setInputValue] = useState(label)
  const [colorValue, setColorValue] = useState(color)

  const deferredValue = useDeferredValue(inputValue)

  const handleChangeValue = (e) => {
    const { value } = e.target
    setInputValue(value)
  }

  const handleDelete = () => {}

  const content = (
    <PopoverContent
      value={deferredValue}
      onChange={handleChangeValue}
      onDelete={handleDelete}
      colorValue={colorValue}
    />
  )

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className="truncate"
      rootClassName="w-[220px]"
      content={content}
    >
      <ButtonIcon size="small" icon={<EllipsisHorizontalIcon className="size-5" />} />
    </Popover>
  )
}

export default SelectItemSettingPopover
