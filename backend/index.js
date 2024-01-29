const express = require("express");
const rootRouter = require("./routes/index")
const jwt = require('jsonwebtoken');
const cors = require("cors")
const jwtSecret = require("./config")
const { connectDB } = require("./db")


const app = express();
const PORT = 3000;

//connect to db
connectDB()

//using middleware
app.use(express.json())

//cors
app.use(cors())

//using routing
app.use('/api/v1', rootRouter)



app.listen(PORT, (err) => {
    if (err) console.log("error in server listening", err)
    console.log(`----\napp is running on port - ${PORT}`)
})

