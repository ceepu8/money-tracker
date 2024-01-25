'use client'

import { useState } from 'react'
import {
  ExpenseExtra,
  ExpenseSortFilterControl,
  ExpenseTabList,
  ExpenseTabSearch,
  ExpenseTabSetting,
} from '@/components/expense'
import { useFlag } from '@/hooks/shared'

const ACTIVE_EXTRA_SETTING_WIDTH = 365
const INACTIVE_EXTRA_SETTING_WIDTH = 185

const ExpenseTab = () => {
  const [filters, setFilters] = useState([])
  const [sorts, setSorts] = useState([])
  const searchFlag = useFlag()
  const extraFlag = useFlag()
  const [hasSearch] = searchFlag

  const width = hasSearch ? ACTIVE_EXTRA_SETTING_WIDTH : INACTIVE_EXTRA_SETTING_WIDTH

  return (
    <div className="relative pb-12">
      <div className="transition-[max-width]" style={{ maxWidth: `calc(100% - ${width}px)` }}>
        <ExpenseTabList />
      </div>
      <div
        className="absolute right-0 top-0 flex justify-between border-b border-[#ededed] pb-[5px] transition-[width]"
        style={{ width: `${width}px` }}
      >
        <ExpenseSortFilterControl
          filters={filters}
          setFilters={setFilters}
          sorts={sorts}
          setSorts={setSorts}
        />
        <ExpenseTabSearch searchFlag={searchFlag} />
        <ExpenseTabSetting />
      </div>
      <div className="absolute left-0 top-[calc(38px+16px)]">
        <ExpenseExtra extraFlag={extraFlag} />
      </div>
    </div>
  )
}

export default ExpenseTab
