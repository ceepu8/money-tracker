import { Button } from 'antd'
import differenceBy from 'lodash/differenceBy'
import { useEffect, useState } from 'react'
import { ChevronDownIcon, PlusIcon } from '@/components/icons'
import { Divider } from '@/components/ui'
import { PROPERTY_BY_ICONS } from '@/constants'
import defaultColumns from '@/data/columns.json'
import { cn } from '@/utils'
import FilterSortPopover from '../ExpenseSortFilterControl/FilterSortPopover'

const SortList = ({ list }) => {
  const { title, type } = list[0] || {}
  const Icon = PROPERTY_BY_ICONS[type]

  return (
    <button
      type="button"
      className="flex-center gap-x-1 rounded-full border border-[#ededed] px-2 py-0.5 text-sm hover:bg-[#f7f7f5]"
    >
      {Icon && <Icon className="h-3 w-3" />}
      <span>{title}</span>
      <ChevronDownIcon className="h-3 w-3" />
    </button>
  )
}

const FilterList = ({ list, setList }) => {
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

  return (
    <div className="flex items-center gap-x-1">
      <ul className="flex gap-x-1">
        {list.map((item) => {
          const { id, title, type } = item
          const Icon = PROPERTY_BY_ICONS[type]
          return (
            <li
              key={id}
              className="flex-center gap-x-1 rounded-full border border-[#ededed] px-2 py-0.5 text-sm"
            >
              {Icon && <Icon className="h-3 w-3" />}
              <span>{title}</span>
              <ChevronDownIcon className="h-3 w-3" />
            </li>
          )
        })}
      </ul>

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

const ExpenseExtra = ({ extraFlag, filters, setFilters, sorts, setSorts }) => {
  const [hasExtra] = extraFlag

  return (
    <div
      className={cn(
        'flex items-center',
        hasExtra ? 'visible h-10 opacity-100' : 'invisible h-0 opacity-0'
      )}
    >
      {sorts?.length === 0 ? null : <SortList list={sorts} />}
      {sorts?.length > 0 && filters?.length > 0 && (
        <Divider type="vertical" className="!h-[26px]" />
      )}
      {filters?.length === 0 ? null : <FilterList list={filters} setList={setFilters} />}
    </div>
  )
}

export default ExpenseExtra
