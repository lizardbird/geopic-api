const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema.js')
const Photo = mongoose.model('Photo')

const app = express()

app.set('port', process.env.PORT || 4200)
app.use(parser.json())
app.use((cors()))

app.get('/api/photos', (req, res) => {
  Photo.find()
    .then((photos) => {
      res.json(photos)
    })
    .catch((err) => {
      console.log(err)
    })
})
app.post('/api/photos', (req, res) => {
  Photo.create(req.body)
    .then((photo) => {
      res.json(photo)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/photos/:id', (req, res) => {
  Photo.findById(req.params.id)
    .then((photo) => {
      res.json(photo)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'),() => {
  console.log('hello world from port' + app.get('port'));
})
