import { Divider as AntdDivider } from 'antd/lib'

const Divider = ({ children, className, style, ...props }) => {
  return (
    <AntdDivider className={className} style={style} {...props}>
      {children}
    </AntdDivider>
  )
}

export default Divider
