'use client'

import { useState } from 'react'
import { Title } from '@/components/common'

const ExpenseView = () => {
  const [title, setTitle] = useState('Expense')

  const onSetTitle = (value) => {
    if (!value) return
    setTitle(value)
  }

  return (
    <div className="mx-auto mt-12 max-w-[1200px]">
      <Title editable onChange={onSetTitle}>
        {title}
      </Title>
    </div>
  )
}

export default ExpenseView
