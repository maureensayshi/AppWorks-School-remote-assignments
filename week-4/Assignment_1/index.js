var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/getData', function (req, res) {
  res.send('<h2>Wrong Parameters</h2>')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
