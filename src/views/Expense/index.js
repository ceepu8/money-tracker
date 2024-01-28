'use client'

import { HeadingTitle } from '@/components/common'
import ExpenseTab from './ExpenseTab'
import { FilterSortProvider } from './FilterSortContext'
import TistTest from './TistTest'

const ExpenseView = () => {
  const onChangeTitle = () => {}

  return (
    <div className="mx-auto max-w-[1200px] overflow-hidden pt-12">
      <HeadingTitle label="Expense" editable onChange={onChangeTitle} />
      <FilterSortProvider>
        <ExpenseTab />
      </FilterSortProvider>
      <TistTest />
    </div>
  )
}

export default ExpenseView
