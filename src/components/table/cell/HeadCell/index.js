import { memo } from 'react'

const { cn } = require('@/utils')

const HeadCell = ({ item, first }) => {
  const { dataIndex, title, width, icon: Icon } = item || {}

  return (
    <div
      className={cn(
        'flex h-10 w-full cursor-pointer items-center gap-x-2 pl-2 text-sm hover:bg-gray-100',
        first && 'pl-8'
      )}
      style={{ width: `${width}px` }}
      key={dataIndex}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{title}</span>
    </div>
  )
}
export default memo(HeadCell)
