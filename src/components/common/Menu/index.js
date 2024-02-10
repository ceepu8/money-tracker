import { Pressable } from '@react-aria/interactions'
import { CheckIcon } from '@/components/icons'
import { cn } from '@/utils'

const MenuItem = ({ children, item, isActive, isDisabled, onClick, className, ...props }) => {
  const { value, label } = item || {}

  const handleOnPress = () => {
    if (isDisabled) return
    onClick?.(value)
  }

  return (
    <Pressable onPress={handleOnPress}>
      <li
        className={cn(
          'flex-between h-7 cursor-pointer rounded px-2 transition-colors hover:bg-[rgba(55,_53,_47_,0.08)]',
          'text-sm',
          isDisabled ? 'cursor-default opacity-50 hover:bg-transparent' : '',
          className
        )}
        {...props}
      >
        {children ? children : <span>{label}</span>}
        {isActive && <CheckIcon className="size-3" />}
      </li>
    </Pressable>
  )
}

const Menu = ({ children, className, list, value, onChange, style, ...props }) => {
  const renderItem = (item) => {
    const { value: itemValue } = item || {}
    const isActive = value === itemValue

    return <MenuItem key={itemValue} isActive={isActive} item={item} onClick={onChange} />
  }

  return (
    <ul className={cn('flex flex-col', className)} style={style} {...props}>
      {list?.length > 0 ? list.map(renderItem) : children}
    </ul>
  )
}

Menu.Item = MenuItem

export default Menu
