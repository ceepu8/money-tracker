'use client'

import { HeadingTitle } from '@/components/common'
import ExpenseTab from './ExpenseTab'

const ExpenseView = () => {
  const onChangeTitle = () => {}

  return (
    <div className="mx-auto mt-12 max-w-[1200px] overflow-hidden">
      <HeadingTitle label="Expense" editable onChange={onChangeTitle} />
      <ExpenseTab />
    </div>
  )
}

export default ExpenseView
