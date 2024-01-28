'use client'

import differenceBy from 'lodash/differenceBy'
import { memo, useEffect, useState } from 'react'
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
import FilterSortPopover from '@/components/popover/FilterSortPopover'
import { SortableList } from '@/components/sortable'
import { Button, ButtonIcon, Popover } from '@/components/ui'
import { useFilterSortContext } from '@/contexts/customs'
import defaultColumns from '@/data/columns.json'

const AddSortPopover = ({ list, open, setOpen, onAddItem }) => {
  return (
    <FilterSortPopover
      open={open}
      onOpenChange={setOpen}
      list={list}
      rootClassName="w-[280px]"
      inputPlaceholder="Search for a property..."
      addItem={onAddItem}
    >
      <Button
        type="text"
        size="small"
        icon={<PlusIcon className="size-4" />}
        className="!-mx-2 !justify-start"
      >
        Add sort
      </Button>
    </FilterSortPopover>
  )
}

const SortItem = memo(({ item, onDeleteItem }) => {
  const { id, title, isAscending } = item || {}

  return (
    <li key={id} className="flex-between flex-1 gap-x-2 text-xs text-[#7e7e7e]">
      <span className="flex-1">{title}</span>
      <span className="flex-1">{isAscending ? 'Ascending' : 'Descending'}</span>
      <ButtonIcon
        icon={<XMarkIcon className="size-3.5 text-[#7e7e7e]" />}
        onClick={() => onDeleteItem(id)}
        size="small"
      />
    </li>
  )
})

const SortEditorContent = () => {
  const {
    sorts: list,
    setSorts: setList,
    handleAddSortItem,
    handleDeleteSortItem,
    handleRemoveAllSorts,
  } = useFilterSortContext()

  const [leftSorts, setLeftSorts] = useState(defaultColumns)
  const [open, setOpen] = useState(false)

  const onRemoveAllSorts = () => {
    handleRemoveAllSorts()
  }

  const onDeleteItem = (deleteId) => {
    handleDeleteSortItem(deleteId)
  }

  const onAddItem = (item) => {
    handleAddSortItem({
      ...item,
      isAscending: true,
    })
    setOpen(false)
  }

  const renderItem = (item) => {
    return (
      <SortableList.Item id={item.id}>
        <div className="flex items-center gap-x-2">
          <SortableList.DragHandle>
            <SixDotsVerticalIcon className="size-3 fill-[#7e7e7e]" />
          </SortableList.DragHandle>
          <SortItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
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
        <AddSortPopover open={open} setOpen={setOpen} onAddItem={onAddItem} list={leftSorts} />
      )}

      <Button
        type="text"
        size="small"
        onClick={onRemoveAllSorts}
        className="!-mx-2 !justify-start"
        icon={<TrashIcon className="size-4" />}
      >
        Delete sort
      </Button>
    </div>
  )
}

const SortEditorPopover = () => {
  const { sorts: list } = useFilterSortContext()

  const [open, setOpen] = useState(false)
  const { title, isAscending } = list[0] || {}

  if (list?.length === 0) return null

  const element =
    list?.length > 1 ? (
      <Button icon={<ArrowsUpDownIcon className="size-3" />} size="small" shape="round" ghost>
        <span>{list.length} sorts</span>
        <ChevronDownIcon className="ml-1 size-3" />
      </Button>
    ) : (
      <Button
        size="small"
        shape="round"
        ghost
        icon={
          isAscending ? <ArrowUpIcon className="size-3" /> : <ArrowDownIcon className="size-3" />
        }
      >
        {title}
        <ChevronDownIcon className="ml-1 size-3" />
      </Button>
    )

  return (
    <Popover
      rootClassName="w-[290px]"
      open={open}
      onOpenChange={setOpen}
      content={<SortEditorContent />}
    >
      {element}
    </Popover>
  )
}

export default SortEditorPopover
