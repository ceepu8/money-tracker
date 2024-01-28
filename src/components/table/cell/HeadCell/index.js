import { memo } from 'react'
import { cn } from '@/utils'

const HeadCell = ({ item, first }) => {
  const { title, width, icon: Icon } = item || {}

  return (
    <div
      style={{ width: `${width}px` }}
      className={cn(
        'flex h-10 w-full cursor-pointer items-center gap-x-2 pl-2 hover:bg-gray-100',
        first && 'pl-8'
      )}
    >
      {Icon && <Icon className="size-4" />}
      <span>{title}</span>
    </div>
  )
}
export default memo(HeadCell)
