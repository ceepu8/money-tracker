import ExpenseFilter from './ExpenseFilter'
import ExpenseSort from './ExpenseSort'

const ExpenseSortFilterControl = ({ filters, setFilters, sorts, setSorts, extraFlag }) => {
  return (
    <div className="flex items-center">
      <ExpenseFilter filters={filters} setFilters={setFilters} extraFlag={extraFlag} />
      <ExpenseSort sorts={sorts} setSorts={setSorts} extraFlag={extraFlag} />
    </div>
  )
}

export default ExpenseSortFilterControl
