import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { Routes } from '@/constants/routes'

export function cn(...inputs) {
  return twMerge(classNames(inputs))
}

export function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ref.current = value
      }
    })
  }
}

export const checkIsPublicPage = (pathname) => {
  if (pathname === Routes.HOME) return true
  return Object.values(Routes.PUBLIC).some((route) => pathname.startsWith(route))
}
