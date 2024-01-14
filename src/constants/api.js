export const API_ROOT = process.env.NEXT_PUBLIC_HOST
export const SOCKET_IO = process.env.NEXT_PUBLIC_SERVER_URL
export const ROOT_URL = process.env.NEXT_PUBLIC_WEB_URL

export const TIMEOUT = 15000

export const API = {
  API_ROOT,
  TIMEOUT,
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/register',
    RESET_PASSWORD: '/auth/reset_password',
    DELETE: '/me/delete',
  },
  ME: {
    DETAIL: '/me',
    UPDATE: '/me',
  },
}
