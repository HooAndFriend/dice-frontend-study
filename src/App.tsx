// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page'
import { ProtectRoute, PublicRoute } from './utils/protect-route'
import PhonePage from './pages/phone-page'
import RegisterPageView from './pages/signUp-page'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/register" element={<RegisterPageView />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
