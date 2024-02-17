import { FILTER_COLOR } from '@/constants'

export const getFilterSelectStyle = (color) => {
  return {
    color: FILTER_COLOR[color].TEXT_COLOR.RGBA,
    backgroundColor: FILTER_COLOR[color].BADGE_COLOR.RGBA,
  }
}
