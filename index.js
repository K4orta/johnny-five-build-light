var five = require('johnny-five');
var board = new five.Board();
var express = require('express');

var rgb;
board.on('ready', function() {
  rgb = new five.Led.RGB([11, 10, 9]);
});


var app = express();

app.get('/events/build/failure', function(req, res) {
  rgb.color('#ff0000');
  res.json({
    color: 'red'
  })
});

app.get('/events/build/success', function(req, res) {
  rgb.color('#00ff00');
  res.json({
    color: 'green'
  });
});

app.get('/event/build/', function(req, res) {
  rgb.color('#ffff00');
  res.json({
    color: 'yellow'
  })
});

var server = app.listen(9000, function() {
  console.log('sever');
});
