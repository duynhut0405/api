const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userStudentRoute = require('./routes/userStudent')
const mongoose = require('mongoose')

const app = express()

const db = mongoose.connection;
dotenv.config()


mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true }).then(() => console.log('DB Connected!'));
db.on('error', (err) => {
    console.log('DB connection error:', err.message);
})

app.use(morgan("dev"))
app.use(bodyParser.json())

app.use('/', userStudentRoute)

module.exports = app;