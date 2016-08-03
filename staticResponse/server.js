/*
*    Charlie Storey basic Boilerplate template
*/

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Personal modules

//App assign
var app = express();

//Enviromental variables and fallback
var XPORT = process.env.PORT || 8080;

//parser settings
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Static view route
app.use(express.static(path.join(__dirname + '/public')));

//Page routes
require('./app/routes.js')(app);

//server listen
app.listen(XPORT, function(){
     console.log('Server listening on port :  ' + XPORT);
});
