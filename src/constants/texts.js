import { GENDER, PROPERTY_TYPE } from './types'

export const GENDER_TEXT = {
  [GENDER.MALE]: 'gender.male',
  [GENDER.FEMALE]: 'gender.female',
  [GENDER.OTHER]: 'gender.other',
}

export const PROPERTY_TYPE_TEXT = {
  [PROPERTY_TYPE.TEXT]: 'Text',
  [PROPERTY_TYPE.NUMBER]: 'Number',
  [PROPERTY_TYPE.SELECT]: 'Select',
  [PROPERTY_TYPE.MULTI_SELECT]: 'Multi select',
  [PROPERTY_TYPE.STATUS]: 'Status',
  [PROPERTY_TYPE.DATE]: 'Date',
  [PROPERTY_TYPE.FILES_AND_MEDIA]: 'Files and Media',
  [PROPERTY_TYPE.URL]: 'URL',
  [PROPERTY_TYPE.CHECKBOX]: 'Checkbox',
  [PROPERTY_TYPE.EMAIL]: 'Email',
}
