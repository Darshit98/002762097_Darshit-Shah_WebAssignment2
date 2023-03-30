const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json())

const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')

app.use("/user", userRouter)
app.use("/login", loginRouter)
//mongodb://127.0.0.1:27017/Assignment8
//mongoose.connect("mongodb://127.0.0.1:27017/rest?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false", { family: 4 },
mongoose.connect("mongodb://127.0.0.1:27017/Assignment8", { family: 4 },
    () => {
        console.log("connected to db, starting app")
        app.listen(3000)
        console.log("app started")
    })