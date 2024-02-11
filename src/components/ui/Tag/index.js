import { Pressable } from '@react-aria/interactions'
import { memo } from 'react'
import { XMarkIcon } from '@/components/icons'
import { cn } from '@/utils'

const Tag = memo(({ item, size = 'small', onRemove, style, className, ...props }) => {
  const { id, label } = item || {}

  const sizeClassName = {
    small: 'h-[18px] leading-[18px] text-xs',
    medium: 'h-5 leading-5 text-sm',
  }

  return (
    <div
      style={style}
      className={cn(
        'flex-center w-max truncate rounded pl-1',
        !onRemove && 'pr-1',
        sizeClassName[size],
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {onRemove && (
        <Pressable onPress={() => onRemove(id)}>
          <div className="flex-center size-[18px] cursor-pointer opacity-60 transition-[opacity] hover:opacity-40">
            <XMarkIcon className="size-[11px] stroke-[3px]" />
          </div>
        </Pressable>
      )}
    </div>
  )
})

export default Tag
