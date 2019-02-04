const test = require("tape");
const BernoulliEquationExpanded = require("../BernoulliEquationExpanded")
  .BernoulliEquationExpanded;
const getProblem = require("../BernoulliEquationExpanded").getProblem;

// ===== UNIT TESTS:  BernoulliEquationExpanded() ===== //
// input argument for BernoulliEquationExpanded function
let knownVariables = {
  pressure1: [1, "kPa"],
  velocity1: [1, "m/s"],
  elevation1: [1, "m"],
  headLoss: [1, "m"],
  pressure2: [1, "kPa"],
  velocity2: [1, "m/s"],
  elevation2: [1, "m"],
  gamma: [1, "N/m^3"],
  gravitationalConstant: [1, "m/s^2"]
};

test("`BernoulliEquationExpanded` is a function", function(t) {
  t.equal(typeof BernoulliEquationExpanded, "function");
  t.end();
});

test("`BernoulliEquationExpanded` returns an object", function(t) {
  t.equal(typeof BernoulliEquationExpanded(knownVariables), "object");
  t.end();
});

test("`BernoulliEquationExpanded` return object has `headAdded` key", function(t) {
  t.looseEqual(Object.keys(BernoulliEquationExpanded(knownVariables)), [
    "headAdded"
  ]);
  t.end();
});

test("`BernoulliEquationExpanded` return object[`headAdded`] is an array", function(t) {
  t.looseEqual(
    Array.isArray(BernoulliEquationExpanded(knownVariables)["headAdded"]),
    true
  );
  t.end();
});
test("`BernoulliEquationExpanded` returns correct typeof metric `headAdded` value", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity1: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation1: [Math.floor(Math.random() * 5 + 1), "m"],
    pressure2: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity2: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation2: [Math.floor(Math.random() * 5 + 1), "m"],
    headLoss: [Math.floor(Math.random() * 10 + 1), "m"],
    gamma: [Math.floor(Math.random() * 9810), "N/m^3"],
    gravitationalConstant: [9.81, "m/s^2"]
  };

  t.equal(
    typeof BernoulliEquationExpanded(knownVariables)["headAdded"][0],
    "number"
  );
  t.end();
});
test("`BernoulliEquationExpanded` returns correct typeof metric `headAdded` unit", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity1: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation1: [Math.floor(Math.random() * 5 + 1), "m"],
    pressure2: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity2: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation2: [Math.floor(Math.random() * 5 + 1), "m"],
    headLoss: [Math.floor(Math.random() * 10 + 1), "m"],
    gamma: [Math.floor(Math.random() * 9810), "N/m^3"],
    gravitationalConstant: [9.81, "m/s^2"]
  };

  t.equal(
    typeof BernoulliEquationExpanded(knownVariables)["headAdded"][1],
    "string"
  );
  t.end();
});
test("`BernoulliEquationExpanded` returns correct typeof imperial `headAdded` value", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity1: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation1: [Math.floor(Math.random() * 15 + 1), "ft"],
    pressure2: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity2: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation2: [Math.floor(Math.random() * 15 + 1), "ft"],
    headLoss: [Math.floor(Math.random() * 20 + 1), "ft"],
    gamma: [Math.floor(Math.random() * 62.4), "lb/ft^3"],
    gravitationalConstant: [32.2, "ft/s^2"]
  };

  t.equal(
    typeof BernoulliEquationExpanded(knownVariables)["headAdded"][0],
    "number"
  );
  t.end();
});
test("`BernoulliEquationExpanded` returns correct typeof imperial `headAdded` unit", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity1: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation1: [Math.floor(Math.random() * 15 + 1), "ft"],
    pressure2: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity2: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation2: [Math.floor(Math.random() * 15 + 1), "ft"],
    headLoss: [Math.floor(Math.random() * 20 + 1), "ft"],
    gamma: [Math.floor(Math.random() * 62.4), "lb/ft^3"],
    gravitationalConstant: [32.2, "ft/s^2"]
  };

  t.equal(
    typeof BernoulliEquationExpanded(knownVariables)["headAdded"][1],
    "string"
  );
  t.end();
});
test("`BernoulliEquationExpanded` returns correct value of metric `headAdded`", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity1: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation1: [Math.floor(Math.random() * 5 + 1), "m"],
    pressure2: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity2: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation2: [Math.floor(Math.random() * 5 + 1), "m"],
    headLoss: [Math.floor(Math.random() * 10 + 1), "m"],
    gamma: [Math.floor(Math.random() * 9810), "N/m^3"],
    gravitationalConstant: [9.81, "m/s^2"]
  };

  let headAdded = [
    (knownVariables.pressure2[0] - knownVariables.pressure1[0]) /
      knownVariables.gamma[0] +
      (Math.pow(knownVariables.velocity2[0], 2) -
        Math.pow(knownVariables.velocity1[0], 2)) /
        (2 * knownVariables.gravitationalConstant[0]) +
      knownVariables.elevation2[0] -
      knownVariables.elevation1[0] +
      knownVariables.headLoss[0],
    "units"
  ];

  t.equal(
    BernoulliEquationExpanded(knownVariables)["headAdded"][0],
    headAdded[0]
  );
  t.end();
});

test("`BernoulliEquationExpanded` returns correct unit of metric `headAdded`", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity1: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation1: [Math.floor(Math.random() * 5 + 1), "m"],
    pressure2: [Math.floor(Math.random() * 500 + 1), "kPa"],
    velocity2: [Math.floor(Math.random() * 5 + 1), "m/s"],
    elevation2: [Math.floor(Math.random() * 5 + 1), "m"],
    headLoss: [Math.floor(Math.random() * 10 + 1), "m"],
    gamma: [Math.floor(Math.random() * 9810), "N/m^3"],
    gravitationalConstant: [9.81, "m/s^2"]
  };

  t.equal(BernoulliEquationExpanded(knownVariables)["headAdded"][1], "m");
  t.end();
});

test("`BernoulliEquationExpanded` returns correct value of imperial `headAdded`", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity1: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation1: [Math.floor(Math.random() * 15 + 1), "ft"],
    pressure2: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity2: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation2: [Math.floor(Math.random() * 15 + 1), "ft"],
    headLoss: [Math.floor(Math.random() * 20 + 1), "ft"],
    gamma: [Math.floor(Math.random() * 62.4), "lb/ft^3"],
    gravitationalConstant: [32.2, "ft/s^2"]
  };

  let headAdded = [
    (knownVariables.pressure2[0] - knownVariables.pressure1[0]) /
      knownVariables.gamma[0] +
      (Math.pow(knownVariables.velocity2[0], 2) -
        Math.pow(knownVariables.velocity1[0], 2)) /
        (2 * knownVariables.gravitationalConstant[0]) +
      knownVariables.elevation2[0] -
      knownVariables.elevation1[0] +
      knownVariables.headLoss[0],
    "units"
  ];

  t.equal(
    BernoulliEquationExpanded(knownVariables)["headAdded"][0],
    headAdded[0]
  );
  t.end();
});

test("`BernoulliEquationExpanded` returns correct unit of imperial `headAdded`", function(t) {
  let knownVariables = {
    pressure1: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity1: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation1: [Math.floor(Math.random() * 15 + 1), "ft"],
    pressure2: [Math.floor(Math.random() * 10000 + 1), "psf"],
    velocity2: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    elevation2: [Math.floor(Math.random() * 15 + 1), "ft"],
    headLoss: [Math.floor(Math.random() * 20 + 1), "ft"],
    gamma: [Math.floor(Math.random() * 62.4), "lb/ft^3"],
    gravitationalConstant: [32.2, "ft/s^2"]
  };

  t.equal(BernoulliEquationExpanded(knownVariables)["headAdded"][1], "ft");
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
    "BernoulliEquationExpanded",
    "`topic` is `BernoulliEquationExpanded`"
  );
  t.looseEqual(
    getProblem("metric").problemStatement,
    "How much head must a pump add to a system with the following properties?",
    "`problemStatement` is `How much head must a pump add to a system with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("metric").knownVariables),
    [
      "pressure1",
      "velocity1",
      "elevation1",
      "headLoss",
      "pressure2",
      "velocity2",
      "elevation2",
      "gamma",
      "gravitationalConstant"
    ],
    "`knownVariables` keys are `pressure1`, `velocity1`, 'elevation1', `headLoss`, `pressure2`, `velocity2`, `elevation2`, `gamma`. and `gravitationalConstant`"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.pressure1[0],
    "number",
    "`pressure1[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.velocity1[0],
    "number",
    "`velocity1[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.elevation1[0],
    "number",
    "`elevation1[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.headLoss[0],
    "number",
    "`headLoss[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.pressure2[0],
    "number",
    "`pressure2[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.velocity2[0],
    "number",
    "`velocity2[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.elevation2[0],
    "number",
    "`elevation2[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.gamma[0],
    "number",
    "`gamma[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.gravitationalConstant[0],
    "number",
    "`gravitationalConstant[0]` is a number"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.pressure1[1],
    "kPa",
    "`pressure1[1]` is a `kPa`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.velocity1[1],
    "m/s",
    "`velocity1[1]` is a `m/s`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.elevation1[1],
    "m",
    "`elevation1[1]` is a `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.headLoss[1],
    "m",
    "`headLoss[1]` is a `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.pressure2[1],
    "kPa",
    "`pressure2[1]` is a `kPa`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.velocity2[1],
    "m/s",
    "`velocity2[1]` is a `m/s`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.elevation2[1],
    "m",
    "`elevation2[1]` is a `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.gamma[1],
    "N/m^3",
    "`gamma[1]` is a `N/m^3`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.gravitationalConstant[1],
    "m/s^2",
    "`gravitationalConstant[1]` is a `m/s^2`"
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
    "BernoulliEquationExpanded",
    "`topic` is `BernoulliEquationExpanded`"
  );
  t.looseEqual(
    getProblem("imperial").problemStatement,
    "How much head must a pump add to a system with the following properties?",
    "`problemStatement` is `How much head must a pump add to a system with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("imperial").knownVariables),
    [
      "pressure1",
      "velocity1",
      "elevation1",
      "headLoss",
      "pressure2",
      "velocity2",
      "elevation2",
      "gamma",
      "gravitationalConstant"
    ],
    "`knownVariables` keys are `pressure1`, `velocity1`, 'elevation1', `headLoss`, `pressure2`, `velocity2`, `elevation2`, `gamma`. and `gravitationalConstant`"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.pressure1[0],
    "number",
    "`pressure1[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.velocity1[0],
    "number",
    "`velocity1[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.elevation1[0],
    "number",
    "`elevation1[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.headLoss[0],
    "number",
    "`headLoss[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.pressure2[0],
    "number",
    "`pressure2[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.velocity2[0],
    "number",
    "`velocity2[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.elevation2[0],
    "number",
    "`elevation2[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.gamma[0],
    "number",
    "`gamma[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.gravitationalConstant[0],
    "number",
    "`gravitationalConstant[0]` is a number"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.pressure1[1],
    "psf",
    "`pressure1[1]` is a `psf`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.velocity1[1],
    "ft/s",
    "`velocity1[1]` is a `ft/s`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.elevation1[1],
    "ft",
    "`elevation1[1]` is a `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.headLoss[1],
    "ft",
    "`headLoss[1]` is a `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.pressure2[1],
    "psf",
    "`pressure2[1]` is a `psf`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.velocity2[1],
    "ft/s",
    "`velocity2[1]` is a `ft/s`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.elevation2[1],
    "ft",
    "`elevation2[1]` is a `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.gamma[1],
    "lb/ft^3",
    "`gamma[1]` is a `lb/ft^3`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.gravitationalConstant[1],
    "ft/s^2",
    "`gravitationalConstant[1]` is a `ft/s^2`"
  );

  t.end();
});
