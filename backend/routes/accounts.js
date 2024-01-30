const express = require("express")
const authmiddleware = require("../middleware/authMiddleware");
const { Account } = require("../db");

const accountRouter = express.Router()

//**-----GET request for returning user balance------**/
accountRouter.get("/balance", authmiddleware, async (req, res) => {
    const userId = req.userId;
    // console.log(userId, req.username)
    const accountInfo = await Account.findOne({ userId: userId })
    // console.log(accountInfo)
    return res.status(200).json({
        balance: accountInfo.balance
    })
})


//****-----POST request - user to transfer money to another account----- **/
accountRouter.post("./transfer", authmiddleware, async (req, res) => {

})



module.exports = accountRouter