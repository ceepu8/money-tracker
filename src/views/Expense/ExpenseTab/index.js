'use client'

import {
  ExpenseSortFilterControl,
  ExpenseTabList,
  ExpenseTabSearch,
  ExpenseTabSetting,
} from '@/components/expense'
import { useFlag } from '@/hooks/shared'

const ACTIVE_EXTRA_SETTING_WIDTH = 365
const INACTIVE_EXTRA_SETTING_WIDTH = 185

const ExpenseTab = () => {
  const searchFlag = useFlag()
  const [hasSearch] = searchFlag

  const width = hasSearch ? ACTIVE_EXTRA_SETTING_WIDTH : INACTIVE_EXTRA_SETTING_WIDTH

  return (
    <div className="relative">
      <div className="transition-[max-width]" style={{ maxWidth: `calc(100% - ${width}px)` }}>
        <ExpenseTabList />
      </div>
      <div
        className="absolute right-0 top-0 flex justify-between border-b border-[#ededed] pb-[5px] transition-[width]"
        style={{ width: `${width}px` }}
      >
        <ExpenseSortFilterControl />
        <ExpenseTabSearch searchFlag={searchFlag} />
        <ExpenseTabSetting />
      </div>
    </div>
  )
}

export default ExpenseTab
