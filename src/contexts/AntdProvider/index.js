import { ConfigProvider } from 'antd'
import localeVN from 'antd/locale/vi_VN'
import { configTheme } from '@/configs/antd'

export default function AntdProvider({ children }) {
  return (
    <ConfigProvider locale={localeVN} theme={configTheme}>
      {children}
    </ConfigProvider>
  )
}
