const express = require('express')
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")

const connectDB = require('./config/db')
const transactions = require("./routes/transactions")
const app = express()
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

dotenv.config({path:"./config/config.env"})
connectDB()


app.use("/api/v1/transactions", transactions)

const port = process.env.PORT || 5000 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`.cyan.bold)
})