'use client'

import { useState } from 'react'
import { PlusIcon } from '@/components/icons'
import { Button } from '@/components/ui'
import defaultColumns from '@/data/columns.json'
import FilterSortPopover from '../FilterSortPopover'

const ExpenseFilter = ({ filters, setFilters, extraFlag }) => {
  const [hasExtra, onOpenExtra, onCloseExtra, toggleExtra] = extraFlag
  const [open, setOpen] = useState(false)

  const isOpen = open && filters?.length === 0

  const handleOpenChange = (newOpen) => {
    if (filters?.length === 0) {
      setOpen(newOpen)
    } else {
      toggleExtra()
    }
  }

  const extraContent = (
    <Button
      type="text"
      size="medium"
      className="-mx-2 !justify-start"
      icon={<PlusIcon className="h-5 w-5" />}
    >
      Add advanced filter
    </Button>
  )

  const addItem = (item) => {
    setFilters((prev) => [...prev, item])
    setOpen(false)
    onOpenExtra()
  }

  return (
    <FilterSortPopover
      open={isOpen}
      onOpenChange={handleOpenChange}
      list={defaultColumns}
      rootClassName="w-[280px]"
      inputPlaceholder="Filter by..."
      extraContent={extraContent}
      items={filters}
      addItem={addItem}
    >
      <Button type="text" size="small">
        Filter
      </Button>
    </FilterSortPopover>
  )
}

export default ExpenseFilter
