var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/templates/track.html');
});



app.get('/blank', function(req, res) {
    res.sendFile(__dirname + '/templates/test-api/blank.json');
});
app.get('/red', function(req, res) {
    res.sendFile(__dirname + '/templates/test-api/red.json');
});
app.get('/green', function(req, res) {
    res.sendFile(__dirname + '/templates/test-api/green.json');
});
app.get('/blue', function(req, res) {
    res.sendFile(__dirname + '/templates/test-api/blue.json');
});
app.get('/yellow', function(req, res) {
    res.sendFile(__dirname + '/templates/test-api/yellow.json');
});



app.listen(8081, function() {
    console.log('TrackAlert online');
});