import { Select as AntdSelect } from 'antd'
import { CheckIcon, ChevronDownIcon } from '@/components/icons'

const Select = ({ defaultValue, size = 'middle', options, width, handleChange, ...props }) => {
  return (
    <AntdSelect
      defaultValue={defaultValue}
      style={{ width }}
      onChange={handleChange}
      options={options}
      size={size}
      menuItemSelectedIcon={<CheckIcon className="size-4" />}
      suffixIcon={<ChevronDownIcon className="size-4" />}
      {...props}
    />
  )
}

export default Select
