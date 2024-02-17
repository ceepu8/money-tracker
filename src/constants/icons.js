import {
  CalculatorIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  CompleteIcon,
  InProgressIcon,
  LinkIcon,
  MenuIcon,
  TodoIcon,
} from '@/components/icons'
import { PROPERTY_TYPE, STATUS_TYPES } from './types'

export const PROPERTY_TYPE_ICONS = {
  [PROPERTY_TYPE.TEXT]: MenuIcon,
  [PROPERTY_TYPE.NUMBER]: CalculatorIcon,
  [PROPERTY_TYPE.SELECT]: ChevronDownIcon,
  [PROPERTY_TYPE.STATUS]: CalendarDaysIcon,
  [PROPERTY_TYPE.DATE]: CalendarDaysIcon,
  [PROPERTY_TYPE.URL]: LinkIcon,
}

export const STATUS_ICONS = {
  [STATUS_TYPES.TO_DO]: TodoIcon,
  [STATUS_TYPES.IN_PROGRESS]: InProgressIcon,
  [STATUS_TYPES.COMPLETE]: CompleteIcon,
}
