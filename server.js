var express = require('express')

// Create out app
var app = express();
//Heroku
const PORT = process.env.PORT || 3001;

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto']==='https'){
    res.redirect('http://'+req.hostname + req.url);
  }else{
    next();
  }
});

app.use(express.static('public'));


app.listen(PORT,function (){
  console.log('Express is up on port ' + PORT);
});
