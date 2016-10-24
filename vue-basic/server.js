/* ============================================================================
                          BASIC SERVER
=============================================================================*/

/*jslint node: true */
"use strict";

/* MAIN MODULES
==============*/
let express = require('express'),
    app = express(),
    request = require('request');

/* STATIC ROUTES CONF
====================*/
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

/* ROUTE CALLS
=============*/
app.get('/', (req,res)=> {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', (req,res) => {
  console.log('in the request');
  request('https://randomuser.me/api/?results=10&inc=name,nat', (err,response,body)=> {
    if(!err && response.statusCode ==200){
      console.log(body);
    }
    else{
      console.log(`Error : ${err}
                   StatusCode : ${response.statusCode}`);
    }
    });
});

/* START SERVER
============= */
app.listen(3000, ()=> {
  console.log('SS LOG: Application server listening on 3000');
});
