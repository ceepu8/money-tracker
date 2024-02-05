import {
  COLOR_TYPES,
  DATE_RANGE_TYPE,
  FILTER_NUMBER_TYPE,
  FILTER_SELECT_TYPE,
  FILTER_TEXT_TYPE,
  GENDER,
  PROPERTY_TYPE,
  TIME_UNIT_TYPE,
} from './types'

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

export const FILTER_TEXT_TEXT = {
  [FILTER_TEXT_TYPE.IS]: 'Is',
  [FILTER_TEXT_TYPE.IS_NOT]: 'Is not',
  [FILTER_TEXT_TYPE.CONTAINS]: 'Contains',
  [FILTER_TEXT_TYPE.DOES_NOT_CONTAIN]: 'Does not contain',
  [FILTER_TEXT_TYPE.STARTS_WITH]: 'Starts with',
  [FILTER_TEXT_TYPE.ENDS_WITH]: 'Ends with',
  [FILTER_TEXT_TYPE.IS_EMPTY]: 'Is empty',
  [FILTER_TEXT_TYPE.IS_NOT_EMPTY]: 'Is not empty',
}

export const FILTER_NUMBER_TEXT = {
  [FILTER_NUMBER_TYPE.EQUAL]: <>&#61;</>,
  [FILTER_NUMBER_TYPE.NOT_EQUAL]: <>&#8800;</>,
  [FILTER_NUMBER_TYPE.GREATER_THAN]: <>&#62;</>,
  [FILTER_NUMBER_TYPE.LESS_THAN]: <>&#60;</>,
  [FILTER_NUMBER_TYPE.GREATER_THAN_OR_EQUAL_TO]: <>&#8805;</>,
  [FILTER_NUMBER_TYPE.LESS_THAN_OR_EQUAL_TO]: <>&#8804;</>,
  [FILTER_NUMBER_TYPE.IS_EMPTY]: 'Is empty',
  [FILTER_NUMBER_TYPE.IS_NOT_EMPTY]: 'Is not empty',
}

export const FILTER_SELECT_TEXT = {
  [FILTER_SELECT_TYPE.IS]: 'Is',
  [FILTER_SELECT_TYPE.IS_NOT]: 'Is not',
  [FILTER_SELECT_TYPE.IS_EMPTY]: 'Is empty',
  [FILTER_SELECT_TYPE.IS_NOT_EMPTY]: 'Is not empty',
}

export const COLOR_TEXTS = {
  [COLOR_TYPES.RED]: 'Red',
  [COLOR_TYPES.PINK]: 'Pink',
  [COLOR_TYPES.PURPLE]: 'Purple',
  [COLOR_TYPES.BLUE]: 'Blue',
  [COLOR_TYPES.GREEN]: 'Green',
  [COLOR_TYPES.YELLOW]: 'Yellow',
  [COLOR_TYPES.ORANGE]: 'Orange',
  [COLOR_TYPES.BROWN]: 'Brown',
  [COLOR_TYPES.GRAY]: 'Gray',
  [COLOR_TYPES.LIGHT_GRAY]: 'Light gray',
}
