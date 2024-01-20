import ExpenseFilter from './ExpenseFilter'
import ExpenseSort from './ExpenseSort'

const ExpenseSortFilterControl = () => {
  return (
    <div className="flex items-center">
      <ExpenseFilter />
      <ExpenseSort />
    </div>
  )
}

export default ExpenseSortFilterControl
