import { Button } from 'antd'
import differenceBy from 'lodash/differenceBy'
import { useEffect, useState } from 'react'
import { ChevronDownIcon, PlusIcon } from '@/components/icons'
import { SortableList } from '@/components/sortable'
import { PROPERTY_BY_ICONS } from '@/constants'
import defaultColumns from '@/data/columns.json'
import FilterSortPopover from '../../ExpenseSortFilterControl/FilterSortPopover'

const FilterItem = ({ item }) => {
  const { id, title, type } = item
  const Icon = PROPERTY_BY_ICONS[type]
  return (
    <div className="flex-center gap-x-1 rounded-full border border-[#ededed] px-2 py-0.5 text-sm">
      {Icon && <Icon className="h-3 w-3" />}
      <span>{title}</span>
      <ChevronDownIcon className="h-3 w-3" />
    </div>
  )
}

const FilterEditor = ({ list, setList }) => {
  const [leftFilters, setLeftFilters] = useState(defaultColumns)
  const [open, setOpen] = useState(false)

  const addItem = (item) => {
    setList((prev) => [...prev, item])
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
