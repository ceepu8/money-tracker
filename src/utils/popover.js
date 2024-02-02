import FilterDatePopover from '@/components/popover/FilterDatePopover'
import FilterNumberPopover from '@/components/popover/FilterNumberPopover'
import FilterTextPopover from '@/components/popover/FilterTextPopover'

export const PROPERTY_TYPE_POPOVER = {
  // url: LinkIcon,
  // select: ChevronDownIcon,
  // status: CalendarDaysIcon,
  date: FilterDatePopover,
  text: FilterTextPopover,
  number: FilterNumberPopover,
}
