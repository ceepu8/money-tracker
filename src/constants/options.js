import { PROPERTY_TYPE_ICONS } from './icons'
import { PROPERTY_TYPE_TEXT } from './texts'
import { GENDER, PROPERTY_TYPE } from './types'

export const GENDER_OPTIONS = Object.values(GENDER).map((gender) => ({
  label: `gender.${gender}`,
  value: gender,
}))

export const PROPERTY_TYPE_OPTIONS = Object.values(PROPERTY_TYPE).map((type) => ({
  label: PROPERTY_TYPE_TEXT[type],
  icon: PROPERTY_TYPE_ICONS[type],
  type,
}))

export const DATE_RANGE_OPTIONS = [
  {
    value: 'past',
    label: 'Past',
  },
  {
    value: 'this',
    label: 'This',
  },
  {
    value: 'next',
    label: 'Next',
  },
]

export const TIME_UNIT_OPTIONS = [
  {
    value: 'day',
    label: 'Day',
  },
  {
    value: 'week',
    label: 'Week',
  },
  {
    value: 'month',
    label: 'Month',
  },
  {
    value: 'year',
    label: 'Year',
  },
]
