import { Pressable } from '@react-aria/interactions'
import { Typography } from 'antd'
import { memo, useState } from 'react'
import { SixDotsVerticalIcon } from '@/components/icons'
import { SortableList } from '@/components/sortable'
import { Popover, Tag } from '@/components/ui'
import { FILTER_SELECT_COLOR } from '@/constants'
import data from '@/data/category-select-list.json'
import SingleSelectTagInput from './SingleSelectTagInput'

const { selectList } = data

const PopoverContent = memo(({ item }) => {
  const [list, setList] = useState(selectList)

  const handleSelect = (value) => {}

  const renderItem = (item) => {
    const { id, color } = item || {}

    const style = {
      color: FILTER_SELECT_COLOR[color].TEXT_COLOR.RGBA,
      backgroundColor: FILTER_SELECT_COLOR[color].BADGE_COLOR.RGBA,
    }

    return (
      <SortableList.Item id={id}>
        <Pressable onPress={() => handleSelect(item)}>
          <div className="menu-item flex items-center gap-x-2">
            <SortableList.DragHandle>
              <SixDotsVerticalIcon className="size-3 fill-[#7e7e7e]" />
            </SortableList.DragHandle>
            <Tag size="medium" style={style} item={item} className="py-1" />
          </div>
        </Pressable>
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
