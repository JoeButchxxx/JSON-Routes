const mongoose = require('./connection.js');

//Import seed data
const imageSeed = require('./seeds/gallery.js');

//Define model
const imageObject = require('./models/image.js');

imageObject.insertMany(imageSeed, function (error, image) {
  console.log('Data import completed');
  mongoose.connection.close();
});