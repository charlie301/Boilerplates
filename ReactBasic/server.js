const express = require('express'),
      parser = require('express');

let app = express();

/* ===============
STATIC FOLDERS
================ */
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

/* ===============
CONFIGURE BODY PARSER
================ */
app.use(parser.urlencoded({extended:false}));

/*===========
SERVER START
=========== */
app.listen(8080, function(){
     console.log('APP LOG : Server started ');
});
