import { Select as AntdSelect } from 'antd'
import { CheckIcon, ChevronDownIcon } from '@/components/icons'
import { useEffect } from 'react'

const Select = ({ isBlockBody = true, defaultValue, size = 'middle', options, width, handleChange, ...props }) => {
  const onDropdownVisibleChange = (open) => {
    if (isBlockBody) {
      document.body.style.overflow = open ? 'hidden' : 'auto'
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <AntdSelect
    size={size}
    options={options}
    menuItemSelectedIcon={<CheckIcon className="size-4" />}
    suffixIcon={<ChevronDownIcon className="size-4" />}
    onDropdownVisibleChange={onDropdownVisibleChange}
    defaultValue={defaultValue}
    onChange={handleChange}
    style={{ width }}
      {...props}
    />
  )
}

export default Select
