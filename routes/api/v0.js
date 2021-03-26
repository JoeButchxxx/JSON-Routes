const express = require('express')
const router = express.Router()
const imageObject = require('../../seeds/gallery')
router.get('/gallery', (request, response) => {

  response.json(imageObject)


});
module.exports = router