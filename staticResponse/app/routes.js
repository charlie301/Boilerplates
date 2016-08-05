/*
*    Page routes
*/

var path = require('path');

//Set static route
var rootObj = {
     root: path.join(__dirname, '../public')
};

module.exports = function(app){

     app.get('/', function(req,res){
          res.render('./public/html.index.html');
     });

};
