import { cn } from '@/utils'

const ExpenseExtra = ({ extraFlag }) => {
  const [hasExtra, _onOpenExtra, onCloseExtra, toggleHasExtra] = extraFlag

  return (
    <div
      className={cn(
        'flex items-center',
        true ? 'visible h-10 opacity-100' : 'invisible h-0 opacity-0'
      )}
    >
      ExpenseExtra
    </div>
  )
}

export default ExpenseExtra
