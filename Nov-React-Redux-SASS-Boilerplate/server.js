/*jslint node: true */
"use strict";

const express = require('express'),
      path = require('path'),
      app = express();

/* ===============
STATIC FOLDERS
================ */
app.use(express.static('./dist'));

/* ===============
ROUTE LOGIC
================ */
app.get('/', (req,res)=>{
  res.sendFile('index.html');
});

/*===========
SERVER START
=========== */
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
app.listen(PORT,IP,() => {
     console.log('APP LOG : Server started \t');
     console.log('Port : ' + PORT + ' - ' + 'IP : ' + IP);
});
