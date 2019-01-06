const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();

// bring in practiceProblems.json
const readJson = function(path, callback) {
  fs.readFile(require.resolve(path), function(err, data) {
    if (err) {
      return console.error("Error reading json file: ", err);
    }
    return callback(JSON.parse(data));
  });
};

let defaultProblem = {
  topic: "Fundamentals",
  problemStatement: "What is the value of x given the following?",
  knownVariables: { y: 2 },
  unknownVariable: "x",
  relevantFormulas: "y = x - 2",
  answer: "x = 4"
};
let practiceProblems;
readJson("./practiceProblems.json", function(data) {
  practiceProblems = data;
});
// app methods
app.set("view engine", "pug");

app.route("/").get(function(req, res) {
  // Create default problem

  res.render("index", defaultProblem);
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
