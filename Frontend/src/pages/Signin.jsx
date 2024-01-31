import { useState } from "react"
import { Heading, SubHeading, InputBox, Button, BottomWarning } from "../components/index"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function SignIn() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your  credentials to access your account"} />
                    <InputBox onChange={(e) => setUserName(e.target.value)} placeholder={"johnCena@gmail.com"} label={"Email"} />
                    <InputBox onChange={(e) => setPassword(e.target.value)} placeholder={"123212"} label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={async () => {
                            try {
                                const res = await axios.post(`http://localhost:3000/api/v1/user/signin`, {
                                    userName,
                                    password
                                })
                                const status = res.data.success
                                console.log(status)
                                if (status) {
                                    localStorage.setItem("token", res.data.token)
                                    navigate("/dashboard")
                                }
                            } catch (error) {
                                alert("invalid user")
                                console.log("login error")
                            }

                        }} label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    )
}

export default SignIn