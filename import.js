const mongoose = require('./_connection.js');

//Import seed data
const imageSeed = require('./seeds/gallery.js');

//Define model
const gallery = require('./models/image.js');

gallery.insertMany(imageSeed, function (error, image) {
  console.log('Data import completed');
  mongoose.connection.close();
});