'use client'

import { Input as AntdInput } from 'antd/lib'
import { forwardRef, useDeferredValue, useMemo, useState } from 'react'
import { Divider, Popover } from '@/components/ui'
import { PROPERTY_BY_ICONS } from '@/constants'

const Input = forwardRef((props, ref) => {
  return (
    <AntdInput
      ref={ref}
      size="large"
      placeholder={props?.placeholder || '入力してください。'}
      id="_input_"
      {...props}
    />
  )
})

const ExpenseFilterItem = ({ item, onClick }) => {
  const { id, title, type } = item
  const Icon = PROPERTY_BY_ICONS[type]

  return (
    <li
      className="-mx-2 flex h-8 cursor-pointer items-center gap-x-2 rounded-md pl-4 hover:bg-[#ededed]"
      role="presentation"
      onClick={onClick}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{title}</span>
    </li>
  )
}

const ExpenseFilterList = ({ list, addItem }) => {
  const renderItem = (item) => {
    return <ExpenseFilterItem key={item.id} item={item} onClick={() => addItem(item)} />
  }

  if (list?.length === 0) {
    return <span className="text-xs">No result</span>
  }

  return <ul>{list.map(renderItem)}</ul>
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
    <div className="flex flex-col gap-y-2">
      <Input value={value} onChange={onChange} placeholder={inputPlaceholder} size="small" />
      <ExpenseFilterList list={filterList} addItem={addItem} />
      {extraContent && (
        <>
          <Divider className="!my-0" />
          {extraContent}
        </>
      )}
    </div>
  )
}

const FilterSortPopover = ({
  extraContent,
  open,
  onOpenChange,
  list,
  children,
  rootClassName,
  inputPlaceholder,
  items,
  addItem,
}) => {
  return (
    <Popover
      content={
        <PopoverContent
          list={list}
          extraContent={extraContent}
          inputPlaceholder={inputPlaceholder}
          addItem={addItem}
        />
      }
      rootClassName={rootClassName}
      onOpenChange={onOpenChange}
      trigger="click"
      open={open}
    >
      {children}
    </Popover>
  )
}

export default FilterSortPopover
