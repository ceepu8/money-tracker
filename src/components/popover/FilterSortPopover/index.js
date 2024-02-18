import { useDeferredValue, useMemo, useState } from 'react'
import { Menu } from '@/components/common'
import { Input } from '@/components/ui'
import Popover from '@/components/ui/Popover'
import { PROPERTY_TYPE_ICONS } from '@/constants/icons'

const ExpenseFilterList = ({ list, addItem }) => {
  if (!list?.length) {
    return <span className="text-xs">No result</span>
  }

  const renderItem = (item) => {
    const { id, title, type } = item || {}
    const Icon = PROPERTY_TYPE_ICONS[type]

    return (
      <Menu.Item key={id} onClick={() => addItem(item)}>
        <div className="flex items-center gap-x-2">
          {Icon && <Icon className="size-4" />}
          <span>{title}</span>
        </div>
      </Menu.Item>
    )
  }

  return <Menu>{list.map(renderItem)}</Menu>
}

const PopoverContent = ({ list, extraContent, inputPlaceholder, addItem }) => {
  const [value, setValue] = useState('')
  const deferredValue = useDeferredValue(value)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const filterList = useMemo(
    () =>
      list.filter(({ title }) => {
        return title.toLowerCase().includes(value.toLowerCase())
      }),
    [list, deferredValue]
  )

  return (
    <div className="flex flex-col divide-x-0 divide-y divide-[#ededed]">
      <div className="space-y-2">
        <Input value={value} onChange={onChange} placeholder={inputPlaceholder} size="small" />
        <ExpenseFilterList list={filterList} addItem={addItem} />
      </div>
      {extraContent && <div className="mt-2 pt-2">{extraContent}</div>}
    </div>
  )
}

const FilterSortPopover = ({
  inputPlaceholder,
  rootClassName,
  extraContent,
  onOpenChange,
  children,
  addItem,
  open,
  list,
  // items,
}) => {
  const content = (
    <PopoverContent
      extraContent={extraContent}
      inputPlaceholder={inputPlaceholder}
      addItem={addItem}
      list={list}
    />
  )

  return (
    <Popover
      rootClassName={rootClassName}
      onOpenChange={onOpenChange}
      content={content}
      trigger="click"
      open={open}
    >
      {children}
    </Popover>
  )
}

export default FilterSortPopover
