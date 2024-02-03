import { Typography } from 'antd'
import React from 'react'
import { MenuIcon } from '@/components/icons'
import { Input, Select } from '@/components/ui'
import { TEXT_FILTER_OPTIONS } from '@/constants'
import ExtraSettingPopover from '../../ExtraSettingPopover'

const FilterTextPopoverContent = ({ item }) => {
  const { title } = item || {}
  return (
    <div className="filter_popover flex flex-col gap-y-1">
      <div className="flex items-center">
        <Typography.Text type="secondary" className="truncate !text-xs">
          {title}
        </Typography.Text>
        <Select
          defaultValue={TEXT_FILTER_OPTIONS[0].value}
          options={TEXT_FILTER_OPTIONS}
          dropdownStyle={{
            width: 180,
            fontSize: '12px',
          }}
        />
        <div className="ml-auto">
          <ExtraSettingPopover onDelete={() => {}} onAdvancedFilter={() => {}} />
        </div>
      </div>
      <Input
        prefix={<MenuIcon className="size-3" />}
        size="small"
        name="text"
        label="text"
        placeholder="Type a value..."
      />
    </div>
  )
}

export default FilterTextPopoverContent
