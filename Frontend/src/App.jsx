import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn, SignUp, Dashboard, SendMoney } from "./pages/index"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendmoney" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
