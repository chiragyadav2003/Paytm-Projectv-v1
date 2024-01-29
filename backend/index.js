const express = require("express");
const rootRouter = require("./routes/index")
const cors = require("cors")
const { connectDB } = require("./db")

const app = express();
const PORT = 3000;

//cors
app.use(cors())

//using middleware
app.use(express.json())

//connect to db
connectDB()

//using routing
app.use('/api/v1', rootRouter)

app.listen(PORT, (err) => {
    if (err) console.log("error in server listening", err)
    console.log(`----\napp is running on port - ${PORT}`)
})

