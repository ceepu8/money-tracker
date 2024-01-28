import { Divider } from '@/components/ui'
import { useFilterSortContext } from '@/contexts/customs'
import { cn } from '@/utils'
import FilterEditor from './FilterEditor'
import SortEditor from './SortEditor'

const ExpenseEditor = ({ extraFlag }) => {
  const { filters, sorts } = useFilterSortContext()

  const [hasExtra] = extraFlag
  const isFull = sorts?.length > 0 && filters?.length > 0

  return (
    <div
      className={cn(
        'flex items-center',
        hasExtra ? 'visible h-10 opacity-100' : 'invisible h-0 opacity-0'
      )}
    >
      <SortEditor />
      {isFull && <Divider type="vertical" className="!h-[26px]" />}
      <FilterEditor />
    </div>
  )
}

export default ExpenseEditor
