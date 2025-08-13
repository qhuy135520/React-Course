import { useEffect } from 'react'

export function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      document.addEventListener('keydown', (e) => {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action()
        }
      })
    }
    callback()

    return () => {
      document.removeEventListener('keydown', callback)
    }
  }, [action, key])
}
