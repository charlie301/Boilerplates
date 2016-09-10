var   express = require('express'),
      parser = require('body-parser'),
      path = require('path');

var app = express();

/* ===============
STATIC FOLDERS
================ */
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

/* ===============
WILDCARD HANDLER FOR PAGE REFRESH ISSUES
================ */
app.get('*', function(req,res){
     res.sendFile(path.resolve(__dirname, 'server' ,'static', 'index.html'));
});

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
