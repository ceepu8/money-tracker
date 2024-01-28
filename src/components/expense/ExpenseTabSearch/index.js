'use client'

/* eslint-disable no-unused-vars */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { forwardRef, useDeferredValue, useEffect, useRef, useState } from 'react'
import { ButtonIcon } from '@/components/ui'
import { cn } from '@/utils'

const SearchInput = forwardRef(({ active, onBlur, onChange }, ref) => {
  return (
    <div
      className={cn(
        'transition-all',
        active ? 'visible w-[180px] opacity-100' : 'invisible w-0 opacity-0'
      )}
    >
      <input
        ref={ref}
        type="text"
        placeholder="Type to research..."
        onBlur={onBlur}
        onChange={onChange}
        className={cn(
          'text-sm outline-none placeholder:text-[#7e7e7e]',
          active ? 'visible w-full opacity-100' : 'invisible w-0 opacity-0'
        )}
      />
    </div>
  )
})

const ExpenseTabSearch = ({ searchFlag }) => {
  const [hasSearch, _onOpenSeach, onCloseSearch, toggleHasSearch] = searchFlag

  const [value, setValue] = useState('')
  const deferredValue = useDeferredValue(value)

  const searchRef = useRef(null)

  const onChange = (e) => {
    const { value: inputVal } = e.target
    if (!inputVal) return
    setValue(inputVal)
  }

  useEffect(() => {
    if (hasSearch && searchRef.current) {
      searchRef.current.focus()
    }
  }, [hasSearch])

  return (
    <div className="flex items-center">
      <ButtonIcon
        icon={<MagnifyingGlassIcon className="size-4" />}
        className="shrink-0"
        onClick={toggleHasSearch}
      />
      <SearchInput
        active={hasSearch}
        ref={searchRef}
        value={deferredValue}
        onChange={onChange}
        onBlur={onCloseSearch}
      />
    </div>
  )
}

export default ExpenseTabSearch
