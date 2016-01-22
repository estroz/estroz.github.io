var express            = require("express"),
    app                = express(),
    mongoose           = require('mongoose'),
    bodyParser         = require('body-parser'),
    projectsController = require('./server/controllers/projects-controller.js');

mongoose.connect('mongodb://localhost:27017/webport');

app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

//REST API
app.get('/api/projects', projectsController.list);
app.post('/api/projects', projectsController.create);

app.listen(3000, function() {
    console.log('I\'m listening 4 u...');
});