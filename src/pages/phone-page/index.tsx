import { useEffect, useState } from 'react'
import PhonePageView from './phone-page'
import type { UserPhoneParams } from '@/types/phone'
import { usePhoneListMutation } from '@/services/phone/'
import useInput from '@/hooks/useInput'
import { usePhoneaddMutation } from '@/services/phone'
import type { PhoneResponse } from '@/types/api/phone'

const PhonePage = () => {
  const { data: phone, handler: setPhone } = useInput<UserPhoneParams>({
    name: '',
    number: '',
  })
  const [phoneApi] = usePhoneaddMutation()
  const [phoneListApi] = usePhoneListMutation()
  const [phoneList, setPhoneList] = useState<PhoneResponse[]>([])

  const handlePhoneSave = () => {
    if (phone.name === '') {
      alert('이름을 입력하세요')
      return
    }

    if (phone.number === '') {
      alert('전화번호를 입력하세요')
      return
    }

    phoneApi(phone)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          alert('전화번호 추가 성공')
          console.log(res.responseData)
          fetchPhoneListFromServer()
        }
      })
      .catch((err) => console.log(err))
  }

  const fetchPhoneListFromServer = () => {
    phoneListApi(phone)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          console.log('전화번호 목록 가져오기 성공')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <PhonePageView
      phone={phone}
      setPhone={setPhone}
      handlePhoneSave={handlePhoneSave}
      fetchPhoneListFromServer={fetchPhoneListFromServer}
      phoneList={phoneList}
    />
  )
}

export default PhonePage
