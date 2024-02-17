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
  const rootClassName = cn('flex items-center justify-center')

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
      size={size}
      id="_button_"
      htmlType={htmlType}
      className={cn(rootClassName, className)}
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
