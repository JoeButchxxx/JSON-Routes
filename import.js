const mongoose = require('./_connection');

//Import seed data
const imageSeed = require('./seeds/gallery');

//Define model
const gallery = require('./models/image');


gallery.insertMany(imageSeed, function (error, image) {
  if (error) {
    console.log(error)
  }
  console.log('Data Import Complete.')
  mongoose.connection.close()
})