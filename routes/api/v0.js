const express = require('express')
const Image = require('../../models/image')

const router = express.Router()

router.get('/gallery', async (request, response, next) => {
  try {
    const imageObject = await Image.find({});
    response.json(imageObject)
  } catch (err) {
    return next(err)
  }
});
module.exports = router