const express = require("express")
const zod = require("zod")
const { User } = require("../db")
const jwtSecret = require("../config")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

userRouter.get("/hi", (req, res) => {
    res.json({
        msg: "hi, hope you are doing well"
    })
})

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)
})

userRouter.post('/signup', async (req, res) => {
    const userData = req.body;

    //check for user i/p validation using zod
    const signupZodStatus = signupBody.safeParse(userData)
    // console.log(zodUserSchema)

    //for invalid input return status code - 411
    if (signupZodStatus.success == false) {
        console.log("--\nzod validation is false - ", signupZodStatus.error)
        return res.status(411).json({
            msg: "zod validation failed"
        })
    }

    console.log("--\nzod validation is true")

    //check if any user exist for same email or not
    const userExist = await User.findOne({ username: req.body.username })
    console.log("userexist", userExist)

    //if user exist for same email then return status code - 411
    if (userExist) {
        console.log("User already exists")
        return res.status(411).json({
            msg: "signup failed-Email already taken / Incorrect inputs"
        })
    }

    //if user have unique username i.e, email then this code will run
    try {
        //make a new entry in db for user
        const dbUser = await User.create(userData)
        console.log("user created successfully", dbUser)
        //generate jwt for user
        let token
        try {
            //jwt generation for user credential username,firstname,lastnamewith secretkey which will expire in 1 hour
            token = jwt.sign(
                {
                    username: userData.username,
                    firstName: userData.firstName,
                    lastName: userData.lastName
                },
                jwtSecret,
                { expiresIn: "1h" }
            )
            // console.log(token)
            return res.status(200).json({
                msg: "user created successfullyt",
                user: dbUser,
                token: token
            })
        } catch (err) {
            console.log(err);
            console.log("jwt generation failed")
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }

    } catch (error) {
        console.log("error occured in user creation in db", error)
        return res.status(411).json({
            msg: "user creation failed"
        })
    }
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})
userRouter.post('/signin', async (req, res) => {

    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(411).json({
            message: "Username or Password not present",
        })
    }

    //zod validation
    const { success } = signinBody.safeParse(req.body)
    //zod validation failed
    if (!success) {
        console.log("--\nzod validation is false - ", signupZodStatus.error)
        return res.status(411).json({
            msg: "zod validation failed"
        })
    }

    //make db request to check if there is any entry corrospond to given username and password
    try {
        const user = await User.findOne({ username, password })
        if (!user) {
            console.log("signin failed as there is no user corrospond to given username and password")
            res.status(411).json({
                message: "Error while logging in"
            })
        }
        else {
            let token
            try {
                //jwt generation for user credential username, secretkey which will expire in 1 hour
                token = jwt.sign({ username: username, }, jwtSecret, { expiresIn: "1h" })
                console.log(token)
                res.status(200).json({
                    message: "login successful",
                    token: token
                })
            } catch (err) {
                console.log(err);
                console.log("jwt generation failed")
                const error = new Error("Error! Something went wrong.");
                return next(error);
            }
        }
    } catch (error) {
        console.log("request to db for authentication failed-error encountered")
        res.status(411).json({
            msg: "request to db for authentication failed-error encountered",
            error: error.message,
        })
    }

})


module.exports = userRouter