const mongoose = require('mongoose')

const Schema = mongoose.Schema
const goalsSchema = new Schema (
    {
        id: {type: Number, required: true},
        title: {type: String, required: true}
    },
    {
        timestamps: true,
    }
)

const Goals = mongoose.model('Goals', goalsSchema)
module.exports = Goals