const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const errorHandler = require("./middleware/errorMiddleware")

const app = express()

//create Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes Middleware

app.use("/api/users", userRoute);

//create route

app.get("/", (req,res) =>{
    res.send("Home Page");
})

const PORT = process.env.PORT || 8000;

// Error Middleware

app.use(errorHandler)

//Connect to mongoDb and start Server

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT ,() => {
                console.log(`server is running on port ${PORT}`)
            })
        })
        .catch((err) => console.log(err))