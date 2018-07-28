var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/getData', function(req, res){

  var nb = parseInt(req.query.number);
  var result = 0;

  if (!nb)
    res.send("Wrong Parameter");
  else
  {
    for (var i = 1 ; i <= nb ; i++)
      result += i;
    res.send(String(result));
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
