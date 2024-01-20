import { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils'

const CLICK = {
  SINGLE: 1,
  DOUBLE: 2,
}

const ExpenseTabTitle = ({ children, icon: Icon }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [width, setWidth] = useState(0)
  const [value, setValue] = useState(children)

  const inputRef = useRef(null)
  const spanRef = useRef(null)

  const onClick = (e) => {
    switch (e.detail) {
      case CLICK.SINGLE:
        break

      case CLICK.DOUBLE:
        setIsEditing(true)
        break

      default:
        break
    }
  }

  const onChangeValue = (e) => {
    const { value: eValue } = e.target
    if (!eValue) return
    setValue(eValue)
  }

  const onBlur = () => {
    setIsEditing(false)
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus()
    }
  }, [isEditing])

  useEffect(() => {
    if (spanRef?.current && !isEditing) {
      const { offsetWidth } = spanRef.current
      setWidth(offsetWidth)
    }
  }, [isEditing])

  return (
    <button type="button" onClick={onClick} className="flex items-center gap-x-2 px-2 py-1">
      <Icon className="h-4 w-4" />
      <span
        ref={spanRef}
        className={cn('max-w-[80px] overflow-hidden truncate text-sm', isEditing && 'hidden')}
      >
        {value}
      </span>
      <input
        value={value}
        onChange={onChangeValue}
        onBlur={onBlur}
        ref={inputRef}
        className={cn('hidden bg-inherit outline-none', isEditing && 'block')}
        style={{
          width: `${width}px`,
        }}
      />
    </button>
  )
}

export default ExpenseTabTitle
