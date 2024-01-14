/* eslint-disable no-console */

/* eslint-disable class-methods-use-this */
import { __DEBUG__ } from '@/constants'

function blue(text) {
  return `\x1b[34m${text}\x1b[0m`
}

class Logger {
  info(message) {
    if (__DEBUG__) {
      console.info(blue('[INFO]'), message)
    }
  }

  log(message) {
    if (__DEBUG__) {
      console.log(blue('[LOG]'), message)
    }
  }

  warn(message) {
    if (__DEBUG__) {
      console.warn(message)
    }
  }

  error(message) {
    if (__DEBUG__) {
      console.error(message)
    }
    return ''
  }
}

const logger = new Logger()
export default logger
