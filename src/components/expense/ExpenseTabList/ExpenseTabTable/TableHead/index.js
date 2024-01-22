import React from 'react'
import { cn } from '@/utils'

const TableHeadCell = ({ item, first }) => {
  const { dataIndex, title, width } = item || {}

  return (
    <div
      className={cn(
        'flex h-10 cursor-pointer items-center pl-2 transition-colors hover:bg-gray-100',
        first && 'pl-8'
      )}
      key={dataIndex}
      style={{ width: `${width}px` }}
    >
      <span> {title}</span>
    </div>
  )
}

const TableHead = ({ columns }) => {
  return (
    <div className="flex w-max items-center overflow-auto border-b border-[#ededed]">
      {columns.map((col, index) => {
        const first = index === 0
        return <TableHeadCell key={col.dataIndex} first={first} item={col} />
      })}
    </div>
  )
}

export default TableHead
