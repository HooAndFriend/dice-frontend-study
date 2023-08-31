// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page'
import { ProtectRoute, PublicRoute } from './utils/protect-route'
import TodoPage from './pages/todo-page'
import RegisterPageView from './pages/signUp-page'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        {/* <Route element={<ProtectRoute />}> */}
        <Route path="/todo" element={<TodoPage />} />
        {/* </Route> */}
        <Route path="/register" element={<RegisterPageView />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
// import { ChangeEvent, useState } from "react"
// import useInput from "./hooks/useInput"

// // export default App

// interface PhoneBook{
//   name: string
//   phone: string
//   id:number
// }
// interface PhoneBookParams{
//   name: string
//   phone: string

// }

// const App=()=>{
//   const {data: PhoneBook , handler: setPhone,setData}=useInput<PhoneBookParams>({
//     name: '',
//     phone:''
//   })
//   const[PhoneBookList, setPhoneBookList]=useState<PhoneBook[]>([])

// const handleAdd=()=>{
//   if(PhoneBook.name===''){
//     alert("이름")

//     return
//   }
//   if(PhoneBook.phone===''){
//     alert("번호")

//     return
//   }
//   setPhoneBookList((cur)=>[...cur,{...PhoneBook, id:cur.length+1}])
//   setData({name:'',phone:''})
// }
// console.log(PhoneBookList)
//   return (
//     <div>
// <input type="text" onChange={setPhone} name="name" value={PhoneBook.name} /><br/>
// <input type="text" onChange={setPhone} name="phone" value={PhoneBook.phone} /><br/>
// <button onClick={handleAdd}>add PhoneBook</button>
// <div>
//   {
//     PhoneBookList.length >0 ? (
//     PhoneBookList.map((item)=>(
//       <li key={item.id}>
//         {item.name} : {item.phone}
//       </li>
//       ))) : (
//         <h3>데이터 없</h3>
//       )
//   }
// </div>
//     </div>

//   )
// }