'use client'

import { Input as AntdInput } from 'antd'

import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <AntdInput
      ref={ref}
      size="middle"
      placeholder={props?.placeholder || 'Input content...'}
      id="_input_"
      {...props}
    />
  )
})

export default Input
