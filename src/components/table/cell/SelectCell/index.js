import { Typography } from 'antd'
import { memo, useState } from 'react'
import { SortableList } from '@/components/sortable'
import { Popover } from '@/components/ui'
import data from '@/data/category-select-list.json'
import SelectItem from './SelectItem'
import SingleSelectTagInput from './SingleSelectTagInput'

const { selectList } = data

const PopoverContent = memo(({ item }) => {
  const [list, setList] = useState(selectList)

  const handleSelect = (e) => {}

  const renderItem = (item) => {
    return (
      <SortableList.Item key={item.id} id={item.id}>
        <SelectItem item={item} onClick={handleSelect} />
      </SortableList.Item>
    )
  }

  return (
    <div className="-mx-3 -mb-2 -mt-3">
      <SingleSelectTagInput item={item?.category} />
      <Typography.Text type="secondary" className="truncate pl-4 !text-xs">
        Select an option or create one
      </Typography.Text>
      <SortableList
        type="vertical"
        items={list}
        onChange={setList}
        renderItem={renderItem}
        className="px-1"
      />
    </div>
  )
})

const SelectCell = ({ children, item, record }) => {
  const [open, setOpen] = useState(false)

  return (
    <td height="32" id="select_cell" className="ant-table-cell">
      <Popover
        open={open}
        onOpenChange={setOpen}
        className="truncate"
        placement="bottomLeft"
        rootClassName="w-[300px]"
        content={<PopoverContent item={record} />}
      >
        <div className="flex-between h-[41px] w-full truncate px-2 text-sm">{children}</div>
      </Popover>
    </td>
  )
}

export default memo(SelectCell)
