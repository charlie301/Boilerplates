/*jslint node: true */
"use strict";

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 8080;

/* IMPORT FUNCTION CALLS TO BE USED IN THE APP
=============================================*/
let book = require('./app/routes/book');

/* LOAD DB FILES AND SET DB OPTIONS OBJECT
==========================================*/
let config = require('config');
let options = {
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
              };

/* DATABASE CONNECTION
=========*/
mongoose.connect(config.db, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

/* BODY PARSER
=========*/
//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

/* ROUTES
=========*/

app.get("/", (req, res) =>
     res.json({message: "Welcome to our Bookstore!"})
);

/* MIDDLEWARES ---> Foward util (Check readme)
================ */
app.route("/book")
    .get(book.getBooks)
    .post(book.postBook);

app.route("/book/:id")
    .get(book.getBook)
    .delete(book.deleteBook)
    .put(book.updateBook);


/* SERVER LISTEN
=========*/
app.listen(port);
console.log("Listening on port " + port);

module.exports = app; //Export to use for testing purposes