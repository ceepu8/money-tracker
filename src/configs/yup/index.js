import * as yup from 'yup'
import * as yupENLocale from './yupEN'
import * as yupVILocale from './yupVI'

export const useYupValidate = (locale) => {
  const locales = {
    en: yupENLocale.suggestive,
    vi: yupVILocale.suggestive,
  }

  if (locale in locales) {
    yup.setLocale({
      ...locales[locale],
      mixed: {
        ...locales[locale].mixed,
      },
    })
  }
}
