'use client'

import { useState } from 'react'
import {
  CalculatorIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  LinkIcon,
  MenuIcon,
  PlusIcon,
} from '@/components/icons'
import { Button } from '@/components/ui'
import { COLUMN_TYPE } from '@/constants'
import FilterSortPopover from '../FilterSortPopover'

const defaultColumns = [
  {
    title: 'Description',
    type: COLUMN_TYPE.TEXT,
    icon: MenuIcon,
    dataIndex: 'description',
    id: 'description',
    width: 320,
    editable: true,
  },
  {
    title: 'Amount',
    type: COLUMN_TYPE.NUMBER,
    icon: CalculatorIcon,
    dataIndex: 'amount',
    id: 'amount',
    width: 100,
    editable: true,
  },
  {
    title: 'Link',
    type: COLUMN_TYPE.URL,
    icon: LinkIcon,
    dataIndex: 'link',
    id: 'link',
    width: 100,
    editable: true,
  },
  {
    title: 'Method',
    type: COLUMN_TYPE.TEXT,
    icon: MenuIcon,
    dataIndex: 'method',
    id: 'method',
    width: 100,
    editable: true,
  },
  {
    title: 'Date',
    type: COLUMN_TYPE.DATE,
    icon: CalendarDaysIcon,
    dataIndex: 'date',
    id: 'date',
    width: 150,
    editable: true,
  },
  {
    title: 'Category',
    type: COLUMN_TYPE.SELECT,
    icon: ChevronDownIcon,
    dataIndex: 'category',
    id: 'category',
    width: 120,
    editable: true,
  },
  {
    title: 'Status',
    type: COLUMN_TYPE.STATUS,
    icon: CalendarDaysIcon,
    dataIndex: 'status',
    id: 'status',
    width: 120,
    editable: true,
  },
  {
    title: 'Details',
    type: COLUMN_TYPE.TEXT,
    icon: MenuIcon,
    dataIndex: 'details',
    id: 'details',
    width: 320,
    editable: true,
  },
]

const ExpenseFilter = () => {
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
    >
      <Button type="text" size="small">
        Filter
      </Button>
    </FilterSortPopover>
  )
}

export default ExpenseFilter
