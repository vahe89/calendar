// server.js

// modules =================================================
const path = require('path');
const express = require('express');
const app = express();
let bodyParser     = require('body-parser');
let methodOverride = require('method-override');
let http           = require('http').Server(app);
let mongoose       = require('mongoose');

// configuration ===========================================

let db = require('./config/db');
mongoose.connect(db.url,{ useNewUrlParser: true });

// set our port
const PORT = process.env.PORT || 8080;

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname,'/build')));

// routes ==================================================

// require('./app/main')(app); // configure our routes
require('./app/main')(app);

app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('build/index.html'));
});

// start app ===============================================

// startup our app at http://localhost:8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
});

// expose app
module.exports = app;
