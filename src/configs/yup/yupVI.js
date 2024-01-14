/**
 * Yup VI Locale
 */
export const mixed = {
  default: ({ label }) => `${label ? `${label} có nội dung nhập không chính xác` : ''}.`,
  required: ({ label }) => `${label ? `${label} là bắt buộc` : ''}.`,
  oneOf: ({ label, values }) =>
    `${label ? `${label} phải là một trong những giá trị sau: ${values}` : ''}.`,
  notOneOf: ({ label, values }) =>
    `${label ? `${label} không được là một trong những giá trị sau: ${values}` : ''}.`,
  defined: ({ label }) => `${label ? `${label} là bắt buộc` : ''}.`,
}

// NOTE: @types/yup currently missing `string.uuid` field definition.
export const string = {
  length: ({ label, length }) => `${label ? `${label} phải có độ dài ${length} ký tự` : ''}.`,
  min: ({ label, min }) => `${label ? `${label} phải có ít nhất ${min} ký tự` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} phải có tối đa ${max} ký tự` : ''}.`,
  matches: ({ label, regex }) => `${label ? `${label} phải khớp với mẫu sau: ${regex}` : ''}.`,
  email: ({ label }) => `${label ? `${label} phải là một địa chỉ email hợp lệ` : ''}.`,
  url: ({ label }) => `${label ? `${label} phải là một URL hợp lệ` : ''}.`,
  uuid: ({ label }) => `${label ? `${label} phải là một UUID hợp lệ` : ''}.`,
  trim: ({ label }) => `${label ? `Loại bỏ khoảng trắng đầu và cuối của ${label}` : ''}.`,
  lowercase: ({ label }) => `${label ? `${label} phải là chữ thường` : ''}.`,
  uppercase: ({ label }) => `${label ? `${label} phải là chữ in hoa` : ''}.`,
}

// NOTE: @types/yup currently missing `string.notEqual` field definition.
export const number = {
  min: ({ label, min }) => `${label ? `${label} phải lớn hơn hoặc bằng ${min}` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} phải nhỏ hơn hoặc bằng ${max}` : ''}.`,
  lessThan: ({ label, less }) => `${label ? `${label} phải nhỏ hơn ${less}` : ''}.`,
  moreThan: ({ label, more }) => `${label ? `${label} phải lớn hơn ${more}` : ''}.`,
  notEqual: ({ label, notEqual }) => `${label ? `${label} không được bằng ${notEqual}` : ''}.`,
  positive: ({ label }) => `${label ? `${label} phải là số dương` : ''}.`,
  negative: ({ label }) => `${label ? `${label} phải là số âm` : ''}.`,
  integer: ({ label }) => `${label ? `${label} phải là số nguyên` : ''}.`,
}

// To format date, use the second argument of yup.date().min/max.
export const date = {
  min: ({ label, min }) => `${label ? `${label} phải là ngày sau hoặc bằng ${min}` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} phải là ngày trước hoặc bằng ${max}` : ''}.`,
}

export const object = {
  noUnknown: ({ label, unknown }) =>
    `${label ? `${label} không thể có các khóa không xác định: ${unknown}` : ''}.`,
}

export const array = {
  min: ({ label, min }) => `${label ? `${label} phải có ít nhất ${min} mục` : ''}.`,
  max: ({ label, max }) => `${label ? `${label} phải có tối đa ${max} mục` : ''}.`,
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
