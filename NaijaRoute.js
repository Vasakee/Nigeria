const NaijaRoutes = require('express').Router()
const { CreateState, GetStates, GetState } = require('./NaijaController')

NaijaRoutes.post('/', (CreateState))
NaijaRoutes.get('/', (GetStates))
//NaijaRoutes.get('/:stateName', (GetState))


module.exports = NaijaRoutes