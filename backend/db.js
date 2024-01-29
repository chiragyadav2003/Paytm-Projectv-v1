const mongoose = require("mongoose")
require('dotenv').config()

// console.log(process.env.MONGODB_URL + process.env.DB_NAME)

//connect to mongoose
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL + process.env.DB_NAME);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error : Error = ", error)
        process.exit(1);
    }
}
// connectDB()

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 3,
            maxLength: 30
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        }
    },
    {
        timestamps: true
    })
const User = mongoose.model("User", UserSchema)


const accountSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, //reference to User model
            ref: "User",
            required: true
        },
        balancd: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    })
const Account = mongoose.model("Account", accountSchema)

module.exports = {
    User,
    Bank,
    connectDB
}