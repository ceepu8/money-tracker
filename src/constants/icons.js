import {
  CalculatorIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  LinkIcon,
  MenuIcon,
} from '@/components/icons'
import { PROPERTY_TYPE } from './types'

export const PROPERTY_TYPE_ICONS = {
  [PROPERTY_TYPE.TEXT]: MenuIcon,
  [PROPERTY_TYPE.NUMBER]: CalculatorIcon,
  [PROPERTY_TYPE.SELECT]: ChevronDownIcon,
  [PROPERTY_TYPE.STATUS]: CalendarDaysIcon,
  [PROPERTY_TYPE.DATE]: CalendarDaysIcon,
  [PROPERTY_TYPE.URL]: LinkIcon,
}
