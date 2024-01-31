import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn, SignUp, Dashboard, SendMoney, FailedTransaction, SuccessfulTransaction } from "./pages/index"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/sadTxn" element={< FailedTransaction />} />
          <Route path="/joyTxn" element={< SuccessfulTransaction />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
