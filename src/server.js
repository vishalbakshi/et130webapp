var http = require("http");
const express = require("express");

const app = express();

app.route("/").get(function(req, res) {
  res.send("Hello!");
});

app.listen(8080, function() {
  console.log("express listening on 8080");
});
/*
//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
*/
