const http = require("http");

// const fs = require("fs");
const dotenv = require("dotenv");
const express = require("express");
//const ShearStress = require("./ShearStress").ShearStress;
//const getProblem = require("./ShearStress").getProblem;
//const PressureHeight = require("./PressureHeight").PressureHeight;
//const getProblem = require("./PressureHeight").getProblem;
//const VerticalWallForce = require("./VerticalWallForce").VerticalWallForce;
//const getProblem = require("./VerticalWallForce").getProblem;
//const ReynoldsNumber1 = require("./ReynoldsNumber1").ReynoldsNumber1;
//const getProblem = require("./ReynoldsNumber1").getProblem;
//const ReynoldsNumber2 = require("./ReynoldsNumber2").ReynoldsNumber2;
//const getProblem = require("./ReynoldsNumber2").getProblem;
//const HeadLoss = require("./HeadLoss").HeadLoss;
//const getProblem = require("./HeadLoss").getProblem;
//const RelativeRoughness = require("./RelativeRoughness").RelativeRoughness;
//const getProblem = require("./RelativeRoughness").getProblem;
//const BernoulliEquationSimplified = require("./BernoulliEquationSimplified").BernoulliEquationSimplified;
//const getProblem = require("./BernoulliEquationSimplified").getProblem;
//const BernoulliEquationExpanded = require("./BernoulliEquationExpanded")
// .BernoulliEquationExpanded;
//const getProblem = require("./BernoulliEquationExpanded").getProblem;

// Setup the basic objects
dotenv.config();
const app = express();
app.use(express.static("public"));
/**
 * @param    path        String
 * @param    callback    Function
 * return    callback    Function
 * */
/*
const readJson = function(path, callback) {
  fs.readFile(require.resolve(path), function(err, data) {
    if (err) {
      return console.error("Error reading json file: ", err);
    }
    return callback(JSON.parse(data));
  });
};
*/
let topics = [
  "BernoulliEquationExpanded",
  "BernoulliEquationSimplified",
  "HeadLoss",
  "PressureHeight",
  "RelativeRoughness",
  "ReynoldsNumber1",
  "ReynoldsNumber2",
  "ShearStress",
  "VerticalWallForce"
];

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

// Define userSelectedTopic for first load
let userSelectedTopic = "ShearStress";

// Get JSON data and assign to practiceProblemsJson
/*
readJson("./practiceProblems.json", function(data) {
  practiceProblemsJson = data;
});
*/
// app methods
// use pug as view engine
app.set("view engine", "pug");

// setup routes
app.route("/").get(function(req, res) {
  // Select a topic randomly
  //let topicSelector = Math.floor(Math.random() * (topics.length + 1));
  //let randomTopic = topics[topicSelector];
  //let topicFunction = require("./" + randomTopic)[randomTopic];
  //let getProblem = require("./" + randomTopic).getProblem;
  // Create default problem in case JSON doesn't get read

  // Select a topic by user selection
  if (req.query.topic && userSelectedTopic !== req.query.topic) {
    userSelectedTopic = req.query.topic;
  }
  let topicModule = require("./" + userSelectedTopic);
  let topicFunction = topicModule[userSelectedTopic];
  let getProblem = topicModule.getProblem;
  let practiceProblem = defaultProblem;

  // If JSON data has been got, set problem object to its data
  /*
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
  */
  let unitSystems = ["metric", "imperial"];
  let unitSystemsIndex = Math.floor(Math.random() * 2);
  let unitSystem = unitSystems[unitSystemsIndex];

  if (getProblem(unitSystems[unitSystemsIndex])) {
    practiceProblem = getProblem(unitSystem);
    //practiceProblem.answer = ShearStress(practiceProblem.knownVariables);
    //practiceProblem.answer = PressureHeight(practiceProblem.knownVariables);
    //practiceProblem.answer = VerticalWallForce(practiceProblem.knownVariables);
    //practiceProblem.answer = ReynoldsNumber1(practiceProblem.knownVariables);
    //practiceProblem.answer = ReynoldsNumber2(practiceProblem.knownVariables);
    //practiceProblem.answer = HeadLoss(practiceProblem.knownVariables);
    //practiceProblem.answer = RelativeRoughness(practiceProblem.knownVariables);
    //practiceProblem.answer = BernoulliEquationSimplified(practiceProblem.knownVariables);
    practiceProblem.answer = topicFunction(practiceProblem.knownVariables);
  }

  // Send the problem object to index.pug
  res.render("index", practiceProblem);
});

const server = app.listen(8080, function() {
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

module.exports = { app: app, server: server };
