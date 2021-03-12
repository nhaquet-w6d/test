// app nodejs app

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 8082

app.listen(port, function () {
  console.log('Example app listening');
});
