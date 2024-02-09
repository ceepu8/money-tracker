import { Switch as AntdSwitch } from 'antd'

const Switch = ({
  children,
  value,
  defaultChecked,
  defaultValue,
  loading,
  disabled,
  onChange,
  ...props
}) => {
  return (
    <AntdSwitch
      defaultChecked={defaultChecked}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      loading={loading}
      value={value}
      {...props}
    >
      {children}
    </AntdSwitch>
  )
}

export default Switch
