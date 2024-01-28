import { MenuIcon, PlusIcon } from '@/components/icons'
import { SortableList } from '@/components/sortable'
import { HeadCell } from '@/components/table/cell'
import { ButtonIcon } from '@/components/ui'

const ExpenseTableHead = ({ columns, setColumns }) => {
  const renderItem = (item, index) => {
    const isDraggable = index !== 0 && index !== columns.length - 1
    return (
      <SortableList.Item id={item.id}>
        {isDraggable ? (
          <SortableList.DragHandle>
            <HeadCell item={item} />
          </SortableList.DragHandle>
        ) : null}
      </SortableList.Item>
    )
  }

  return (
    <div className="flex min-w-max items-center border-b border-[#ededed] pl-8">
      <SortableList items={columns} onChange={setColumns} renderItem={renderItem} />
      <li className="flex w-[100px]">
        <ButtonIcon type="text" icon={<PlusIcon className="size-4" />} />
        <ButtonIcon type="text" icon={<MenuIcon className="size-4" />} />
      </li>
    </div>
  )
}

export default ExpenseTableHead
