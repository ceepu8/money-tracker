'use client'

import { Typography } from 'antd/lib'
import { cn } from '@/utils'

const { Title: AntdTitle } = Typography

const Title = ({
  editable = false,
  editableIcon,
  enterIcon,
  children,
  onChange,
  onStart,
  onCancel,
  onEnd,
  className = '',
  ...props
}) => {
  const editableProps = {
    icon: editableIcon,
    tooltip: true,
    maxLength: 10,
    onChange,
    onCancel,
    onStart,
    onEnd,
    enterIcon,
    triggerType: ['text'],
  }

  const ellipsisProps = { rows: 1, expandable: false, tooltip: true }
  return (
    <AntdTitle
      level={1}
      ellipsis={ellipsisProps}
      editable={editable ? editableProps : false}
      className={cn('common-title', className)}
      {...props}
    >
      {children}
    </AntdTitle>
  )
}

export default Title
