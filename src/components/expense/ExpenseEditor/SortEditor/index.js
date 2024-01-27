import differenceBy from 'lodash/differenceBy'
import { useEffect, useState } from 'react'
import {
  ArrowDownIcon,
  ArrowsUpDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  PlusIcon,
  SixDotsVerticalIcon,
  TrashIcon,
  XMarkIcon,
} from '@/components/icons'
import { SortableList } from '@/components/sortable'
import { Button, ButtonIcon, Popover } from '@/components/ui'
import defaultColumns from '@/data/columns.json'
import FilterSortPopover from '../../ExpenseSortFilterControl/FilterSortPopover'

const AddSortSection = ({ leftSorts, open, setOpen, addItem }) => {
  return (
    <FilterSortPopover
      open={open}
      onOpenChange={setOpen}
      list={leftSorts}
      rootClassName="w-[280px]"
      inputPlaceholder="Search for a property..."
      addItem={addItem}
    >
      <Button
        type="text"
        size="small"
        icon={<PlusIcon className="h-4 w-4" />}
        className="!-mx-2 !justify-start"
      >
        Add sort
      </Button>
    </FilterSortPopover>
  )
}

const SortItem = ({ item, deleteItem }) => {
  const { id, title, isAscending } = item

  return (
    <li key={id} className="flex-between flex-1 gap-x-2 text-xs text-[#7e7e7e]">
      <span className="flex-1">{title}</span>
      <span className="flex-1">{isAscending ? 'Ascending' : 'Descending'}</span>
      <ButtonIcon
        icon={<XMarkIcon className="h-3.5 w-3.5 text-[#7e7e7e]" />}
        onClick={() => deleteItem(id)}
        size="small"
      />
    </li>
  )
}

const SortEditorContent = ({ list, setList }) => {
  const [leftSorts, setLeftSorts] = useState(defaultColumns)
  const [open, setOpen] = useState(false)

  const onDeleteSort = () => {
    setList([])
  }

  const deleteItem = (deleteId) => {
    setList((prev) => prev.filter((item) => item.id !== deleteId))
  }

  const addItem = (item) => {
    setList((prev) => [
      ...prev,
      {
        ...item,
        isAscending: true,
      },
    ])
    setOpen(false)
  }

  const renderItem = (item) => {
    return (
      <SortableList.Item id={item.id}>
        <div className="flex items-center gap-x-2">
          <SortableList.DragHandle>
            <SixDotsVerticalIcon className="h-3 w-3 fill-[#7e7e7e]" />
          </SortableList.DragHandle>
          <SortItem key={item.id} item={item} deleteItem={deleteItem} />
        </div>
      </SortableList.Item>
    )
  }

  useEffect(() => {
    const newSorts = differenceBy(defaultColumns, list, 'id')
    setLeftSorts(newSorts)
  }, [list])

  return (
    <div className="flex flex-col gap-y-1">
      <SortableList type="vertical" items={list} onChange={setList} renderItem={renderItem} />
      {leftSorts?.length !== 0 && (
        <AddSortSection open={open} setOpen={setOpen} addItem={addItem} leftSorts={leftSorts} />
      )}
      <Button
        type="text"
        size="small"
        onClick={onDeleteSort}
        className="!-mx-2 !justify-start"
        icon={<TrashIcon className="h-4 w-4" />}
      >
        Delete sort
      </Button>
    </div>
  )
}

const SortEditor = ({ list, setList }) => {
  const [open, setOpen] = useState(false)
  const { title, isAscending } = list[0] || {}

  if (list?.length === 0) return null

  const element =
    list?.length > 1 ? (
      <Button icon={<ArrowsUpDownIcon className="h-3 w-3" />} size="small" shape="round" ghost>
        <span>{list.length} sorts</span>
        <ChevronDownIcon className="ml-1 h-3 w-3" />
      </Button>
    ) : (
      <Button
        size="small"
        shape="round"
        ghost
        icon={
          isAscending ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />
        }
      >
        {title}
        <ChevronDownIcon className="ml-1 h-3 w-3" />
      </Button>
    )

  return (
    <Popover
      rootClassName="w-[290px]"
      open={open}
      onOpenChange={setOpen}
      content={<SortEditorContent list={list} setList={setList} />}
    >
      {element}
    </Popover>
  )
}

export default SortEditor
