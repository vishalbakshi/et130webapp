const test = require("tape");
const PressureHeight = require("../PressureHeight").PressureHeight;
const getProblem = require("../PressureHeight").getProblem;

// ===== UNIT TESTS:  PressureHeight() ===== //
// input argument for PressureHeight function
let knownVariables = {
  gamma: [1, "N/m^3"],
  delta_h: [1, "m"]
};

test("`PressureHeight` is a function", function(t) {
  t.equal(typeof PressureHeight, "function");
  t.end();
});

test("`PressureHeight` returns an object", function(t) {
  t.equal(typeof PressureHeight(knownVariables), "object");
  t.end();
});

test("`PressureHeight` return object has `delta_p` key", function(t) {
  t.looseEqual(Object.keys(PressureHeight(knownVariables)), ["delta_p"]);
  t.end();
});

test("`PressureHeight` return object[`delta_p`] is an array", function(t) {
  t.looseEqual(Array.isArray(PressureHeight(knownVariables)["delta_p"]), true);
  t.end();
});

test("`PressureHeight` returns correct value of metric `delta_p`", function(t) {
  let knownVariables = {
    gamma: [Math.floor(Math.random() * 10 + 1), "N/m^3"],
    delta_h: [Math.floor(Math.random() * 10 + 1), "m"]
  };

  let delta_p = knownVariables.gamma[0] * knownVariables.delta_h[0];

  t.equal(PressureHeight(knownVariables)["delta_p"][0], delta_p);
  t.end();
});

test("`PressureHeight` returns correct unit of metric `delta_p`", function(t) {
  let knownVariables = {
    gamma: [Math.floor(Math.random() * 10 + 1), "N/m^3"],
    delta_h: [Math.floor(Math.random() * 10 + 1), "m"]
  };

  t.equal(PressureHeight(knownVariables)["delta_p"][1], "Pa");
  t.end();
});

test("`PressureHeight` returns correct value of imperial `delta_p`", function(t) {
  let knownVariables = {
    gamma: [Math.floor(Math.random() * 10 + 1), "lb/ft^3"],
    delta_h: [Math.floor(Math.random() * 10 + 1), "ft"]
  };

  let delta_p = knownVariables.gamma[0] * knownVariables.delta_h[0];

  t.equal(PressureHeight(knownVariables)["delta_p"][0], delta_p);
  t.end();
});

test("`PressureHeight` returns correct unit of imperial `delta_p`", function(t) {
  let knownVariables = {
    gamma: [Math.floor(Math.random() * 10 + 1), "lb/ft^3"],
    delta_h: [Math.floor(Math.random() * 10 + 1), "ft"]
  };

  t.equal(PressureHeight(knownVariables)["delta_p"][1], "lb/ft^2");
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
    "PressureHeight",
    "`topic` is `PressureHeight`"
  );
  t.looseEqual(
    getProblem("metric").problemStatement,
    "What is the difference in pressure between two points inside a continuous static body of fluid given the following?",
    "`problemStatement` is `What is the difference in pressure between two points inside a continuous static body of fluid given the following?`"
  );
  t.looseEqual(
    Object.keys(getProblem("metric").knownVariables),
    ["delta_h", "gamma"],
    "`knownVariables` keys are `gamma`, and `delta_h`"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.gamma[0],
    "number",
    "`gamma[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.delta_h[0],
    "number",
    "`delta_h[0]` is a number"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.gamma[1],
    "N/m^3",
    "`gamma[1]` is `N/m^3`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.delta_h[1],
    "m",
    "`delta_h[1]` is `m`"
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
    "PressureHeight",
    "`topic` is `PressureHeight`"
  );
  t.looseEqual(
    getProblem("imperial").problemStatement,
    "What is the difference in pressure between two points inside a continuous static body of fluid given the following?",
    "`problemStatement` is `What is the difference in pressure between two points inside a continuous static body of fluid given the following?`"
  );
  t.looseEqual(
    Object.keys(getProblem("imperial").knownVariables),
    ["delta_h", "gamma"],
    "`knownVariables` keys are `gamma`, `delta_h`"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.gamma[0],
    "number",
    "`gamma[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.delta_h[0],
    "number",
    "`delta_h[0]` is a number"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.gamma[1],
    "lb/ft^3",
    "`gamma[1]` is `lb/ft^3`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.delta_h[1],
    "ft",
    "`delta_h[1]` is `ft`"
  );

  t.end();
});
