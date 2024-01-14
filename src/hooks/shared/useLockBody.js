/* eslint-disable consistent-return */

/* eslint-disable no-return-assign */
import { useLayoutEffect, useRef } from 'react'

export function useLockBody(shouldLock) {
  const originalStyleRef = useRef(null)

  useLayoutEffect(() => {
    if (!shouldLock || typeof document === 'undefined') return

    const { body } = document
    originalStyleRef.current = body.style.overflow
    body.style.overflow = 'hidden'

    return () => (body.style.overflow = originalStyleRef.current)
  }, [shouldLock])
}
