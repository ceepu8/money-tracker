import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { Select as AntSelect } from 'antd'
import { useEffect } from 'react'
import { cn } from '@/utils'

const Select = ({ isBlockBody = true, mode, className, ...props }) => {
  const onDropdownVisibleChange = (open) => {
    if (isBlockBody && typeof document !== 'undefined') {
      document.body.style.overflow = open ? 'hidden' : 'auto'
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <AntSelect
      size="large"
      suffixIcon={<ArrowDownIcon color="#172152" size={10} />}
      onDropdownVisibleChange={onDropdownVisibleChange}
      className={cn(className)}
      mode={mode}
      {...props}
    />
  )
}

export default Select
