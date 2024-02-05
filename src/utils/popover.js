import {
  FilterDatePopover,
  FilterNumberPopover,
  FilterSelectPopover,
  FilterTextPopover,
} from '@/components/popover'

export const PROPERTY_TYPE_POPOVER = {
  // status: CalendarDaysIcon,
  date: FilterDatePopover,
  text: FilterTextPopover,
  url: FilterTextPopover,
  number: FilterNumberPopover,
  select: FilterSelectPopover,
}
