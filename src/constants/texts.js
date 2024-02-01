import { DATE_RANGE_TYPE, GENDER, PROPERTY_TYPE, TIME_UNIT_TYPE } from './types'

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

// email === text === URL
// number
// select === multi-select
// files and media -> no
// checkbox
// status
// date

export const DATE_RANGE_TEXT = {
  [DATE_RANGE_TYPE.PAST]: 'Past',
  [DATE_RANGE_TYPE.NEXT]: 'Next',
  [DATE_RANGE_TYPE.THIS]: 'This',
}

export const TIME_UNIT_TEXT = {
  [TIME_UNIT_TYPE.DAY]: 'day',
  [TIME_UNIT_TYPE.WEEK]: 'week',
  [TIME_UNIT_TYPE.MONTH]: 'month',
  [TIME_UNIT_TYPE.YEAR]: 'year',
}

export const PLURAL_TIME_UNIT_TEXT = {
  [TIME_UNIT_TYPE.DAY]: 'days',
  [TIME_UNIT_TYPE.WEEK]: 'weeks',
  [TIME_UNIT_TYPE.MONTH]: 'months',
  [TIME_UNIT_TYPE.YEAR]: 'years',
}
