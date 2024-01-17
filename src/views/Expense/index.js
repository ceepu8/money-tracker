'use client'

import { useState } from 'react'
import { Title } from '@/components/common'
import ExpenseTab from './ExpenseTab'

const ExpenseView = () => {
  const [title, setTitle] = useState('Expense')

  const onSetTitle = (value) => {
    if (!value) return
    setTitle(value)
  }

  return (
    <div className="mx-auto mt-12 max-w-[1200px] overflow-hidden">
      <Title editable onChange={onSetTitle}>
        {title}
      </Title>
      <ExpenseTab />
    </div>
  )
}

export default ExpenseView
