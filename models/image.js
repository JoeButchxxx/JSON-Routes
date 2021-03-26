const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  height: Number,
  width: Number,
  pathURL: String,
  linkURL: String,
  credit: String,
  creditLink: String
});

module.exports = mongoose.model('Image', imageSchema);