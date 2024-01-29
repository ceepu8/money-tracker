'use client'

import { useSortable } from '@dnd-kit/sortable'
import differenceBy from 'lodash/differenceBy'
import { memo, useEffect, useState } from 'react'
import { ChevronDownIcon, PlusIcon } from '@/components/icons'
import FilterSortPopover from '@/components/popover/FilterSortPopover'
import { SortableList } from '@/components/sortable'
import { Button } from '@/components/ui'
import { PROPERTY_TYPE_ICONS } from '@/constants/icons'
import { useFilterSortContext } from '@/contexts/customs'
import defaultColumns from '@/data/columns.json'
import { PROPERTY_TYPE_POPOVER } from '@/utils/popover'

const FilterItem = memo(({ item }) => {
  const { id, title, type, isActive } = item || {}

  const [open, setOpen] = useState(false)
  const { isDragging } = useSortable({ id })

  const Icon = PROPERTY_TYPE_ICONS[type]
  const Popover = PROPERTY_TYPE_POPOVER[type] || 'div'

  const buttonType = isActive ? 'primary' : 'default'
  const icon = Icon && <Icon className="size-4" />

  useEffect(() => {
    if (isDragging) setOpen(false)
  }, [isDragging])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Button ghost size="small" shape="round" type={buttonType} icon={icon}>
        <span>{title}</span>
        <ChevronDownIcon className="ml-1 size-3" />
      </Button>
    </Popover>
  )
})

const FilterEditor = () => {
  const { filters: list, setFilters: setList, handleAddFilterItem } = useFilterSortContext()

  const [leftFilters, setLeftFilters] = useState(defaultColumns)
  const [open, setOpen] = useState(false)

  const addItem = (item) => {
    handleAddFilterItem(item)
    setOpen(false)
  }

  useEffect(() => {
    const newFilters = differenceBy(defaultColumns, list, 'id')
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
        <Button type="text" size="small" icon={<PlusIcon className="size-3" />}>
          Add filter
        </Button>
      </FilterSortPopover>
    </div>
  )
}

export default FilterEditor
