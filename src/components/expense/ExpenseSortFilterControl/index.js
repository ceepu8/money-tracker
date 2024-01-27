import ExpenseFilter from './ExpenseFilter'
import ExpenseSort from './ExpenseSort'

const ExpenseSortFilterControl = ({ extraFlag }) => {
  return (
    <div className="flex items-center">
      <ExpenseFilter extraFlag={extraFlag} />
      <ExpenseSort extraFlag={extraFlag} />
    </div>
  )
}

export default ExpenseSortFilterControl
