/* eslint-disable no-useless-escape */
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const PHONE_NUMBER_REGEX = /^(([0-9]){10|11})$/

export const NUMBERS_ONLY_REGEX = /^\d+$/

export const NUMBER_REGEX = /[0-9]/

export const NO_SPACE_REGEX = /^\S+$/

export const UPPERCASE_REGEX = /[A-Z]/

export const LOWERCASE_REGEX = /[a-z]/

export const VALID_FILE_EXTENSIONS = ['png', 'jpg', 'jpe', 'jpeg', 'gif', 'JPG', 'PNG', 'heic']
