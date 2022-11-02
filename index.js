const express = require('express')
const dotenv  = require('dotenv').config()
const {errorHandler} = require('./Middleware/errorMidlleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/user',require('./routes/UserRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server run on port : ${port}`))

