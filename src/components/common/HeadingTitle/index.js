'use client'

import { Typography } from 'antd/lib'
import { useState } from 'react'
import { cn } from '@/utils'

const { Title: AntdTitle } = Typography

const HeadingTitle = ({
  editable = {},
  ellipsis = {},
  label,
  children,
  className = '',
  level = 1,
  onChange,
  ...props
}) => {
  const [title, setTitle] = useState(label)

  const onSetTitle = (value) => {
    if (!value) return
    setTitle(value)
    onChange?.(value)
  }

  const _editable = !!editable && {
    tooltip: true,
    maxLength: 10,
    onChange: onSetTitle,
    triggerType: ['text'],
    ...editable,
  }

  const _ellipsis = { rows: 1, expandable: false, tooltip: true, ...ellipsis }
  return (
    <AntdTitle
      level={level}
      ellipsis={_ellipsis}
      editable={_editable}
      className={cn('common-title', className)}
      {...props}
    >
      {title || children}
    </AntdTitle>
  )
}

export default HeadingTitle
