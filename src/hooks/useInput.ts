import { SelectChangeEvent } from '@mui/material'
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

  const selectHandler = useCallback(
    (e: SelectChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      setData({
        ...data,
        [name]: value,
      })
    },
    [data],
  )

  return { data, handler, setData, selectHandler } as const
}

export default useInput
