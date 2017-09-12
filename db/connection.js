const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/geopic_db', { useMongoClient: true })

module.exports = mongoose
