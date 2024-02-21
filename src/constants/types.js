export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
}

export const PROPERTY_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
  MULTI_SELECT: 'multi-select',
  STATUS: 'status',
  DATE: 'date',
  FILES_AND_MEDIA: 'files-and-media',
  URL: 'url',
  CHECKBOX: 'checkbox',
  EMAIL: 'email',
}

export const DATE_RANGE_TYPE = {
  THIS: 'this',
  NEXT: 'next',
  PAST: 'past',
}

export const TIME_UNIT_TYPE = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
}

export const FILTER_TEXT_TYPE = {
  IS: 'is',
  IS_NOT: 'isNot',
  CONTAINS: 'contains',
  DOES_NOT_CONTAIN: 'doesNotContain',
  STARTS_WITH: 'startsWith',
  ENDS_WITH: 'endsWith',
  IS_EMPTY: 'isEmpty',
  IS_NOT_EMPTY: 'isNotEmpty',
}

export const FILTER_NUMBER_TYPE = {
  EQUAL: 'equal',
  NOT_EQUAL: 'notEqual',
  GREATER_THAN: 'greaterThan',
  LESS_THAN: 'lessThan',
  GREATER_THAN_OR_EQUAL_TO: 'greaterThanOrEqualTo',
  LESS_THAN_OR_EQUAL_TO: 'lessThanOrEqualTo',
  IS_EMPTY: 'isEmpty',
  IS_NOT_EMPTY: 'isNotEmpty',
}

export const FILTER_SELECT_TYPE = {
  IS: 'is',
  IS_NOT: 'isNot',
  IS_EMPTY: 'isEmpty',
  IS_NOT_EMPTY: 'isNotEmpty',
}

export const COLOR_TYPES = {
  RED: 'red',
  PINK: 'pink',
  PURPLE: 'purple',
  BLUE: 'blue',
  GREEN: 'green',
  YELLOW: 'yellow',
  ORANGE: 'orange',
  BROWN: 'brown',
  GRAY: 'gray',
  LIGHT_GRAY: 'light-gray',
}

export const NOT_INCLUDE_TIME_REMIND_TYPES = {
  NONE: 'none',
  ON_DAY_OF_EVENT: 'onDayOfEvent',
  ONE_DAY_BEFORE: 'oneDayBefore',
  TWO_DAYS_BEFORE: 'twoDaysBefore',
  ONE_WEEK_BEFORE: 'oneWeekBefore',
}

export const INCLUDE_TIME_REMIND_TYPES = {
  NONE: 'none',
  AT_TIME_OF_EVENT: 'atTimeOfEvent',
  FIVE_MINUTES_BEFORE: 'fiveMinutesBefore',
  TEN_MINUTES_BEFORE: 'tenMinutesBefore',
  FIFTEEN_MINUTES_BEFORE: 'fifteenMinutesBefore',
  THIRTY_MINUTES_BEFORE: 'thirtyMinutesBefore',
  ONE_HOUR_BEFORE: 'oneHourBefore',
  TWO_HOURS_BEFORE: 'twoHoursBefore',
  ONE_DAY_BEFORE: 'oneDayBefore',
  TWO_DAYS_BEFORE: 'twoDaysBefore',
}

export const DATE_FORMAT_TYPES = {
  FULL_DATE: 'fullDate',
  MONTH_DAY_YEAR: 'monthDayYear',
  DAY_MONTH_YEAR: 'dayMonthYear',
  YEAR_MONTH_DAY: 'yearMonthDay',
  RELATIVE: 'relative',
}

export const DATE_FORMAT_AND_TIMEZONE_TYPES = {
  DATE_FORMAT: 'dateFormat',
  TIME_FORMAT: 'timeFormat',
  TIMEZONE: 'timezone',
}

export const STATUS_TYPES = {
  TO_DO: 'to-do',
  IN_PROGRESS: 'in-progress',
  COMPLETE: 'complete',
}
