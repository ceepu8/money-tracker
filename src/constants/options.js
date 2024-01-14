import { GENDER } from './types'

export const GENDER_OPTIONS = Object.values(GENDER).map((gender) => ({
  label: `gender.${gender}`,
  value: gender,
}))
