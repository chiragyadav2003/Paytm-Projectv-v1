const express = require("express")
const userRouter = require("./user")
const accountRouter = require("./accounts")

const rootRouter = express.Router()

//user request routed to user router
rootRouter.use("/user", userRouter)

//account request routed to account router
rootRouter.use("/account", accountRouter)

module.exports = rootRouter

//rootRouter will handle request like this
// api/v1/user
// api/v1/transaction


// app.use('/api/v1/', rootRouter) tells Express to use the rootRouter middleware function to handle any incoming HTTP requests that match the /api/v1/ route path prefix. This means that any requests to URLs starting with /api/v1/ will be routed to the rootRouter for further processing, where the appropriate route handlers defined in rootRouter will handle them.
