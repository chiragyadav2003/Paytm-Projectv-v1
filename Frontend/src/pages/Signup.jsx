import { useState } from "react"
import axios from "axios"
import { Heading, SubHeading, InputBox, Button, BottomWarning } from "../components/index"
import { useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your information to create account"} />
                    <InputBox onChange={(e) => { setFirstName(e.target.value) }} placeholder={"John"} label={"First Name"} />
                    <InputBox onChange={(e) => {
                        setLastName(e.target.value)
                    }} placeholder={"Cena"} label={"Last Name"} />
                    <InputBox onChange={(e) => {
                        setUserName(e.target.value)
                    }} placeholder={"johnCena@gmail.com"} label={"Email"} />
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} placeholder={"123212"} label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                userName: userName,
                                firstName: firstName,
                                lastName: lastName,
                                password: password
                            })
                            if (response.data.success) {
                                localStorage.setItem("token", response.data.token)
                                navigate('/dashboard')
                            }


                            // console.log("token", response.data.token)
                        }} label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}

export default SignUp