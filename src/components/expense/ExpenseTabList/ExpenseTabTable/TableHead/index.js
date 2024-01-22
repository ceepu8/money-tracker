import React from 'react'
import { PlusIcon } from '@/components/icons'
import { SortableList } from '@/components/shared'
import { ButtonIcon } from '@/components/ui'
import { cn } from '@/utils'

const TableHeadCell = ({ item, first }) => {
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

const TableHead = ({ columns, setColumns }) => {
  return (
    <div className="flex w-[1462px] items-center border-b border-[#ededed] pl-8">
      <SortableList
        items={columns}
        onChange={setColumns}
        renderItem={(item, index) => (
          <SortableList.Item id={item.id}>
            {item.id === 'drag' || item.id === 'add' ? null : (
              <SortableList.DragHandle>
                <TableHeadCell item={item} />
              </SortableList.DragHandle>
            )}
          </SortableList.Item>
        )}
      />
      <ButtonIcon icon={<PlusIcon className="h-4 w-4" />} />
    </div>
  )
}

export default TableHead
