// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectRoute, PublicRoute } from './utils/protect-route'
import TodoPage from './pages/todo-page'
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import NumberPage from './pages/phonebook-page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        {/* <Route element={<ProtectRoute />}> */}
        <Route path="/phonebook" element={<NumberPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
