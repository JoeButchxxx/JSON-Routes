const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  linkURL: String,
  credit: String,
  creditLink: String,
  alt: String,
});

module.exports = mongoose.model('image', imageSchema);