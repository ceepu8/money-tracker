import { Button as AntdButton, message } from 'antd'
import noop from 'lodash/noop'
import { cn } from '@/utils'
import Link from '../Link'

const ANTD_BUTTON_TYPES = ['default', 'primary', 'ghost', 'dashed', 'link', 'text', 'success']

// SizeType = 'small' | 'middle' | 'large' | undefined

const Button = ({
  label,
  size = 'large',
  type = 'primary',
  disabled = false,
  htmlType = 'button',
  linkClassName = '',
  className = '',
  children,
  onClick,
  href,
  ...props
}) => {
  const customClassName = cn('flex-center', {
    'bg-secondary text-white border-secondary': type === 'secondary',
    'bg-green text-white border-green': type === 'success',
    'bg-error text-white border-danger': type === 'error',
  })

  const customType = ANTD_BUTTON_TYPES.includes(type) && htmlType !== 'submit' ? type : 'default'

  const onClickDefault = () => {
    if (htmlType === 'submit' || href) return
    message.warning('Developing function')
  }

  if (href) {
    return (
      <Link className={cn(linkClassName)} href={href} disabled={disabled}>
        <Button onClick={noop} {...{ ...props, type, size, disabled }}>
          {label || children}
        </Button>
      </Link>
    )
  }

  return (
    <AntdButton
      id="base_admin_button"
      size={size}
      htmlType={htmlType}
      className={cn(customClassName, className)}
      onClick={onClick || onClickDefault}
      disabled={disabled}
      type={customType}
      shape="square"
      {...props}
    >
      {label || children}
    </AntdButton>
  )
}

export default Button
