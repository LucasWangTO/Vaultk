const mongoose = require('mongoose')

const countSchema = new mongoose.Schema({
    totalShortened: Number
})

countSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Count', countSchema)
