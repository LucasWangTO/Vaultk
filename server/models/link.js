const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_URI

console.log("Connecting to ", mongoUrl)

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then(result => {
    console.log("Connected to MongoDB")
})
.catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message)
})

const linkSchema = new mongoose.Schema({
    url: String,
    ending: String
})

linkSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Link', linkSchema)
