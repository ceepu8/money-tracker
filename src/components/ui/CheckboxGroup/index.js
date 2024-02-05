import { Checkbox as AntdCheckbox } from 'antd'

const AntdCheckboxGroup = AntdCheckbox.Group

const CheckboxGroup = ({ children, options, value, defaultValue, onChange, name, ...props }) => {
  return (
    <AntdCheckboxGroup
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      options={options}
      name={name}
      {...props}
    >
      {children}
    </AntdCheckboxGroup>
  )
}

export default CheckboxGroup
