const express = require('express');
const config = require('../config');
const router = express.Router();
const apiRoute = require('./api/v0');
const dayJS = require('dayjs');
const imageObject = require('../models/image.js');
const { response } = require('express');

// **Router**
router.use((request, response, next) => {
  response.locals = config
  next()
})

// ** HOME PAGE **
router.get('/', (request, response) => {
  response.render('pages/index',
    { pageTitle: 'Home', dayJS })
})

// ** LOGIN PAGE **
router.get('/login', (request, response) => {
  response.render('pages/login',
    { pageTitle: 'Login', dayJS })
})

// ** REGISTRY PAGE**
router.get('/register', (request, response) => {
  response.render('pages/register',
    { pageTitle: 'register', dayJS })
})

// ** CUSTOM 404 PAGE **
router.get('/', function (request, response) {
  response.render('pages/404',
    { pageTitle: "404 Page" });
})

// ** Router to generate single item page **
router.get('/images/:id', async (req, res, next) => {
  try {
    const image = await imageObject.findOne({ id: req.params.id });
    res.render('pages/single-item', { pageTitle: image.title, image, dayJS })

  } catch (err) {
    return next(err);
  }
})

router.use('/api/v0', apiRoute);
module.exports = router