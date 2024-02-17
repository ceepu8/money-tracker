import { Pressable } from '@react-aria/interactions'
import { Typography } from 'antd'
import { groupBy } from 'lodash'
import { useState } from 'react'
import { Menu } from '@/components/common'
import ExtraSettingPopover from '@/components/popover/ExtraSettingPopover'
import { Checkbox, Select } from '@/components/ui'
import { FILTER_COLOR, FILTER_SELECT_OPTIONS, STATUS_OPTIONS } from '@/constants'
import STATUS_LIST_RAW_DATA from '@/data/status-list.json'

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

const FilterStatusPopoverContent = ({ item: _item }) => {
  const [status, setStatus] = useState([])

  return (
    <div className="filter_popover filter_select_popover -m-1 flex flex-col gap-y-1">
      <PopoverHeader title="Status" />

      <Menu className="">
        {STATUS_LIST_RAW_DATA.map((item) => {
          const { id, value, label, children } = item || {}
          const { color, icon: Icon } = groupBy(STATUS_OPTIONS, 'value')[value]?.[0] || {}
          const checked = status.some((e) => e?.value === value)

          const onChecked = (_item) => {
            setStatus((prev) => {
              if (status.some((e) => e?.value === _item?.value)) {
                return prev.filter((e) => e?.value !== _item?.value)
              } else {
                return [...prev, _item]
              }
            })
          }

          return (
            <Menu.Item key={id} style={{ height: 'auto' }} className="!px-0 hover:!bg-transparent">
              <div className="flex w-full flex-col">
                <Pressable onPress={() => onChecked(item)}>
                  <div className="menu-item flex items-center gap-x-2">
                    <Checkbox name={label} checked={checked} />
                    {Icon && <Icon className="size-4" fill={color} />}
                    <span style={{ color }} className="text-sm font-semibold">
                      {label}
                    </span>
                  </div>
                </Pressable>

                <Menu className="pl-4">
                  {children.map((subItem) => {
                    const { id, value: _value, label, color } = subItem || {}
                    const { BADGE_COLOR, TEXT_COLOR, DOT_COLOR } = FILTER_COLOR[color] || {}
                    const checkedChild = status.some(
                      (e) => e?.value === _value || e?.value === value
                    )

                    return (
                      <Pressable key={id} onPress={() => onChecked(subItem)}>
                        <div className="menu-item flex items-center gap-x-2">
                          <Checkbox name={label} checked={checkedChild} />
                          <div
                            style={{ backgroundColor: BADGE_COLOR.RGBA, color: TEXT_COLOR.RGBA }}
                            className="flex items-center gap-x-2 rounded-full px-2"
                          >
                            <div
                              style={{ backgroundColor: DOT_COLOR.RGBA }}
                              className="size-2 rounded-full"
                            />
                            <span className="text-sm font-semibold">{label}</span>
                          </div>
                        </div>
                      </Pressable>
                    )
                  })}
                </Menu>
              </div>
            </Menu.Item>
          )
        })}
      </Menu>
    </div>
  )
}

export default FilterStatusPopoverContent
