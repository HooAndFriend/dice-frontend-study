import useInput from '@/hooks/useInput'
import PhoneBookPageView from './phonebook-page'
import { PhoneNumberParams } from '@/types/number'
import { useGetNumberListMutation, useNumberMutation } from '@/services/number'
import { useState } from 'react'
import { NumberResponse } from '@/types/api/number'

const NumberPage = () => {
  const [number, setNumber] = useInput<PhoneNumberParams>({
    name: ' ',
    number: ' ',
  })

  const [numberApi] = useNumberMutation()
  const [getNumberApi] = useGetNumberListMutation()
  const [numberList, setNumberList] = useState<NumberResponse[]>([])

  //console.log(localStorage.getItem('accessToken'))
  const getData = () => {
    getNumberApi(number)
      .unwrap()
      .then((res) => {
        console.log(res.responseData)
        setNumberList(res.responseData)
      })
      .catch((err) => console.log(err))
  }

  const handleNumber = () => {
    if (number.name === '') {
      alert('이름을 입력하세요')

      return
    }
    if (number.number === '') {
      alert('전화번호룰 입력하세요.')

      return
    }

    numberApi(number)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          console.log('저장되었습니다')
          getData()
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
      getData={getData}
    />
  )
}

export default NumberPage
