const express = require("express");
const rootRouter = require("./routes/index")
const jwt = require('jsonwebtoken');
const cors = require("cors")
const jwtSecret = require("./config")


const app = express();
const PORT = 8080;

//using middleware
app.use(express.json())

//cors
app.use(cors())

//using routing
app.use('/api/v1', rootRouter)



app.listen(PORT, (err) => {
    if (err) console.log("error in server listening", err)
    console.log(`app is running on port - ${PORT}`)
})

