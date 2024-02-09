import { Pressable } from '@react-aria/interactions'
import { CheckIcon } from '@/components/icons'

const MenuItem = ({ item, isActive, onChange }) => {
  const { value, label } = item || {}
  return (
    <Pressable onPress={() => onChange(value)}>
      <div className="flex-between h-7 cursor-pointer rounded px-2 transition-colors hover:bg-[rgba(55,_53,_47_,0.08)]">
        <span className="text-sm">{label}</span>
        {isActive && <CheckIcon className="size-3" />}
      </div>
    </Pressable>
  )
}

const Menu = ({ list, value, onChange }) => {
  const renderItem = (item) => {
    const isActive = value === item.value
    return <MenuItem key={item.value} isActive={isActive} item={item} onChange={onChange} />
  }

  return <div className="flex flex-col">{list.map(renderItem)}</div>
}

export default Menu
