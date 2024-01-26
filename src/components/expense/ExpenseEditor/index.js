import { Divider } from '@/components/ui'
import { cn } from '@/utils'
import FilterEditor from './FilterEditor'
import SortEditor from './SortEditor'

const ExpenseEditor = ({ extraFlag, filters, setFilters, sorts, setSorts }) => {
  const [hasExtra] = extraFlag

  return (
    <div
      className={cn(
        'flex items-center',
        hasExtra ? 'visible h-10 opacity-100' : 'invisible h-0 opacity-0'
      )}
    >
      <SortEditor list={sorts} setList={setSorts} />
      {sorts?.length > 0 && filters?.length > 0 && (
        <Divider type="vertical" className="!h-[26px]" />
      )}
      <FilterEditor list={filters} setList={setFilters} />
    </div>
  )
}

export default ExpenseEditor
