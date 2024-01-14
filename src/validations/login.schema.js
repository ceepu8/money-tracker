import * as Yup from 'yup'
import { MIN_LEN_PASSWORD } from '@/constants'

export const LOGIN_FORM = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

export const LOGIN_FORM_LABEL = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
}

export const loginSchema = () =>
  Yup.object({
    [LOGIN_FORM.EMAIL]: Yup.string().trim().email().required(),
    [LOGIN_FORM.PASSWORD]: Yup.string().trim().required().min(MIN_LEN_PASSWORD),
  })
