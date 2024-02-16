import { FILTER_SELECT_COLOR } from '@/constants'

export const getFilterSelectStyle = (color) => {
  return {
    color: FILTER_SELECT_COLOR[color].TEXT_COLOR.RGBA,
    backgroundColor: FILTER_SELECT_COLOR[color].BADGE_COLOR.RGBA,
  }
}
