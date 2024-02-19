export const configTheme = {
  hashed: false,
  token: {
    fontSize: 16,
    fontFamily: 'var(--font-sans)',

    colorBorder: 'var(--border)',
    colorPrimary: 'var(--main)',
    colorBgBase: 'var(--bg)',
    colorTextBase: 'var(--fg)',
    colorBgContainer: 'var(--bg)',

    controlHeightLG: 48,
    fontSizeLG: 16,
  },
  components: {
    Button: {
      colorPrimary: 'var(--main)',
      hoverBorderColor: 'var(--hover)',
      activeBorderColor: 'var(--selection)',
      controlOutline: 'var(--bg-gray)',
    },
    Input: {
      activeBorderColor: 'var(--selection)',
      hoverBorderColor: 'var(--hover)',
      controlOutline: 'var(--bg-gray)',
    },
    Select: {
      colorPrimary: 'var(--main)',
      colorPrimaryHover: 'var(-primary)',
      controlOutline: 'var(--bg-gray)',
      optionSelectedBg: 'var(--selection)',
      colorBgContainer: 'var(--bg)',
    },
    Table: {
      borderColor: 'var(--border)',
    },
    Tabs: {
      colorBorderSecondary: 'var(--border)',
    },
    Popover: {
      colorBgElevated: 'var(--bg)',
    },
    Checkbox: {
      colorPrimary: 'var(--main)',
      colorPrimaryHover: 'var(--hover)',
    },
  },
}

export const APP_HEIGHT_HEADER = 74
export const APP_WIDTH_SIDER = 216
