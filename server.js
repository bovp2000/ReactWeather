var express = require('express')

// Create out app
var app = express();

app.use(express.static('public'));

app.listen(3001,function (){
  console.log('Express is up on port 3001');
});
