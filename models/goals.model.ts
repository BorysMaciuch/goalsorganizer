const mongoose = require('mongoose')

const Schema = mongoose.Schema
const goalsSchema = new Schema (
    {
        id: {type: String, required: true},
        title: {type: String, required: true},
        actionPoints: {type: Array, required: true},
        userId: {type: String, required: true}
    },
    {
        timestamps: true,
    }
)

const Goals = mongoose.model('Goals', goalsSchema)
export default Goals