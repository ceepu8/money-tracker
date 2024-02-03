import { PROPERTY_TYPE_ICONS } from './icons'
import {
  DATE_RANGE_TEXT,
  NUMBER_FILTER_TEXT,
  PLURAL_TIME_UNIT_TEXT,
  PROPERTY_TYPE_TEXT,
  SELECT_FILTER_TEXT,
  TEXT_FILTER_TEXT,
  TIME_UNIT_TEXT,
} from './texts'
import {
  DATE_RANGE_TYPE,
  GENDER,
  NUMBER_FILTER_TYPE,
  PROPERTY_TYPE,
  SELECT_FILTER_TYPE,
  TEXT_FILTER_TYPE,
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

export const TEXT_FILTER_OPTIONS = Object.values(TEXT_FILTER_TYPE).map((type) => ({
  label: TEXT_FILTER_TEXT[type],
  value: type,
}))

export const NUMBER_FILTER_OPTIONS = Object.values(NUMBER_FILTER_TYPE).map((type) => ({
  label: NUMBER_FILTER_TEXT[type],
  value: type,
}))

export const SELECT_FILTER_OPTIONS = Object.values(SELECT_FILTER_TYPE).map((type) => ({
  label: SELECT_FILTER_TEXT[type],
  value: type,
}))
