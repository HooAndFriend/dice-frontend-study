// // ** Router Imports
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LoginPage from './pages/login-page'
// import { ProtectRoute, PublicRoute } from './utils/protect-route'
// import TodoPage from './pages/todo-page'
// import CountPage from './pages/count-page'

import { ChangeEvent, useState } from 'react'
import useInput from './hooks/useInput'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<PublicRoute />}>
//           <Route path="/" element={<LoginPage />} />
//         </Route>
//         {/* <Route element={<ProtectRoute />}> */}
//         <Route path="/todo" element={<TodoPage />} />
//         <Route path="/count" element={<CountPage />} />
//         {/* </Route> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

interface PhoneBookParams {
  name: string
  phone: string
}

interface PhoneBook {
  id: number
  name: string
  phone: string
}

const App = () => {
  const {
    data: phoneBook,
    handler: setPhone,
    setData,
  } = useInput<PhoneBookParams>({
    name: '',
    phone: '',
  })

  const [phoneBookList, setPhoneBookList] = useState<PhoneBook[]>([])

  const handleClickAdd = () => {
    if (phoneBook.name === '') {
      alert('이름을 입력해주세요.')

      return
    }

    if (phoneBook.phone === '') {
      alert('전화번호를 입력해주세요.')

      return
    }

    setPhoneBookList((cur) => [...cur, { ...phoneBook, id: cur.length + 1 }])
    setData({ name: '', phone: '' })
  }

  const handleClickRemove = (id: number) => {
    const arr = phoneBookList.filter((item) => item.id !== id)
    setPhoneBookList(arr)
  }

  return (
    <div>
      <h1>Phone book</h1>
      <input
        type="text"
        onChange={setPhone}
        name="name"
        value={phoneBook.name}
        placeholder="이름을 입력하세요"
      />
      <br />
      <input
        type="text"
        onChange={setPhone}
        name="phone"
        value={phoneBook.phone}
        placeholder="전화번호를 입력하세요"
      />
      <button onClick={handleClickAdd}>ADD PHONEBOOK</button>
      <div>
        {phoneBookList.length > 0 ? (
          phoneBookList.map((item) => (
            <>
              <li key={item.id}>
                {item.name} : {item.phone}
              </li>
              <button onClick={() => handleClickRemove(item.id)}>DELETE</button>
            </>
          ))
        ) : (
          <h3>데이터가 없습니다 ㅠㅠ</h3>
        )}
      </div>
    </div>
  )
}

export default App
