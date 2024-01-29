const express = require("express")
const zod = require("zod")
const { User } = require("../db")
const jwtSecret = require("../config")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

const userSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)
})

userRouter.get("/hi", (req, res) => {
    res.json({
        msg: "hi, hope you are doing well"
    })
})

userRouter.post('/signup', async (req, res) => {
    const userData = req.body;

    //check for user i/p validation using zod
    const zodUserSchema = userSchema.safeParse(userData)
    // console.log(zodUserSchema)

    //for invalid input return status code - 411
    if (zodUserSchema.success == false) {
        console.log("--\nzod validation is false - ", zodUserSchema.error)
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


module.exports = userRouter