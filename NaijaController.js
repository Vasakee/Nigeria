const Naija = require('./NaijaModel')
const expressasynchandler = require('express-async-handler')


const CreateState = expressasynchandler(async (req, res) => {
    const { state, capital, localGovernment } = req.body

    if (!state || !capital || !localGovernment) {
        req.status(400)
        throw new Error('Please fill all fields')
    }

    const newState = await Naija.create({
        state, capital, localGovernment
    })

    if (newState) {
        res.status(201).json({
            _id: newState._id,
            state: newState.state,
            capital: newState.capital,
            localGovernment: newState.localGovernment
        })
    } else {
        res.status(400)
        throw new Error('failed to create state')
    }
})

const GetStates = expressasynchandler(async (req, res) => {
    try {
        const state = await Naija.find({})
        res.status(200).send(state)
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

const GetState = expressasynchandler(async (req, res) => {
    try {
        const stateName = (req.params.stateName)
        const location = await Naija.findOne({ state: stateName })
        if (!location) {
            res.status(404).json({ error: 'State not Found' })
        }
        else {
            res.status(200).send(location)
        }

    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

module.exports = { CreateState, GetStates, GetState }