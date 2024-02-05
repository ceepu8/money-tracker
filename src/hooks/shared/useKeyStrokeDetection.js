import { useEffect } from 'react'

export const useBackspaceDetection = (callback, keyCode = 8) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === keyCode) {
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [callback])
}
