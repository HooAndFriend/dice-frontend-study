/* eslint-disable */

// ** Components Imports
import useInput from '@/hooks/useInput'
import SignUp from './signUp-page'

import type { UserRegisterParams } from '@/types/regi'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '@/services'

const SignUpPage = () => {
  const navigate = useNavigate()

  const { data: user, handler: setUser } = useInput<UserRegisterParams>({
    username: '',
    password: '',
    name: '',
  })

  const [regiApi] = useRegisterMutation()

  const handleRegister = () => {
    if (user.username === '') {
      alert('유저 아이디를 입력하세요')
      return
    }

    if (user.password === '') {
      alert('패스워드를 입력하세요')
      return
    }
    if (user.name === '') {
      alert('이름을 입력하세요')
      return
    }

    regiApi(user)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          navigate('/')
        }
      })
      .catch((err) => alert(err.data.message))
  }

  return (
    <SignUp user={user} setUser={setUser} handleRegister={handleRegister} />
  )
}

export default SignUpPage
