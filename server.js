// Downloaded Dependencies
const { response } = require('express');
const express = require('express');
const path = require("path");
const app = express();
const index = require('./routes')
// ** VIEWS ENGINE **
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

app.use('/', (req, res, next) => {
  res.locals.siteTitle = 'CPNT 262 A5 - Joseph Butcher';
  next();
})
// ** HOME PAGE **
app.use('/', index)
// ** ERROR PAGE **
app.use('/', (req, res) => {
  res.status(404);
  res.render('pages/404')
})


//Listener
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
});