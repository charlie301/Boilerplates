/* ============================================================================
                          BASIC SERVER 
=============================================================================*/

/*jslint node: true */
"use strict";

/* MAIN MODULES
==============*/
let express = require('express'),
    app = express();

/* STATIC ROUTES CONF
====================*/
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

/* ROUTE CALLS
=============*/
app.get('/', (req,res)=> {
  res.sendFile(__dirname + '/index.html');
});

/* START SERVER
============= */
app.listen(3000, ()=> {
  console.log('SS LOG: Application server listening on 3000');
});
