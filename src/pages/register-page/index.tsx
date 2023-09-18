/* eslint-disable */

// ** Components Imports
import useInput from '@/hooks/useInput'
import RegisterPageView from './register-page'
import { UserRegisterParams } from '@/types/register'
import { useRegisterMutation } from '@/services/register'

const RegisterPage = () => {
  const [user, setUser] = useInput<UserRegisterParams>({
    username: '',
    password: '',
    name: '',
  })
  const [registerApi] = useRegisterMutation()

  const handleRegister = () => {
    if (user.username === '') {
      alert('아이디를 입력하세요')

      return
    }

    if (user.name === '') {
      alert('이름을 입력하세요')

      return
    }
    if (user.password === '') {
      alert('패스워드를 입력하세요')

      return
    }
    registerApi(user)
      .unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => alert(err.data.message))
  }

  return (
    <RegisterPageView
      user={user}
      setUser={setUser}
      handleRegister={handleRegister}
    />
  )
}

export default RegisterPage
