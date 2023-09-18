import useInput from '@/hooks/useInput'
import PhoneBookPageView from './phonebook-page'
import type { PhoneNumberParams } from '@/types/number'
import { useGetNumberListMutation, useNumberMutation } from '@/services/number'
import { useEffect, useState } from 'react'
import type { NumberResponse } from '@/types/api/number'

const NumberPage = () => {
  const [number, setNumber] = useInput<PhoneNumberParams>({
    name: ' ',
    number: ' ',
  })
  const [saveNumberApi] = useNumberMutation()
  const [getNumberApi] = useGetNumberListMutation()

  const [numberList, setNumberList] = useState<NumberResponse[]>([])

  useEffect(() => {
    getNumberApi(number)
      .unwrap()
      .then((res) => {
        setNumberList(res.responseData)
      })
      .catch((err) => console.log(err))
  }, [numberList])

  const handleNumber = () => {
    if (number.name === '') {
      alert('이름을 입력하세요')

      return
    }
    if (number.number === '') {
      alert('전화번호룰 입력하세요.')

      return
    }

    saveNumberApi(number)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          console.log('저장되었습니다')
        }
        console.log(res)
      })
  }

  return (
    <PhoneBookPageView
      number={number}
      setNumber={setNumber}
      handleNumber={handleNumber}
      numberList={numberList}
    />
  )
}

export default NumberPage
