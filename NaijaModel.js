const mongoose = require('mongoose')
const Model = mongoose.Model


const State = mongoose.model('State', {
    name: String,
    capital: String,
    localGovernments: [
        {
            name: String,
        },
    ],
});

module.exports = State