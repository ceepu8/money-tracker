import ExpenseFilter from './ExpenseFilter'
import ExpenseSort from './ExpenseSort'

const ExpenseSortFilterControl = ({ filters, setFilters, sorts, setSorts }) => {
  return (
    <div className="flex items-center">
      <ExpenseFilter filters={filters} setFilters={setFilters} />
      <ExpenseSort sorts={sorts} setSorts={setSorts} />
    </div>
  )
}

export default ExpenseSortFilterControl
