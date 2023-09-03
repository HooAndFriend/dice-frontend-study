import useInput from '@/hooks/useInput'
import PhoneBookPageView from './phonebook-page'
import { PhoneNumberParams } from '@/types/number'
import { useNumberMutation } from '@/services/number'

const NumberPage = () => {
  const [number, setNumber] = useInput<PhoneNumberParams>({
    name: ' ',
    number: ' ',
  })

  const [numberApi] = useNumberMutation()

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
        }

        console.log(res)
      })
  }

  return (
    <PhoneBookPageView
      number={number}
      setNumber={setNumber}
      handleNumber={handleNumber}
    />
  )
}

export default NumberPage
