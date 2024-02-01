import { PROPERTY_TYPE_ICONS } from './icons'
import { DATE_RANGE_TEXT, PLURAL_TIME_UNIT_TEXT, PROPERTY_TYPE_TEXT, TIME_UNIT_TEXT } from './texts'
import { DATE_RANGE_TYPE, GENDER, PROPERTY_TYPE, TIME_UNIT_TYPE } from './types'

export const GENDER_OPTIONS = Object.values(GENDER).map((gender) => ({
  label: `gender.${gender}`,
  value: gender,
}))

export const PROPERTY_TYPE_OPTIONS = Object.values(PROPERTY_TYPE).map((type) => ({
  label: PROPERTY_TYPE_TEXT[type],
  icon: PROPERTY_TYPE_ICONS[type],
  type,
}))

export const DATE_RANGE_OPTIONS = Object.values(DATE_RANGE_TYPE).map((type) => ({
  label: DATE_RANGE_TEXT[type],
  value: type,
}))

export const TIME_UNIT_OPTIONS = Object.values(TIME_UNIT_TYPE).map((type) => ({
  label: TIME_UNIT_TEXT[type],
  value: type,
}))

export const PLURAL_TIME_UNIT_OPTIONS = Object.values(TIME_UNIT_TYPE).map((type) => ({
  label: PLURAL_TIME_UNIT_TEXT[type],
  value: type,
}))
