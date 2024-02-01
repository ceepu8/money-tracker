import { Typography } from 'antd'
import React from 'react'
import { MenuIcon } from '@/components/icons'
import { Input } from '@/components/ui'
import ExtraSettingPopover from '../../ExtraSettingPopover'

const FilterTextPopoverContent = ({ item }) => {
  const { title } = item || {}
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex-between">
        <Typography.Text type="secondary" className="!text-xs">
          {title}
        </Typography.Text>
        <ExtraSettingPopover onDelete={() => {}} onAdvancedFilter={() => {}} />
      </div>
      <Input
        prefix={<MenuIcon className="size-3" />}
        size="small"
        name="password"
        label="Password"
        placeholder="Type a value..."
      />
    </div>
  )
}

export default FilterTextPopoverContent
