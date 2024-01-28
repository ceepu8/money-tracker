import {
  CalculatorIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  LinkIcon,
  MenuIcon,
} from '@/components/icons'
import { FilterDatePopover } from '@/components/popover'

export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
}

export const COLUMN_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
  MULTI_SELECT: 'multi-select',
  STATUS: 'status',
  DATE: 'date',
  FILES_AND_MEDIA: 'files-and-media',
  URL: 'url',
  CHECKBOX: 'checkbox',
  EMAIL: 'email',
}

export const PROPERTY_LIST = [
  {
    title: 'Text',
    type: COLUMN_TYPE.TEXT,
    icon: MenuIcon,
    id: 'text',
  },
  {
    title: 'Number',
    type: COLUMN_TYPE.NUMBER,
    icon: CalculatorIcon,
    id: 'number',
  },
  {
    title: 'URL',
    type: COLUMN_TYPE.URL,
    icon: LinkIcon,
    id: 'url',
  },
  {
    title: 'Method',
    type: COLUMN_TYPE.TEXT,
    icon: MenuIcon,
    id: 'method',
  },
  {
    title: 'Date',
    type: COLUMN_TYPE.DATE,
    icon: CalendarDaysIcon,
    id: 'date',
  },
  {
    title: 'Category',
    type: COLUMN_TYPE.SELECT,
    icon: ChevronDownIcon,
    id: 'category',
  },
  {
    title: 'Status',
    type: COLUMN_TYPE.STATUS,
    icon: CalendarDaysIcon,
    id: 'status',
  },
]

export const ICON_BY_PROPERTY = {
  text: MenuIcon,
  number: CalculatorIcon,
  url: LinkIcon,
  date: CalendarDaysIcon,
  select: ChevronDownIcon,
  status: CalendarDaysIcon,
}

export const POPOVER_BY_PROPERTY = {
  // text: MenuIcon,
  // number: CalculatorIcon,
  // url: LinkIcon,
  // select: ChevronDownIcon,
  // status: CalendarDaysIcon,
  date: FilterDatePopover,
}
