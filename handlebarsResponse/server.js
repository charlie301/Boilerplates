/*
*    Charlie Storey Handlebars Boilerplate template
*/

var express = require('express');
var bodyParser = require('body-parser');

//Personal modules

//App assign
var app = express();

//Enviromental variables and fallback
var XPORT = process.env.PORT || 8080;

//parser settings
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Handlebars
var handlebars = require('express3-handlebars').create({
     defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Static view route
app.use(express.static(__dirname + '/public'));

//Page routes
require('./app/routes.js')(app);

//server listen
app.listen(XPORT, function(){
     console.log('Server listening on port :  ' + XPORT);
});
