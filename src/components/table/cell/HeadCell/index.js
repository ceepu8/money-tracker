import { memo } from 'react'
import { cn } from '@/utils'

const HeadCell = ({ item, first }) => {
  const { title, width, icon: Icon } = item || {}

  return (
    <div
      style={{ width: `${width}px` }}
      className={cn(
        'flex h-10 w-full cursor-pointer items-center gap-x-2 pl-2 transition-colors',
        'text-[rgba(55,_53,_47,_0.65)] hover:bg-[rgba(55,_53,_47_,0.08)]',
        first && 'pl-8'
      )}
    >
      {Icon && <Icon className="size-4" />}
      <span className="text-sm">{title}</span>
    </div>
  )
}
export default memo(HeadCell)
