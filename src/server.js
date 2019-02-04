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
app.use(express.static("views"));

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


// app methods
// use pug as view engine
app.set("view engine", "pug");

// setup routes
app.route("/").get(function(req, res) {
  
  // Select a topic by user selection
  if (req.query.topic && userSelectedTopic !== req.query.topic) {
    userSelectedTopic = req.query.topic;
  }
  let topicModule = require("./" + userSelectedTopic);
  let topicFunction = topicModule[userSelectedTopic];
  let getProblem = topicModule.getProblem;
  let practiceProblem = defaultProblem;
  let unitSystems = ["metric", "imperial"];
  let unitSystemsIndex = Math.floor(Math.random() * 2);
  let unitSystem = unitSystems[unitSystemsIndex];

  if (getProblem(unitSystems[unitSystemsIndex])) {
    practiceProblem = getProblem(unitSystem);
    practiceProblem.answer = topicFunction(practiceProblem.knownVariables);
  }

  // Send the problem object to index.pug
  res.render("index", practiceProblem);
});

app.route("/test").get(function(req, res) {
  // Select a topic by user selection
  if (req.query.topic && userSelectedTopic !== req.query.topic) {
    userSelectedTopic = req.query.topic;
  }
  let topicModule = require("./" + userSelectedTopic);
  let topicFunction = topicModule[userSelectedTopic];
  let getProblem = topicModule.getProblem;
  let practiceProblem = defaultProblem;
  let unitSystems = ["metric", "imperial"];
  let unitSystemsIndex = Math.floor(Math.random() * 2);
  let unitSystem = unitSystems[unitSystemsIndex];

  if (getProblem(unitSystems[unitSystemsIndex])) {
    practiceProblem = getProblem(unitSystem);
    practiceProblem.answer = topicFunction(practiceProblem.knownVariables);
  }

  // Send the problem object to index.pug
  res.render("test", practiceProblem);
});

const server = app.listen(process.env.PORT , function() {
  console.log("express listening on port");
});

module.exports = { app: app, server: server };
