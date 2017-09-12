const mongoose = require('./connection.js')

const PhotoSchema = new mongoose.Schema({
  title: String,
  photographer: String,
  description: String,
  filestackUrl: String,
  lat: Number,
  long: Number,
  tags: [String]
})

mongoose.model('Photo', PhotoSchema)

module.exports = mongoose
