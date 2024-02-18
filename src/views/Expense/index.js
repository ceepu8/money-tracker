'use client'

import { HeadingTitle, SwitchTheme } from '@/components/common'
import { FilterSortProvider } from '@/contexts/customs'

import ExpenseTab from './ExpenseTab'
import TistTest from './TistTest'

const ExpenseView = () => {
  const onChangeTitle = () => {}

  return (
    <div className="mx-auto max-w-[1200px] overflow-hidden px-4 pt-12">
      <SwitchTheme />
      <HeadingTitle label="Expense" editable onChange={onChangeTitle} />
      <FilterSortProvider>
        <ExpenseTab />
      </FilterSortProvider>
      <TistTest />
    </div>
  )
}

export default ExpenseView
