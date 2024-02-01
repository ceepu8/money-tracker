'use client'

import { Input as AntdInput } from 'antd'
import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <AntdInput
      ref={ref}
      size="large"
      placeholder={props?.placeholder || '入力してください。'}
      id="_input_"
      {...props}
    />
  )
})

export default Input
