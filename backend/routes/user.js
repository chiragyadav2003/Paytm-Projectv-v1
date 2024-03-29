const express = require("express")
const zod = require("zod")
const { User } = require("../db")
const jwtSecret = require("../config")
const jwt = require("jsonwebtoken")
const authMiddleware = require("../middleware/authMiddleware")
const { Account } = require("../db")

const userRouter = express.Router()

//**------- PUT request router to update user info in db -------- */
const updateBody = zod.object({
    //here we are adding optional as they are not must parameter which will be required in body
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        console.log("invalid data for updation");
        return res.status(411).json({
            success: false,
            message: "invalid info for user info updation"
        })
    }
    const update = {
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    //filter will contain userName of user which we get from successfuk authentication
    const filter = { userName: req.userName }
    // console.log("userName from authmiddleware", req.userName)

    //updation of document
    try {
        //this will return old document
        // const updatedDocument = await User.findOneAndUpdate(filter, update) 

        //this will return updated document
        const updatedDocument = await User.findOneAndUpdate(filter, update, { new: true })
        // console.log("user info updated successfully", updatedDocument)
        return res.status(200).json({
            success: true,
            updatedInfo: updatedDocument
        })
    } catch (error) {
        return res.status(411).json({
            success: false,
            message: "Error while updating information"
        })
    }
})

//** ----------- SIGNUP router ------------------ */
const signupBody = zod.object({
    userName: zod.string().email(),
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
        // console.log("--\nzod validation is false - ", signupZodStatus.error)
        console.log("--\nzod validation failed for given inputs - ")
        return res.status(411).json({
            msg: "zod validation failed for given inpute - invalid input",
            success: false
        })
    }

    //check if any user exist for same email or not
    const userExist = await User.findOne({ userName: req.body.userName })
    // console.log("userexist", userExist)

    //if user exist for same email then return status code - 411
    if (userExist) {
        console.log("User already exists")
        return res.status(411).json({
            msg: "signup failed-Email already taken / Incorrect inputs",
            success: false
        })
    }

    //if user have unique userName i.e, email then this code will run
    try {
        //make a new entry in db for user
        const dbUser = await User.create(userData)
        // console.log("user created successfully", dbUser)
        const userId = dbUser._id;

        console.log("------creating account")
        //create new bank account and intialize user balance
        try {
            await Account.create({
                userId: userId,
                balance: 1 + Math.random() * 10000 //initialize user balance randomly between 1-10000 on signup
            })
            console.log("account created successfully")
        } catch (error) {
            console.log("account creation failed")
            console.log(error)
            return res.status(411).json({
                msg: "account creation failed",
                success: false
            })
        }

        //generate jwt for user
        let token
        try {
            //jwt generation for user credential userName,userId in db and secretkey which will expire in 1 hour
            //**so during token access, we can only decode userName from jwt nothing else will not be decoded from jwt */
            token = jwt.sign(
                {
                    userName: userData.userName,
                    userId: userId
                },
                jwtSecret,
                { expiresIn: "1h" }
            )
            // console.log(token)
            return res.status(200).json({
                msg: "user created successfully",
                userName: dbUser.userName,
                token: token,
                success: true
            })
        } catch (err) {
            console.log(err);
            console.log("jwt generation failed")
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }
    } catch (error) {
        // console.log("error occured in user creation in db", error)
        console.log("error occured in user creation in db")
        return res.status(411).json({
            msg: "user creation failed",
            success: false
        })
    }
})

//** ------------SIGNIN router ---------------- */
const signinBody = zod.object({
    userName: zod.string().email(),
    password: zod.string().min(6)
})

userRouter.post('/signin', async (req, res) => {

    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(411).json({
            message: "userName or Password not present",
            success: false
        })
    }

    //zod validation
    const { success } = signinBody.safeParse(req.body)
    //zod validation failed
    if (!success) {
        // console.log("--\nzod validation is false - ", signupZodStatus.error)
        console.log("--\nzod validation is false - ")
        return res.status(411).json({
            msg: "zod validation failed",
            success: false
        })
    }

    //make db request to check if there is any entry corrospond to given userName and password
    try {
        const user = await User.findOne({ userName, password })
        const userId = user._id

        if (!userId) {
            console.log("signin failed as there is no user corrospond to given userName and password")
            res.status(411).json({
                message: "no user registeres dor given credentials",
                success: false
            })
        }
        else {
            let token
            try {
                //jwt generation for user credential userName,userId from db and secret key which will expire in 1 hour
                token = jwt.sign({ userName: userName, userId: userId }, jwtSecret, { expiresIn: "1h" })
                // console.log(token)
                console.log("signin successful")
                res.status(200).json({
                    message: "login successful",
                    token: token,
                    success: true
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
            success: false
        })
    }

})


//**-----------GET request for finding user on basis of their first or last name which will be passed as query parameter----------- */
//here validation is not required
/*
    const { success } = bulkBody.safeParse(req.body)
    if (!success) {
        console.log("invalid data for searching in db");
        return res.status(411).json({
            success: false,
            message: "invalid info for user searching in db"
        })
    }
    const bulkBody = zod.object({
        firstName: zod.string().optional(),
        lastName: zod.string().optional(),
    })
*/
userRouter.get("/bulk", authMiddleware, async (req, res) => {
    /*
        This line extracts the value of the `filter` query parameter from the request URL. If the `filter` parameter is not provided in the request, it defaults to an empty string
    */
    const filter = req.query.filter || "";

    //users obtained will be an array as there can be more than one result fot that query
    const users = await User.find({
        $or: [
            {      //first condition
                firstName: {
                    "$regex": filter
                }
            },
            { //second conditiom
                lastName: {
                    "$regex": filter
                }
            }
        ]
    })
    /*
        This code queries the database (presumably MongoDB) using the Mongoose ORM. It searches for users whose `firstName` or `lastName` matches the specified regex pattern in the `filter` query parameter.
        - The `$or` operator performs a logical OR operation, allowing the query to match documents that satisfy at least one of the conditions.
        - The `"$regex"` operator specifies a regular expression pattern to match against the field values.
    */
    // TODO:return all user except user
    res.json({
        user: users.map((user) => ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        })),
        success: true
    })
})


module.exports = userRouter