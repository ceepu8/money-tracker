'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { cn } from '@/utils'

const Button = ({ onClick, children, className }) => {
  return (
    <button
      type="button"
      className={cn(
        'flex-center h-[30px] w-[30px] shrink-0 rounded border-none transition-colors hover:bg-gray-100',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

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

const ExpenseTabSearch = ({ search, setToggleSearch, setSearchFalse }) => {
  const [value, setValue] = useState('')
  const searchRef = useRef(null)

  const onSetValue = (e) => {
    const { value: inputVal } = e.target
    if (!inputVal) return
    setValue(inputVal)
  }

  useEffect(() => {
    if (search) {
      searchRef.current.focus()
    }
  }, [search])

  return (
    <div className="flex items-center">
      <Button className="shrink-0" onClick={setToggleSearch}>
        <MagnifyingGlassIcon className="h-4 w-4" />
      </Button>
      <SearchInput
        active={search}
        ref={searchRef}
        value={value}
        onChange={onSetValue}
        onBlur={setSearchFalse}
      />
    </div>
  )
}

export default ExpenseTabSearch
