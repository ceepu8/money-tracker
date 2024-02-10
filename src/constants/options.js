import { FILTER_SELECT_COLOR } from './colors'
import { DATE_FORMAT_FORMATS } from './formats'
import { PROPERTY_TYPE_ICONS } from './icons'
import {
  COLOR_TEXTS,
  DATE_FORMAT_AND_TIMEZONE_TEXTS,
  DATE_FORMAT_TEXTS,
  DATE_RANGE_TEXT,
  FILTER_NUMBER_TEXT,
  FILTER_SELECT_TEXT,
  FILTER_TEXT_TEXT,
  INCLUDE_TIME_REMIND_TEXTS,
  NOT_INCLUDE_TIME_REMIND_TEXTS,
  PLURAL_TIME_UNIT_TEXT,
  PROPERTY_TYPE_TEXT,
  TIME_UNIT_TEXT,
} from './texts'
import {
  COLOR_TYPES,
  DATE_FORMAT_AND_TIMEZONE_TYPES,
  DATE_FORMAT_TYPES,
  DATE_RANGE_TYPE,
  FILTER_NUMBER_TYPE,
  FILTER_SELECT_TYPE,
  FILTER_TEXT_TYPE,
  GENDER,
  INCLUDE_TIME_REMIND_TYPES,
  NOT_INCLUDE_TIME_REMIND_TYPES,
  PROPERTY_TYPE,
  TIME_UNIT_TYPE,
} from './types'

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

export const FILTER_TEXT_OPTIONS = Object.values(FILTER_TEXT_TYPE).map((type) => ({
  label: FILTER_TEXT_TEXT[type],
  value: type,
}))

export const FILTER_NUMBER_OPTIONS = Object.values(FILTER_NUMBER_TYPE).map((type) => ({
  label: FILTER_NUMBER_TEXT[type],
  value: type,
}))

export const FILTER_SELECT_OPTIONS = Object.values(FILTER_SELECT_TYPE).map((type) => ({
  label: FILTER_SELECT_TEXT[type],
  value: type,
}))

export const FILTER_SELECT_COLOR_OPTIONS = Object.values(COLOR_TYPES).map((type) => ({
  colorCode: FILTER_SELECT_COLOR[type],
  label: COLOR_TEXTS[type],
  value: type,
}))

export const NOT_INCLUDE_TIME_REMIND_OPTIONS = Object.values(NOT_INCLUDE_TIME_REMIND_TYPES).map(
  (type) => ({
    value: type,
    label: NOT_INCLUDE_TIME_REMIND_TEXTS[type],
  })
)

export const INCLUDE_TIME_REMIND_OPTIONS = Object.values(INCLUDE_TIME_REMIND_TYPES).map((type) => ({
  value: type,
  label: INCLUDE_TIME_REMIND_TEXTS[type],
}))

export const DATE_FORMAT_AND_TIMEZONE_OPTIONS = Object.values(DATE_FORMAT_AND_TIMEZONE_TYPES).map(
  (type) => ({
    value: type,
    label: DATE_FORMAT_AND_TIMEZONE_TEXTS[type],
  })
)

export const DATE_FORMAT_OPTIONS = Object.values(DATE_FORMAT_TYPES).map((type) => ({
  value: type,
  format: DATE_FORMAT_FORMATS[type],
  label: DATE_FORMAT_TEXTS[type],
}))
