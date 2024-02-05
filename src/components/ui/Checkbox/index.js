import { Checkbox as AntdCheckbox } from 'antd'

const Checkbox = ({ children, checked, disabled, onChange, ...props }) => {
  return (
    <AntdCheckbox checked={checked} disabled={disabled} onChange={onChange} {...props}>
      {children}
    </AntdCheckbox>
  )
}

export default Checkbox
