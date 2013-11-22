var express = require("express");
var app = express();
app.use('/', express.static('webapp'));
var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Started the app in the port', port);
});