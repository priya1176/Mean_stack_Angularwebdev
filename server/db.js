const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://pritypriya1176:oxwjEhKob8xluHAc@cluster0.r2knq6l.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}