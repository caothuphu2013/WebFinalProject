var express = require("express");
var app =  express();
var port = process.env.PORT || 8080;

require("./config/index")(app);
app.listen(port, function (err) {
    if (err) {
      console.error("Error is server");
    }
    console.log("Server is connecting in " + port);
});
