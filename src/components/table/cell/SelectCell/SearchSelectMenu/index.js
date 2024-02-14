import { useSortable } from '@dnd-kit/sortable'
import { Pressable } from '@react-aria/interactions'
import { Typography } from 'antd'
import { memo, useDeferredValue, useEffect, useState } from 'react'
import { SixDotsVerticalIcon } from '@/components/icons'
import { SortableList } from '@/components/sortable'
import { Tag } from '@/components/ui'
import data from '@/data/category-select-list.json'
import { cn, getColorStyle } from '@/utils'
import SearchSelectTagInput from './SearchSelectTagInput'
import SelectItemSettingPopover from './SelectItemSettingPopover'

const { selectList } = data

const SelectItem = ({ item, onClick }) => {
  const [open, setOpen] = useState(false)
  const { id, color } = item || {}

  const { isDragging } = useSortable({ id })

  useEffect(() => {
    if (isDragging) setOpen(false)
  }, [isDragging])

  const style = getColorStyle(color)

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

const SearchSelectMenu = memo(({ item }) => {
  const [list, setList] = useState(selectList)

  const [value, setValue] = useState('')
  const deferredValue = useDeferredValue(value)

  const handleSelect = (e) => {}

  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }

  const renderItem = (item) => {
    return (
      <SortableList.Item key={item.id} id={item.id}>
        <SelectItem item={item} onClick={handleSelect} />
      </SortableList.Item>
    )
  }

  return (
    <div className="-mx-3 -mb-2 -mt-3">
      <SearchSelectTagInput item={item} value={deferredValue} onChange={handleChangeValue} />
      <Typography.Text type="secondary" className="truncate pl-4 !text-xs">
        Select an option or create one
      </Typography.Text>
      <SortableList
        type="vertical"
        items={list}
        onChange={setList}
        renderItem={renderItem}
        className="px-1"
      />
    </div>
  )
})

export default SearchSelectMenu
