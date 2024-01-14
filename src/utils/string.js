/* eslint-disable no-console */
import queryString from 'query-string'
import { locales } from '@/constants'

export const parseQueryString = (s = '', options = {}) => {
  try {
    return queryString.parse(s, options)
  } catch (error) {
    console.error(`Error parsing query string: ${error.message}`)
    return {}
  }
}

export const stringifyQueryString = (o = {}, options = {}) => {
  try {
    return queryString.stringify(o, options)
  } catch (error) {
    console.error(`Error stringifying query object: ${error.message}`)
    return ''
  }
}

export const removeLocalesFromPathname = (pathname = '') =>
  pathname.replace(new RegExp(`\\/(${locales.join('|')})`, 'g'), '').replace(/^\/+/, '/')
