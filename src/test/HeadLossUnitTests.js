const test = require("tape");
const HeadLoss = require("../HeadLoss").HeadLoss;
const getProblem = require("../HeadLoss").getProblem;

// ===== UNIT TESTS:  HeadLoss() ===== //
// input argument for HeadLoss function
let knownVariables = {
  resistanceCoefficient: [1, ""],
  velocity: [1, "m/s"],
  gravitationalConstant: [1, ""]
};

test("`HeadLoss` is a function", function(t) {
  t.equal(typeof HeadLoss, "function");
  t.end();
});

test("`HeadLoss` returns an object", function(t) {
  t.equal(typeof HeadLoss(knownVariables), "object");
  t.end();
});

test("`HeadLoss` return object has `headLoss` key", function(t) {
  t.looseEqual(Object.keys(HeadLoss(knownVariables)), ["headLoss"]);
  t.end();
});

test("`HeadLoss` return object[`headLoss`] is an array", function(t) {
  t.looseEqual(Array.isArray(HeadLoss(knownVariables)["headLoss"]), true);
  t.end();
});

test("`HeadLoss` returns correct value of metric `headLoss`", function(t) {
  let knownVariables = {
    resistanceCoefficient: [Math.random() * 200, ""],
    velocity: [Math.floor(Math.random() * 5 + 1), "m/s"],
    gravitationalConstant: [9.81, "m/s^2"]
  };

  let headLoss =
    (knownVariables.resistanceCoefficient[0] *
      Math.pow(knownVariables.velocity[0], 2)) /
    (2 * knownVariables.gravitationalConstant[0]);

  t.equal(HeadLoss(knownVariables)["headLoss"][0], headLoss);
  t.end();
});

test("`HeadLoss` returns correct unit of metric `headLoss`", function(t) {
  let knownVariables = {
    resistanceCoefficient: [Math.random() * 200, ""],
    velocity: [Math.floor(Math.random() * 5 + 1), "m/s"],
    gravitationalConstant: [9.81, "m/s^2"]
  };

  t.equal(HeadLoss(knownVariables)["headLoss"][1], "m");
  t.end();
});

test("`HeadLoss` returns correct value of imperial `headLoss`", function(t) {
  let knownVariables = {
    resistanceCoefficient: [Math.random() * 200, ""],
    velocity: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    gravitationalConstant: [32.2, "ft/s^2"]
  };

  let headLoss =
    (knownVariables.resistanceCoefficient[0] *
      Math.pow(knownVariables.velocity[0], 2)) /
    (2 * knownVariables.gravitationalConstant[0]);

  t.equal(HeadLoss(knownVariables)["headLoss"][0], headLoss);
  t.end();
});

test("`HeadLoss` returns correct unit of imperial `headLoss`", function(t) {
  let knownVariables = {
    resistanceCoefficient: [Math.random() * 200, ""],
    velocity: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    gravitationalConstant: [32.2, "ft/s^2"]
  };

  t.equal(HeadLoss(knownVariables)["headLoss"][1], "ft");
  t.end();
});

// ===== UNIT TESTS:  getProblem() ===== //
test("getProblem is a function", function(t) {
  t.equal(typeof getProblem, "function");
  t.end();
});

test("getProblem('metric') returns an object", function(t) {
  t.equal(typeof getProblem("metric"), "object");
  t.end();
});

test("getProblem('metric') return object has expected keys", function(t) {
  t.looseEqual(Object.keys(getProblem("metric")), [
    "topic",
    "problemStatement",
    "knownVariables",
    "unknownVariable",
    "relevantFormulas"
  ]);
  t.end();
});

test("getProblem('metric') return object keys hold values of the correct type", function(t) {
  t.equal(
    typeof getProblem("metric").topic,
    "string",
    "getProblem('metric').topic is a string"
  );
  t.equal(
    typeof getProblem("metric").problemStatement,
    "string",
    "getProblem('metric').problemStatement is a string"
  );
  t.equal(
    typeof getProblem("metric").knownVariables,
    "object",
    "getProblem('metric').knownVariables is an object"
  );
  t.equal(
    typeof getProblem("metric").unknownVariable,
    "string",
    "getProblem('metric').unknownVariable is a string"
  );
  t.equal(
    typeof getProblem("metric").relevantFormulas,
    "string",
    "getProblem('metric').relevantFormulas is a string"
  );
  t.end();
});

test("getProblem('metric') return object values are as expected", function(t) {
  t.looseEqual(getProblem("metric").topic, "HeadLoss", "`topic` is `HeadLoss`");
  t.looseEqual(
    getProblem("metric").problemStatement,
    "What is the Head Loss given the following properties?",
    "`problemStatement` is `What is the Head Loss given the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("metric").knownVariables),
    ["resistanceCoefficient", "velocity", "gravitationalConstant"],
    "`knownVariables` keys are `resistanceCoefficient`, `velocity`, `gravitationalConstant`"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.resistanceCoefficient[0],
    "number",
    "`resistanceCoefficient[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.velocity[0],
    "number",
    "`velocity[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.gravitationalConstant[0],
    "number",
    "`gravitationalConstant[0]` is a number"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.resistanceCoefficient[1],
    "",
    "`resistanceCoefficient[1]` is ``"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.velocity[1],
    "m/s",
    "`velocity[1]` is `m/s`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.gravitationalConstant[1],
    "m/s^2",
    "`gravitationalConstant[1]` is `m/s^2`"
  );

  t.end();
});

test("getProblem('imperial') returns an object", function(t) {
  t.equal(typeof getProblem("imperial"), "object");
  t.end();
});

test("getProblem('imperial') return object has expected keys", function(t) {
  t.looseEqual(Object.keys(getProblem("imperial")), [
    "topic",
    "problemStatement",
    "knownVariables",
    "unknownVariable",
    "relevantFormulas"
  ]);
  t.end();
});

test("getProblem('imperial') return object keys hold values of the correct type", function(t) {
  t.equal(
    typeof getProblem("imperial").topic,
    "string",
    "getProblem('imperial').topic is a string"
  );
  t.equal(
    typeof getProblem("imperial").problemStatement,
    "string",
    "getProblem('imperial').problemStatement is a string"
  );
  t.equal(
    typeof getProblem("imperial").knownVariables,
    "object",
    "getProblem('imperial').knownVariables is an object"
  );
  t.equal(
    typeof getProblem("imperial").unknownVariable,
    "string",
    "getProblem('imperial').unknownVariable is a string"
  );
  t.equal(
    typeof getProblem("imperial").relevantFormulas,
    "string",
    "getProblem('imperial').relevantFormulas is a string"
  );
  t.end();
});

test("getProblem('imperial') return object values are as expected", function(t) {
  t.looseEqual(
    getProblem("imperial").topic,
    "HeadLoss",
    "`topic` is `HeadLoss`"
  );
  t.looseEqual(
    getProblem("imperial").problemStatement,
    "What is the Head Loss given the following properties?",
    "`problemStatement` is `What is the Head Loss given the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("imperial").knownVariables),
    ["resistanceCoefficient", "velocity", "gravitationalConstant"],
    "`knownVariables` keys are `resistanceCoefficient`, `velocity`, `gravitationalConstant`"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.resistanceCoefficient[0],
    "number",
    "`resistanceCoefficient[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.velocity[0],
    "number",
    "`velocity[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.gravitationalConstant[0],
    "number",
    "`gravitationalConstant[0]` is a number"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.resistanceCoefficient[1],
    "",
    "`resistanceCoefficient[1]` is ``"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.velocity[1],
    "ft/s",
    "`velocity[1]` is `ft/s`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.gravitationalConstant[1],
    "ft/s^2",
    "`gravitationalConstant[1]` is `ft/s^2`"
  );

  t.end();
});
