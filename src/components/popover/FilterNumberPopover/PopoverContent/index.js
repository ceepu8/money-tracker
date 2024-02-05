import { Typography } from 'antd'
import { MenuIcon } from '@/components/icons'
import { InputNumber, Select } from '@/components/ui'
import { FILTER_NUMBER_OPTIONS } from '@/constants'
import ExtraSettingPopover from '../../ExtraSettingPopover'

const FilterNumberPopoverContent = ({ content }) => {
  const { title } = content || {}
  return (
    <div className="filter_popover flex flex-col gap-y-1">
      <div className="flex items-center">
        <Typography.Text type="secondary" className="truncate !text-xs">
          {title}
        </Typography.Text>
        <Select
          defaultValue={FILTER_NUMBER_OPTIONS[0].value}
          options={FILTER_NUMBER_OPTIONS}
          dropdownStyle={{
            width: 180,
            fontSize: '12px',
          }}
        />
        <div className="ml-auto">
          <ExtraSettingPopover onDelete={() => {}} onAdvancedFilter={() => {}} />
        </div>
      </div>
      <InputNumber
        size="middle"
        prefix={<MenuIcon className="size-3" />}
        placeholder="Type a value..."
      />
    </div>
  )
}

export default FilterNumberPopoverContent
