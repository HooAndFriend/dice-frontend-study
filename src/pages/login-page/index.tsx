/* eslint-disable */

// ** Components Imports
import useInput from '@/hooks/useInput'
import LoginPageView from './login-page'
import type { UserLoginParams } from '@/types/user'
import { useLoginMutation } from '@/services'
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
  const navigate = useNavigate()

  const {data :user, handler: setUser} = useInput<UserLoginParams>({
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
          const accessToken=res.responseData.accessToken
          localStorage.setItem('accessToken', accessToken);
          navigate('/phone')
        }
      })
      .catch((err) => alert(err))
  }
  const handleNavigateToRegister = () => {
    navigate('/register'); 
  };

  return (
    <LoginPageView user={user} setUser={setUser} handleLogin={handleLogin} handleNavigateToRegister={handleNavigateToRegister} />
  )
}

export default LoginPage
