import { Pressable } from '@react-aria/interactions'
import { memo, useDeferredValue, useEffect, useRef } from 'react'
import { XMarkIcon } from '@/components/icons'
import { ButtonIcon, Input } from '@/components/ui'
import { COLOR_CODE_BY_TYPES } from '@/constants'
import { useBackspaceDetection } from '@/hooks/shared'
import { cn } from '@/utils'

const TagItem = memo(({ item, onDeleteItem }) => {
  const { id, label, color } = item || {}

  const style = {
    color: COLOR_CODE_BY_TYPES[color].TEXT_COLOR.RGBA,
    backgroundColor: COLOR_CODE_BY_TYPES[color].BADGE_COLOR.RGBA,
  }

  return (
    <div
      style={style}
      className="flex-center h-[18px] w-max truncate rounded pl-1 text-xs leading-5"
    >
      <span>{label}</span>
      <Pressable onPress={() => onDeleteItem(id)}>
        <div className="flex-center size-[18px] cursor-pointer opacity-60 transition-[opacity] hover:opacity-40">
          <XMarkIcon className="size-[11px] stroke-[3px]" />
        </div>
      </Pressable>
    </div>
  )
})

const SelectTagInput = ({ value, setValue, setCheckedList, checkedList }) => {
  const placeholder = checkedList.length === 0 ? 'Select one or more options' : ''
  const hasCloseButton = checkedList.length > 0 || value

  const deferredValue = useDeferredValue(value)

  const inputRef = useRef(null)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleDeleteLastItem = () => {
    if (!deferredValue) {
      const newCheckedList = checkedList.filter((_item, index) => index !== checkedList.length - 1)
      setCheckedList(newCheckedList)
    }
  }

  const handleDeleteItem = (deleteId) => {
    const newCheckedList = checkedList.filter((item) => item.id !== deleteId)
    setCheckedList(newCheckedList)
  }

  const renderCheckedItem = (item) => {
    return <TagItem key={item?.id} item={item} onDeleteItem={handleDeleteItem} />
  }

  useEffect(() => {
    inputRef?.current.focus()
  }, [checkedList])

  useBackspaceDetection(handleDeleteLastItem)

  return (
    <div
      className={cn(
        'relative flex min-h-[30px] flex-wrap gap-1 rounded-md border border-blue',
        'bg-light-gray p-1 pr-7 shadow-[0_0_0_2px_rgba(5,_145,_255,_0.2)]'
      )}
    >
      {(checkedList || []).map(renderCheckedItem)}
      <div className="flex-center h-[18px] min-w-[60px] flex-1">
        <Input
          size="small"
          ref={inputRef}
          value={deferredValue}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {hasCloseButton ? (
        <ButtonIcon
          size="small"
          onClick={() => setCheckedList([])}
          className="!absolute right-1 top-0.5"
          icon={<XMarkIcon className="size-2.5 stroke-[3px]" />}
        />
      ) : null}
    </div>
  )
}

export default SelectTagInput
