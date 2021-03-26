
const express = require('express')

const imageObject = require('../seeds/gallery')

const router = express.Router()

router.get('/gallery', (request, response) => {

  response.json(imageObject)


});
module.exports = router