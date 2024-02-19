'use client'

import { ConfigProvider } from 'antd'
import localeVN from 'antd/locale/vi_VN'

import { configTheme } from '@/configs/antd'
import StyledComponentsRegistry from '@/libs/antd.registry'

export default function AntdProvider({ children }) {
  return (
    <ConfigProvider locale={localeVN} theme={configTheme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ConfigProvider>
  )
}
