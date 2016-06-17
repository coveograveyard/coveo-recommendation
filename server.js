var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 8080;

app.use('/search', express.static(process.cwd() + '/node_modules/coveo-search-ui/bin/'))
app.use(express.static(process.cwd() + '/pages'));

app.listen(port, function(){
  console.log('Listening to port: ' + port);
});
