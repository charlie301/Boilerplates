const express = require('express');

let app = express();

//conf static dirs
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//start
app.listen(8080, function(){
     console.log('app running');
});
