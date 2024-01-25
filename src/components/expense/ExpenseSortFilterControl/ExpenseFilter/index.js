'use client'

import { useState } from 'react'
import { PlusIcon } from '@/components/icons'
import { Button } from '@/components/ui'
import defaultColumns from '@/data/columns.json'
import FilterSortPopover from '../FilterSortPopover'

const ExpenseFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState(false)

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

  return (
    <FilterSortPopover
      open={open}
      onOpenChange={setOpen}
      list={defaultColumns}
      rootClassName="w-[280px]"
      inputPlaceholder="Filter by..."
      extraContent={extraContent}
      items={filters}
    >
      <Button type="text" size="small">
        Filter
      </Button>
    </FilterSortPopover>
  )
}

export default ExpenseFilter
