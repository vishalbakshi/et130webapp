const test = require("tape");
const VerticalWallForce = require("./VerticalWallForce").VerticalWallForce;
const getProblem = require("./VerticalWallForce").getProblem;

// ===== UNIT TESTS:  VerticalWallForce() ===== //
// input argument for VerticalWallForce function
let knownVariables = {
  heightOfFluid: [1, "m"],
  wallLength: [1, "m"],
  wallDepth: [1, "m"],
  gamma: [1, "N/m^3"]
};

test("`VerticalWallForce` is a function", function(t) {
  t.equal(typeof VerticalWallForce, "function");
  t.end();
});

test("`VerticalWallForce` returns an object", function(t) {
  t.equal(typeof VerticalWallForce(knownVariables), "object");
  t.end();
});

test("`VerticalWallForce` return object has expected keys", function(t) {
  t.looseEqual(Object.keys(VerticalWallForce(knownVariables)), [
    "resultantForce"
  ]);
  t.end();
});

test("`VerticalWallForce` return object[`resultantForce`] is an array", function(t) {
  t.looseEqual(
    Array.isArray(VerticalWallForce(knownVariables)["resultantForce"]),
    true
  );
  t.end();
});

test("`VerticalWallForce` returns correct value of metric `resultantForce`", function(t) {
  let knownVariables = {
    heightOfFluid: [Math.floor(Math.random() * 5 + 1), "m"],
    wallLength: [Math.floor(Math.random() * 5 + 1), "m"],
    wallDepth: [Math.floor(Math.random() * 5 + 1), "m"],
    gamma: [Math.floor(Math.random() * 9810), "N/m^3"]
  };

  let resultantForce =
    (knownVariables.gamma[0] *
      knownVariables.heightOfFluid[0] *
      knownVariables.wallLength[0] *
      knownVariables.wallDepth[0]) /
    2;

  t.equal(
    VerticalWallForce(knownVariables)["resultantForce"][0],
    resultantForce
  );
  t.end();
});

test("`VerticalWallForce` returns correct unit of metric `resultantForce`", function(t) {
  let knownVariables = {
    heightOfFluid: [Math.floor(Math.random() * 5 + 1), "m"],
    wallLength: [Math.floor(Math.random() * 5 + 1), "m"],
    wallDepth: [Math.floor(Math.random() * 5 + 1), "m"],
    gamma: [Math.floor(Math.random() * 9810), "N/m^3"]
  };

  t.equal(VerticalWallForce(knownVariables)["resultantForce"][1], "N");
  t.end();
});

test("`VerticalWallForce` returns correct value of imperial `resultantForce`", function(t) {
  let knownVariables = {
    heightOfFluid: [Math.floor(Math.random() * 15 + 1), "ft"],
    wallLength: [Math.floor(Math.random() * 15 + 1), "ft"],
    wallDepth: [Math.floor(Math.random() * 15 + 1), "ft"],
    gamma: [Math.floor(Math.random() * 62.4), "lb/ft^3"]
  };

  let resultantForce =
    (knownVariables.gamma[0] *
      knownVariables.heightOfFluid[0] *
      knownVariables.wallLength[0] *
      knownVariables.wallDepth[0]) /
    2;

  t.equal(
    VerticalWallForce(knownVariables)["resultantForce"][0],
    resultantForce
  );
  t.end();
});

test("`VerticalWallForce` returns correct unit of imperial `resultantForce`", function(t) {
  let knownVariables = {
    heightOfFluid: [Math.floor(Math.random() * 15 + 1), "ft"],
    wallLength: [Math.floor(Math.random() * 15 + 1), "ft"],
    wallDepth: [Math.floor(Math.random() * 15 + 1), "ft"],
    gamma: [Math.floor(Math.random() * 62.4), "lb/ft^3"]
  };

  t.equal(VerticalWallForce(knownVariables)["resultantForce"][1], "lbs");
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
  t.looseEqual(
    getProblem("metric").topic,
    "VerticalWallForce",
    "`topic` is `VerticalWallForce`"
  );
  t.looseEqual(
    getProblem("metric").problemStatement,
    "What is the resultant force of the fluid on the vertical wall given the following?",
    "`problemStatement` is `What is the resultant force of the fluid on the vertical wall given the following?`"
  );
  t.looseEqual(
    Object.keys(getProblem("metric").knownVariables),
    ["heightOfFluid", "gamma", "wallLength", "wallDepth"],
    "`knownVariables` keys are `heightOfFluid`, `gamma`, `wallLength` and `wallDepth`"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.heightOfFluid[0],
    "number",
    "`heightOfFluid[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.wallLength[0],
    "number",
    "`wallLength[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.wallDepth[0],
    "number",
    "`wallDepth[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.gamma[0],
    "number",
    "`gamma[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.heightOfFluid[1],
    "string",
    "`heightOfFluid[1]` is a string"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.wallLength[1],
    "string",
    "`wallLength[1]` is a string"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.wallDepth[1],
    "string",
    "`wallDepth[1]` is a string"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.gamma[1],
    "string",
    "`gamma[1]` is a string"
  );

  t.looseEqual(
    getProblem("metric").knownVariables.heightOfFluid[1],
    "m",
    "`heightOfFluid[1]` is `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.wallLength[1],
    "m",
    "`wallLength[1]` is `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.wallDepth[1],
    "m",
    "`wallDepth[1]` is `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.gamma[1],
    "N/m^3",
    "`gamma[1]` is a `N/m^3`"
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
    "VerticalWallForce",
    "`topic` is `VerticalWallForce`"
  );
  t.looseEqual(
    getProblem("imperial").problemStatement,
    "What is the resultant force of the fluid on the vertical wall given the following?",
    "`problemStatement` is `What is the resultant force of the fluid on the vertical wall given the following?`"
  );
  t.looseEqual(
    Object.keys(getProblem("imperial").knownVariables),
    ["heightOfFluid", "gamma", "wallLength", "wallDepth"],
    "`knownVariables` keys are `heightOfFluid`, `wallLength`, `wallDepth` and `gamma`"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.heightOfFluid[0],
    "number",
    "`heightOfFluid[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.wallLength[0],
    "number",
    "`wallLength[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.wallDepth[0],
    "number",
    "`wallDepth[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.gamma[0],
    "number",
    "`gamma[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.heightOfFluid[1],
    "string",
    "`heightOfFluid[1]` is a string"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.wallLength[1],
    "string",
    "`wallLength[0]` is a string"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.wallDepth[1],
    "string",
    "`wallDepth[0]` is a string"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.gamma[1],
    "string",
    "`gamma[0]` is a string"
  );

  t.looseEqual(
    getProblem("imperial").knownVariables.heightOfFluid[1],
    "ft",
    "`heightOfFluid[1]` is `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.wallLength[1],
    "ft",
    "`wallLength[1]` is `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.wallDepth[1],
    "ft",
    "`wallDepth[1]` is `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.gamma[1],
    "lb/ft^3",
    "`gamma[0]` is `lb/ft^3`"
  );
  t.end();
});
