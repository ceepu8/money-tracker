import { EllipsisHorizontalIcon, MenuIcon, TrashIcon } from '@/components/icons'
import { Button, ButtonIcon, Popover } from '@/components/ui'

const ExtraSettingPopoverContent = ({ onDelete, onAdvancedFilter }) => {
  return (
    <div className="-m-2 flex flex-col">
      <Button
        block
        type="text"
        size="medium"
        className="!justify-start"
        icon={<TrashIcon className="size-4" />}
        onClick={onDelete}
      >
        Delete Filter
      </Button>
      <Button
        block
        type="text"
        size="medium"
        className="!justify-start"
        icon={<MenuIcon className="size-4" />}
        onClick={onAdvancedFilter}
      >
        Add to advanced filter
      </Button>
    </div>
  )
}

const ExtraSettingPopover = ({ open, onOpenChange, onDelete, onAdvancedFilter }) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      content={
        <ExtraSettingPopoverContent onDelete={onDelete} onAdvancedFilter={onAdvancedFilter} />
      }
      placement="rightTop"
      rootClassName="w-[240px]"
    >
      <ButtonIcon size="small" icon={<EllipsisHorizontalIcon className="size-5" />} />
    </Popover>
  )
}

export default ExtraSettingPopover
