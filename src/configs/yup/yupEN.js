/**
 * Yup EN Locale
 */
export const mixed = {
  default: ({ label }) => `${label ? `${label} has an incorrect input` : ''}.`,
  required: ({ label }) => `${label ? `${label} is required` : ''}.`,
  oneOf: ({ label, values }) =>
    `${label ? `${label} must be one of the following: ${values}` : ''}.`,
  notOneOf: ({ label, values }) =>
    `${label ? `${label} must not be one of the following: ${values}` : ''}.`,
  defined: ({ label }) => `${label ? `${label} is required` : ''}.`,
}

// NOTE: @types/yup currently missing `string.uuid` field definition.
export const string = {
  length: ({ label, length }) => `${label ? `${label} must be ${length} characters` : ''}.`,
  min: ({ label, min }) => `${label ? `${label} must be at least ${min} characters` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} must be at most ${max} characters` : ''}.`,
  matches: ({ label, regex }) =>
    `${label ? `${label} must match the following pattern: ${regex}` : ''}.`,
  email: ({ label }) => `${label ? `${label} must be a valid email address` : ''}.`,
  url: ({ label }) => `${label ? `${label} must be a valid URL` : ''}.`,
  uuid: ({ label }) => `${label ? `${label} must be a valid UUID` : ''}.`,
  trim: ({ label }) => `${label ? `Remove leading and trailing whitespaces from ${label}` : ''}.`,
  lowercase: ({ label }) => `${label ? `${label} must be lowercase` : ''}.`,
  uppercase: ({ label }) => `${label ? `${label} must be uppercase` : ''}.`,
}

// NOTE: @types/yup currently missing `string.notEqual` field definition.
export const number = {
  min: ({ label, min }) => `${label ? `${label} must be greater than or equal to ${min}` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} must be less than or equal to ${max}` : ''}.`,
  lessThan: ({ label, less }) => `${label ? `${label} must be less than ${less}` : ''}.`,
  moreThan: ({ label, more }) => `${label ? `${label} must be greater than ${more}` : ''}.`,
  notEqual: ({ label, notEqual }) => `${label ? `${label} must not be equal to ${notEqual}` : ''}.`,
  positive: ({ label }) => `${label ? `${label} must be a positive number` : ''}.`,
  negative: ({ label }) => `${label ? `${label} must be a negative number` : ''}.`,
  integer: ({ label }) => `${label ? `${label} must be an integer` : ''}.`,
}

// To format date, use the second argument of yup.date().min/max.
export const date = {
  min: ({ label, min }) => `${label ? `${label} must be on or after ${min}` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} must be on or before ${max}` : ''}.`,
}

export const object = {
  noUnknown: ({ label, unknown }) =>
    `${label ? `${label} cannot have unknown keys: ${unknown}` : ''}.`,
}

export const array = {
  min: ({ label, min }) => `${label ? `${label} must have at least ${min} items` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} must have at most ${max} items` : ''}.`,
}

/**
 * Suggestive messages.
 */
export const suggestive = {
  mixed,
  string,
  number,
  date,
  object,
  array,
}
