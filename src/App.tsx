// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page'
import { ProtectRoute, PublicRoute } from './utils/protect-route'
import TodoPage from './pages/todo-page'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
