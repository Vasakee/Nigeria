const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stateSchema = new Schema({
    state: String,
    capital: String,
    localGovernment: [String]
})

const State = mongoose.model('State', stateSchema)

module.exports = State