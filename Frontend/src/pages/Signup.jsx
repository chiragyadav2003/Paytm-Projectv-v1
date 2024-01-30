import { Heading, SubHeading, InputBox, Button, BottomWarning } from "../components/index"

function SignUp() {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your information to create account"} />
                    <InputBox placeholder={"John"} label={"First Name"} />
                    <InputBox placeholder={"Cena"} label={"Last Name"} />
                    <InputBox placeholder={"johnCena@gmail.com"} label={"Email"} />
                    <InputBox placeholder={"123212"} label={"Password"} />
                    <div className="pt-4">
                        <Button label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}

export default SignUp