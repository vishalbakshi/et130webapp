const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
const express = require("express");
const ShearStress = require("./ShearStress").ShearStress;

// Setup the basic objects
dotenv.config();
const app = express();

/**
 * @param    path        String
 * @param    callback    Function
 * return    callback    Function
 * */
const readJson = function(path, callback) {
  fs.readFile(require.resolve(path), function(err, data) {
    if (err) {
      return console.error("Error reading json file: ", err);
    }
    return callback(JSON.parse(data));
  });
};

// Create a defaultProblem that displays on index.pug
let defaultProblem = {
  topic: "Fundamentals",
  problemStatement: "What is the value of x given the following?",
  knownVariables: { y: [2, "unit"] },
  unknownVariable: "x",
  relevantFormulas: "y = x - 2",
  answer: { x: [4, "unit"] }
};

// Initialize variable that will be sent to readJson in callback
let practiceProblemsJson;

// Get JSON data and assign to practiceProblemsJson
readJson("./practiceProblems.json", function(data) {
  practiceProblemsJson = data;
});

// app methods
// use pug as view engine
app.set("view engine", "pug");

// setup routes
app.route("/").get(function(req, res) {
  // Create default problem in case JSON doesn't get read
  let practiceProblem = defaultProblem;

  // If JSON data has been got, set problem object to its data
  if (practiceProblemsJson) {
    practiceProblem = {
      topic: practiceProblemsJson.properties[0].topic,
      problemStatement:
        practiceProblemsJson.properties[0].properties.problems[0]
          .problemStatement,
      knownVariables:
        practiceProblemsJson.properties[0].properties.problems[0]
          .knownVariables,
      unknownVariable:
        practiceProblemsJson.properties[0].properties.problems[0]
          .unknownVariable,
      relevantFormulas:
        practiceProblemsJson.properties[0].properties.relevantFormulas,
      answer: ShearStress(
        practiceProblemsJson.properties[0].properties.problems[0].knownVariables
      )
    };
  }

  // Send the problem object to index.pug
  res.render("index", practiceProblem);
});
/*
app.listen(8080, function() {
  console.log("express listening on 8080");
});

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
*/
