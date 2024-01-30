const express = require("express")
const authmiddleware = require("../middleware/authMiddleware");
const { Account } = require("../db");
const mongoose = require("mongoose")

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
accountRouter.post("/transfer", authmiddleware, async (req, res) => {

    try {
        //start session
        const session = await mongoose.startSession();

        //start transaction
        session.startTransaction();

        const { amount, to } = req.body;

        //fetch the account info within the transaction
        const account = await Account.find({ userId: req.userId }).session(session)

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            console.log("insufficient balance for transaction")
            return res.status(400).json({
                message: "insufficient balance",
                success: false
            })
        }

        //find receiver account info from db within transaction
        const toAccount = await Account.find({ userId: to }).session(session)

        if (!toAccount) {
            await session.abortTransaction();
            console.log("invaid account number")
            return res.status(400).json({
                message: "invalid account",
                success: false
            });
        }

        //perform transaction
        await Account.updateOne({ userid: req.userid }, { $inc: { balance: -amount } }).session(session)
        await Account.updateOne({ userid: to }, { $inc: { balance: amount } }).session(session)

        //commit the transaction
        await session.commitTransaction()

        console.log("transaction successful")
        res.status(200).json({
            message: "transfer successful",
            success: true
        })
    }
    catch (error) {
        console.log("transaction error - Error : ", error)
        res.status(411).json({
            success: "false"
        })
    }


})



module.exports = accountRouter