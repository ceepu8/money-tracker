import { InputNumber as AntdInputNumber } from 'antd'
import { forwardRef } from 'react'
import { cn } from '@/utils'

const InputNumber = forwardRef(({ style, ...props }, ref) => {
  return (
    <AntdInputNumber
      ref={ref}
      size="large"
      placeholder={props?.placeholder || '入力してください。'}
      className={cn('flex', props?.className)}
      style={{
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        ...style,
      }}
      {...props}
    />
  )
})

export default InputNumber
