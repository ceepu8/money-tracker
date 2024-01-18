'use client'

import { useFlag } from '@/hooks/shared'
import ExpenseSortFilterControl from './ExpenseSortFilterControl'
import ExpenseTabList from './ExpenseTabList'
import ExpenseTabSearch from './ExpenseTabSearch'
import ExpenseTabSetting from './ExpenseTabSetting'

const ACTIVE_EXTRA_SETTING_WIDTH = 330
const INACTIVE_EXTRA_SETTING_WIDTH = 150

const ExpenseTab = () => {
  const [search, _, setSearchFalse, setToggleSearch] = useFlag()

  const width = search ? ACTIVE_EXTRA_SETTING_WIDTH : INACTIVE_EXTRA_SETTING_WIDTH

  return (
    <div className="relative">
      <div className="transition-[max-width]" style={{ maxWidth: `calc(100% - ${width}px)` }}>
        <ExpenseTabList search={search} />
      </div>
      <div
        className="absolute right-0 top-0 flex justify-between border-b border-[#ededed] pb-[5px] transition-[width]"
        style={{ width: `${width}px` }}
      >
        <ExpenseSortFilterControl />
        <ExpenseTabSearch
          search={search}
          setToggleSearch={setToggleSearch}
          setSearchFalse={setSearchFalse}
        />
        <ExpenseTabSetting />
      </div>
    </div>
  )
}

export default ExpenseTab
