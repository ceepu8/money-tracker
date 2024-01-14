import { getSession, signOut } from 'next-auth/react'
import { API_ROOT, StatusCode, TIMEOUT } from '@/constants'
import logger from '@/utils/logger'

const fetcher = (() => {
  async function redirectIfUnAuthorized() {
    if (typeof window !== 'undefined') {
      const session = await getSession()
      if (session) {
        await signOut()
      }
      window.location.href = '/'
    }
  }

  const create = async (endpoint, options = {}) => {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT)

    const session = await getSession()
    const fetchPromise = fetch(API_ROOT + endpoint, {
      ...options,
      headers: {
        ...options.headers,
        ...(session ? { Authorization: `Bearer ${session.user.accessToken}` } : {}),
      },
      signal: controller.signal,
    }).then((response) => {
      if (response.status === StatusCode.UNAUTHORIZED) {
        redirectIfUnAuthorized()
      }
      return response
    })

    try {
      const response = await fetchPromise
      clearTimeout(timer)
      const body = await response.json()
      return body
    } catch (error) {
      clearTimeout(timer)
      if (error instanceof SyntaxError) {
        logger.error('[SyntaxError]', error)
      } else {
        logger.error('[Error]', error)
      }
      return error
    }
  }

  return {
    get: async (url, options = {}) => {
      const result = await create(url, {
        method: 'GET',
        ...options,
      })
      return result
    },

    post: async (url, body, options = {}) => {
      const response = await create(url, {
        method: 'POST',
        body: JSON.stringify(body),
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      })
      return response
    },

    put: () => {},

    delete: async (url, body) => {
      const response = await create(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      return response
    },
  }
})()

export default fetcher
