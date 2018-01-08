var express = require('express')

// Create out app
var app = express();
//Heroku
const PORT = process.env.PORT || 3001;

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto']==='http'){
    next();
  }else{
    res.direct('http://'+req.hostname + req.url);
  }
});
app.use(express.static('public'));


app.listen(PORT,function (){
  console.log('Express is up on port ' + PORT);
});
