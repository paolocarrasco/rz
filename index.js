var express = require("express");
var app = express();
app.use('/', express.static('webapp'));
app.listen(process.env.PORT);