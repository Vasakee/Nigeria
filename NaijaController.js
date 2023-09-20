const Naija = require('./NaijaModel')
const expressasynchandler = require('express-async-handler')
const State = require('./NaijaModel')


const CreateState = expressasynchandler(async (req, res) => {
    try {
        const { name, capital, localGovernments } = req.body
        const state = new State({ name, capital, localGovernments })
        await state.save()
        res.status(201).json(state)
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
})
// Get all the states in the country and their local governments
const GetStates = expressasynchandler(async (req, res) => {
    try {
        const states = await State.find();
        res.status(200).json(states);
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})
//Get a single state and its local governments
const GetState = expressasynchandler(async (req, res) => {
    try {
        const stateName = req.params.stateName;
        const state = await State.findOne({ name: stateName });
        if (!state) {
            res.status(404).json({ error: 'State not found' });
        } else {
            res.status(200).json(state);
        }
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

module.exports = { CreateState, GetStates, GetState }