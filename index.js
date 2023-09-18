const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const NaijaRoutes = require('./NaijaRoute')

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`connected to mongoDB`)
    }).catch((error) => {
        console.log(`error connecting to mongoDB`)
    })

const PORT = process.env.PORT

app.use(express.json())

app.listen(PORT, console.log(`server is running on Port ${PORT}`))

app.use('/api/Naija', NaijaRoutes)