import { FilterDatePopover } from '@/components/popover'

export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
}

export const PROPERTY_TYPE = {
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

export const POPOVER_BY_PROPERTY = {
  // text: MenuIcon,
  // number: CalculatorIcon,
  // url: LinkIcon,
  // select: ChevronDownIcon,
  // status: CalendarDaysIcon,
  date: FilterDatePopover,
}
