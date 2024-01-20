'use client'

import * as Label from '@radix-ui/react-label'
import { useField } from 'formik'
import { Children, cloneElement, useId } from 'react'
import { cn } from '@/utils'

const FormItem = ({
  name,
  required,
  children,
  className,
  label,
  labelClassName,
  wrapperInputClassName,
  inputClassName,
  requiredClassName,
  wrapperClassName,
  textLabelClassName,
  helpComponent,
  alertMessage,
  hideErrorMessage = false,
  bordered = true,
  ...inputProps
}) => {
  const formItemId = useId()
  const child = Children.only(children)
  const [field, meta] = useField(name)

  return (
    <div className={cn('flex flex-col justify-between', className)}>
      {label && (
        <Label.Root
          className={cn('flex shrink-0 items-center', labelClassName)}
          htmlFor={formItemId}
        >
          <span className={cn('text-base font-bold lg:text-lg', textLabelClassName)}>{label}</span>
          {required && (
            <span
              className={cn(
                'border-dark-gray ml-3 rounded border bg-secondary px-2 py-0.5 text-[10px] text-white lg:ml-5',
                requiredClassName
              )}
            >
              Required
            </span>
          )}
        </Label.Root>
      )}
      <div className={cn(label && 'mt-2 w-full', wrapperInputClassName)}>
        {cloneElement(child, {
          ...field,
          ...inputProps,
          className: cn('w-full p-2', { 'border border-dark': bordered }, inputClassName),
          id: formItemId,
        })}
        {alertMessage && (
          <p className="text-muted ml-0 mt-2.5 whitespace-pre-wrap text-xs lg:ml-4">
            {alertMessage}
          </p>
        )}
        {!hideErrorMessage && (
          <p
            className={cn('text-danger text-xs', !meta.error ? 'max-h-0' : 'mt-1 max-h-[40px]')}
            role="alert"
            style={{
              transition: !meta.error ? 'max-height 0.15s ease-out' : 'max-height 0.25s ease-in',
            }}
          >
            {meta.error}
          </p>
        )}
        {helpComponent}
      </div>
    </div>
  )
}

export default FormItem
