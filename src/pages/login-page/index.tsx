/* eslint-disable */

// ** Components Imports
import useInput from '@/hooks/useInput'
import LoginPageView from './login-page'
import type { UserLoginParams } from '@/types/user'
import { useLoginMutation } from '@/services'
import { Navigate, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useInput<UserLoginParams>({
    username: '',
    password: '',
  })

  const [loginApi] = useLoginMutation()

  const handleLogin = () => {
    if (user.username === '') {
      alert('유저 이름을 입력하세요')

      return
    }

    if (user.password === '') {
      alert('패스워드를 입력하세요')

      return
    }

    loginApi(user)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.responseData.accessToken)
          localStorage.setItem('name', res.responseData.name)
          navigate('/phonebook')
        }
      })
      .catch((err) => alert(err.data.message))
  }

  return (
    <LoginPageView user={user} setUser={setUser} handleLogin={handleLogin} />
  )
}

export default LoginPage
