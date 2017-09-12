const mongoose = require('./schema.js')
const Photo = mongoose.model('Photo')
const photoData = require('./photo-data.json')

Photo.remove({})
  .then(() => {
    Photo.collection.insert(photoData)
    .then((photos) => {
      console.log(photos)
      process.exit()
    })
  })
  .catch((err) => {
    console.log(err)
  })
