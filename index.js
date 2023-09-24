const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { CreateState, GetStates, GetState } = require('./NaijaController')

//const NaijaRoutes = require('./NaijaRoute')

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

app.get('/', (GetStates))
app.get('/:stateName', (GetState))

app.listen(PORT, console.log(`server is running on Port ${PORT}`))
