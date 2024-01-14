'use client'

import noop from 'lodash/noop'
import { forwardRef, memo, useMemo } from 'react'
import { cn } from '@/utils'

const autoAttributes = {
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
}

const Input = forwardRef((props, ref) => {
  const {
    onChange = noop,
    type = 'text',
    value = '',
    error,
    left,
    right,
    disabled,
    className,
    placeholder,
    wrapperClassName,
    ...inputProps
  } = props

  const rootClassnames = useMemo(
    () =>
      cn(
        'block h-12 w-full rounded-lg border border-gray px-4 text-base font-bold text-secondary outline-none enabled:hover:border-primary',
        'disabled:bg-table-header disabled:text-white disabled:shadow-none',
        {
          'invalid:text-red-300 focus:border-red enabled:hover:border-red': Boolean(error),
          peer: Boolean(error),
        }
      ),
    [error]
  )

  return (
    <div className={cn('relative w-full rounded-lg ease-linear', wrapperClassName)}>
      {left}
      <input
        type={type}
        spellCheck="false"
        className={cn(rootClassnames, className)}
        aria-invalid={error ? 'true' : 'false'}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
        ref={ref}
        {...autoAttributes}
        {...inputProps}
      />
      {right}
    </div>
  )
})

export default memo(Input)
