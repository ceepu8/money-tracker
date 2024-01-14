'use client'

import { useMemo } from 'react'
import { FormProvider, Input } from '@/components/form'
import { useDebouncedCallback } from '@/hooks/shared'
import { loginSchema } from '@/validations/login.schema'

const LoginView = ({ data = {} }) => {
  const initialValues = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    [data]
  )

  const onSubmit = useDebouncedCallback((values, actions) => {
    console.log(values, actions)
  })

  return (
    <div>
      <FormProvider
        initialValues={initialValues}
        validationSchema={loginSchema()}
        onSubmit={onSubmit}
      >
        <div className="w-[480px] space-y-6">
          <Input name="email" label="Email" />
          <Input name="password" label="Password" />
          <button type="submit" className="rounded-md bg-blue-400 px-6 py-3">
            Login
          </button>
        </div>
      </FormProvider>
    </div>
  )
}

export default LoginView
