import { useState, useCallback, ChangeEvent } from 'react'

function useInput<T extends Record<string, any>>(initialValue: T) {
  const [data, setData] = useState<T>(initialValue)

  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      setData({
        ...data,
        [name]: value,
      })
    },
    [data],
  )

  return [data, handler, setData] as const
}

export default useInput
