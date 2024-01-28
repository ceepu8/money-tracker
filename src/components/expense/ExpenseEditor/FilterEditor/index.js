'use client'

import { useSortable } from '@dnd-kit/sortable'
import differenceBy from 'lodash/differenceBy'
import { forwardRef, memo, useEffect, useState } from 'react'
import { ChevronDownIcon, PlusIcon } from '@/components/icons'
import { FilterSortPopover } from '@/components/popover'
import { SortableList } from '@/components/sortable'
import { Button } from '@/components/ui'
import { POPOVER_BY_PROPERTY } from '@/constants'
import { PROPERTY_TYPE_ICONS } from '@/constants/icons'
import defaultColumns from '@/data/columns.json'
import { useFilterSortContext } from '@/views/Expense/FilterSortContext'

const FilterItem = ({ item }, ref) => {
  const { id, title, type, isActive } = item || {}

  const [open, setOpen] = useState(false)
  const { isDragging } = useSortable({ id })

  const Icon = PROPERTY_TYPE_ICONS[type]
  const Popover = POPOVER_BY_PROPERTY[type] || 'div'

  const buttonType = isActive ? 'primary' : 'default'
  const icon = Icon && <Icon className="h-4 w-4" />

  useEffect(() => {
    if (isDragging) setOpen(false)
  }, [isDragging])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Button ghost size="small" shape="round" type={buttonType} icon={icon}>
        <span>{title}</span>
        <ChevronDownIcon className="ml-1 h-3 w-3" />
      </Button>
    </Popover>
  )
}
const FilterEditor = () => {
  const { filters: list, setFilters: setList, handleAddFilterItem } = useFilterSortContext()

  const [leftFilters, setLeftFilters] = useState(defaultColumns)
  const [open, setOpen] = useState(false)

  const addItem = (item) => {
    handleAddFilterItem(item)
    setOpen(false)
  }

  useEffect(() => {
    const newFilters = differenceBy(leftFilters, list, 'id')
    setLeftFilters(newFilters)
  }, [list])

  const renderItem = (item) => {
    return (
      <SortableList.Item id={item.id}>
        <SortableList.DragHandle>
          <FilterItem item={item} />
        </SortableList.DragHandle>
      </SortableList.Item>
    )
  }

  return (
    <div className="flex items-center gap-x-1">
      <SortableList className="gap-x-2" items={list} onChange={setList} renderItem={renderItem} />
      <FilterSortPopover
        open={open}
        onOpenChange={setOpen}
        list={leftFilters}
        rootClassName="w-[280px]"
        inputPlaceholder="Sort by..."
        addItem={addItem}
      >
        <Button type="text" size="small" icon={<PlusIcon className="h-3 w-3" />}>
          Add filter
        </Button>
      </FilterSortPopover>
    </div>
  )
}

export default FilterEditor
