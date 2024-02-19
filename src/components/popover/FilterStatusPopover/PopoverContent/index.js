import { Pressable } from '@react-aria/interactions'
import { Typography } from 'antd'
import { difference, groupBy } from 'lodash'

import { useState } from 'react'

import { Menu } from '@/components/common'
import ExtraSettingPopover from '@/components/popover/ExtraSettingPopover'
import { Checkbox, Select } from '@/components/ui'
import { FILTER_COLOR, FILTER_SELECT_OPTIONS, STATUS_OPTIONS } from '@/constants'
import STATUS_LIST_RAW_DATA from '@/data/status-list.json'

const Dot = ({ color }) => (
  <div style={{ backgroundColor: color }} className="size-2 rounded-full" />
)

const PopoverHeader = ({ title }) => {
  const handleDelete = () => {}
  const handleAdvancedFilter = () => {}

  return (
    <div className="flex items-center">
      <Typography.Text type="secondary" className="truncate !text-xs">
        {title}
      </Typography.Text>
      <Select
        options={FILTER_SELECT_OPTIONS}
        defaultValue={FILTER_SELECT_OPTIONS[0].value}
        dropdownStyle={{ width: 180, fontSize: '12px' }}
      />
      <ExtraSettingPopover
        className="ml-auto"
        onDelete={handleDelete}
        onAdvancedFilter={handleAdvancedFilter}
      />
    </div>
  )
}

const StatusItem = ({ item, onPress, checked }) => {
  const { id, value, label, color: _childColor, children } = item || {}
  const { color, icon: Icon } = groupBy(STATUS_OPTIONS, 'value')[value]?.[0] || {}
  const { BADGE_COLOR, TEXT_COLOR, DOT_COLOR } = FILTER_COLOR[_childColor] || {}

  return (
    <Pressable onPress={() => onPress([id])}>
      <div className="menu-item flex items-center gap-x-2">
        <Checkbox name={label} checked={checked} />
        {children?.length > 0 ? (
          <>
            {Icon && <Icon className="size-4" fill={color} />}
            <span style={{ color }} className="text-sm font-semibold">
              {label}
            </span>
          </>
        ) : (
          <div
            style={{ backgroundColor: BADGE_COLOR.RGBA, color: TEXT_COLOR.RGBA }}
            className="flex items-center gap-x-2 rounded-full px-2"
          >
            <Dot color={DOT_COLOR.RGBA} />
            <span className="text-sm font-semibold">{label}</span>
          </div>
        )}
      </div>
    </Pressable>
  )
}

const FilterStatusPopoverContent = ({ content }) => {
  const { title } = content || {}
  const [status, setStatus] = useState([])

  const onChecked = (_item) => {
    const checked = difference(_item, status)?.length === 0

    setStatus((prev) => {
      if (checked) {
        return prev.filter((e) => !_item.includes(e))
      }
      return [...prev, ..._item]
    })
  }

  const renderStatusItem = (item) => {
    const { id, children } = item || {}
    const checked = difference(children, status)?.length === 0

    const renderChildStatusItem = (childItem) => {
      const { id: childId, value: _value } = childItem || {}
      const checkedChild = status.some((e) => e?.value === _value)

      return (
        <StatusItem
          key={childId}
          item={childItem}
          checked={checkedChild}
          onPress={() => onChecked([childItem])}
        />
      )
    }

    return (
      <Menu.Item key={id} style={{ height: 'auto' }} className="!px-0 hover:!bg-transparent">
        <div className="w-full">
          <StatusItem item={item} onPress={() => onChecked(children)} checked={checked} />
          <Menu className="pl-4">{children.map(renderChildStatusItem)}</Menu>
        </div>
      </Menu.Item>
    )
  }

  return (
    <div className="filter_popover filter_select_popover -m-1 flex flex-col gap-y-1">
      <PopoverHeader title={title} />
      <Menu className="">{STATUS_LIST_RAW_DATA.map(renderStatusItem)}</Menu>
    </div>
  )
}

export default FilterStatusPopoverContent
