import { useState } from 'react'
import PhonePageView from './phone-page'
import type { UserPhoneParams } from '@/types/phone'
import { usePhoneMutation } from '@/services/auth'
import useInput from '@/hooks/useInput'

const PhonePage = () => {
  const {data :phone, handler: setPhone} = useInput<UserPhoneParams>({
    name: '',
    number: '',
  })
  const [phoneApi] = usePhoneMutation()


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
          console.log('good');
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <PhonePageView phone={phone} setPhone={setPhone} handlePhoneSave={handlePhoneSave} />
  )
}

export default PhonePage
