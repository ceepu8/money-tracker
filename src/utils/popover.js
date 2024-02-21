import {
  FilterDatePopover,
  FilterNumberPopover,
  FilterSelectPopover,
  FilterStatusPopover,
  FilterTextPopover,
} from '@/components/popover'

export const PROPERTY_TYPE_POPOVER = {
  status: FilterStatusPopover,
  date: FilterDatePopover,
  text: FilterTextPopover,
  url: FilterTextPopover,
  number: FilterNumberPopover,
  select: FilterSelectPopover,
}
