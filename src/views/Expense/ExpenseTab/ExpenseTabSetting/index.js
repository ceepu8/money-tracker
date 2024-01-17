import React from 'react'
import { EllipsisHorizontalIcon } from '@/components/icons'
import { cn } from '@/utils'

const Button = ({ onClick, children, className }) => {
  return (
    <button
      type="button"
      className={cn(
        'flex-center h-[30px] w-[30px] shrink-0 rounded border-none transition-colors hover:bg-gray-100',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const ExpenseTabSetting = () => {
  return (
    <div>
      <Button>
        <EllipsisHorizontalIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default ExpenseTabSetting
