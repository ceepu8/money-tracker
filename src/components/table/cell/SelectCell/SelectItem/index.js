import { Pressable } from '@react-aria/interactions'
import { useDeferredValue, useState } from 'react'
import { Menu } from '@/components/common'
import { EllipsisHorizontalIcon, SixDotsVerticalIcon, TrashIcon } from '@/components/icons'
import { SortableList } from '@/components/sortable'
import { Button, ButtonIcon, Divider, Input, Popover, Tag } from '@/components/ui'
import { FILTER_SELECT_COLOR, FILTER_SELECT_COLOR_OPTIONS } from '@/constants'
import { cn } from '@/utils'

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
    <div className="flex flex-col gap-y-2">
      <Input size="small" value={deferredValue} onChange={handleChangeValue} />
      <div className="-mx-2">
        <Button
          block
          type="text"
          size="small"
          className="!justify-start"
          icon={<TrashIcon className="size-4" />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>

      <div className="-mx-3">
        <Divider className="!my-0" />
      </div>

      <div className="-mx-2">
        <span className="pl-3 text-xs text-[rgba(55,_53,_47,_0.65)]">Colors</span>
        <Menu>
          {FILTER_SELECT_COLOR_OPTIONS.map((item) => {
            const {
              color: { BOX_COLOR, TEXT_COLOR, BADGE_COLOR },
              label,
              value,
            } = item

            const isActive = value === colorValue

            return (
              <Menu.Item key={value} isActive={isActive}>
                <div className="flex items-center">
                  <div
                    style={{
                      backgroundColor: BOX_COLOR.RGBA,
                      boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset',
                    }}
                    className="h-[18px] w-[18px] rounded"
                  />
                  <span className="pl-3 text-sm">{label}</span>
                </div>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    </div>
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

const SelectItem = ({ item, onClick }) => {
  const [open, setOpen] = useState(false)
  const { color } = item || {}

  const style = {
    color: FILTER_SELECT_COLOR[color].TEXT_COLOR.RGBA,
    backgroundColor: FILTER_SELECT_COLOR[color].BADGE_COLOR.RGBA,
  }

  return (
    <Pressable onPress={onClick}>
      <div
        className={cn('menu-item flex items-center gap-x-2', open && 'bg-[rgba(55,_53,_47_,0.08)]')}
      >
        <SortableList.DragHandle>
          <SixDotsVerticalIcon className="size-3 fill-[#7e7e7e]" />
        </SortableList.DragHandle>

        <div className="flex-1">
          <Tag size="medium" style={style} item={item} className="py-1" />
        </div>

        <SelectItemSettingPopover item={item} open={open} setOpen={setOpen} />
      </div>
    </Pressable>
  )
}

export default SelectItem
