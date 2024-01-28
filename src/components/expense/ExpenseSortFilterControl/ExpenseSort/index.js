'use client'

import { useState } from 'react'
import { FilterSortPopover } from '@/components/popover'
import { Button } from '@/components/ui'
import defaultColumns from '@/data/columns.json'
import { useFilterSortContext } from '@/views/Expense/FilterSortContext'

const ExpenseSort = ({ extraFlag }) => {
  const { sorts, handleAddSortItem } = useFilterSortContext()

  const [_hasExtra, onOpenExtra, _onCloseExtra, toggleExtra] = extraFlag
  const [open, setOpen] = useState(false)

  const isOpen = open && sorts?.length === 0

  const addItem = (item) => {
    handleAddSortItem({
      ...item,
      isAscending: true,
    })
    setOpen(false)
    onOpenExtra()
  }

  const handleOnChange = (newOpen) => {
    if (sorts.length === 0) {
      setOpen(newOpen)
    } else {
      toggleExtra()
    }
  }

  return (
    <FilterSortPopover
      open={isOpen}
      onOpenChange={handleOnChange}
      list={defaultColumns}
      rootClassName="w-[280px]"
      inputPlaceholder="Sort by..."
      items={sorts}
      addItem={addItem}
    >
      <Button type="text" size="small">
        Sort
      </Button>
    </FilterSortPopover>
  )
}

export default ExpenseSort
