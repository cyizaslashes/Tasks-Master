const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db/connect");
const taskRouter = require("./routes/tasks")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/users")
require("dotenv").config()
const app= express()

const PORT = process.env.PORT || 5000

// routes
app.get("/",(req,res)=>{
    res.send("Welcome to the webserver!")
})


// middlewares
app.use(express.json())
app.use(cors())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/task", taskRouter)

//connection
// const start = async()=>{
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log("connected to database");
//     } catch (error) {
//         console.log(error);
//     }
// }

// listening
app.listen(PORT,()=>{
    connectDB(process.env.MONGO_URL);
    console.log(`server is listening on port ${PORT}`);
})