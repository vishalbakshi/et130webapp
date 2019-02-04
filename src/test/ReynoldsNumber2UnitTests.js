const test = require("tape");
const ReynoldsNumber2 = require("../ReynoldsNumber2").ReynoldsNumber2;
const getProblem = require("../ReynoldsNumber2").getProblem;

// ===== UNIT TESTS:  ReynoldsNumber2() ===== //
// input argument for ReynoldsNumber2 function
let knownVariables = {
  velocity: [1, "m/s"],
  diameter: [1, "m"],
  dynamicViscosity: [1, "m"],
  density: [1, "kg/m^3"]
};

test("`ReynoldsNumber2` is a function", function(t) {
  t.equal(typeof ReynoldsNumber2, "function");
  t.end();
});

test("`ReynoldsNumber2` returns an object", function(t) {
  t.equal(typeof ReynoldsNumber2(knownVariables), "object");
  t.end();
});

test("`ReynoldsNumber2` return object has `reynoldsNumber` key", function(t) {
  t.looseEqual(Object.keys(ReynoldsNumber2(knownVariables)), [
    "reynoldsNumber"
  ]);
  t.end();
});

test("`ReynoldsNumber2` return object[`reynoldsNumber`] is an array", function(t) {
  t.looseEqual(
    Array.isArray(ReynoldsNumber2(knownVariables)["reynoldsNumber"]),
    true
  );
  t.end();
});

test("`ReynoldsNumber2` returns correct value of metric `reynoldsNumber`", function(t) {
  let knownVariables = {
    velocity: [Math.floor(Math.random() * 5 + 1), "m/s"],
    diameter: [Math.random(), "m"],
    dynamicViscosity: [1.6e-3 * Math.random() + 0.1e-3, "Pa*s"],
    density: [Math.floor(Math.random() * 1000 + 1), "kg/m^3"]
  };

  let reynoldsNumber =
    (knownVariables.velocity[0] *
      knownVariables.density[0] *
      knownVariables.diameter[0]) /
    knownVariables.dynamicViscosity[0];

  t.equal(ReynoldsNumber2(knownVariables)["reynoldsNumber"][0], reynoldsNumber);
  t.end();
});

test("`ReynoldsNumber2` returns correct unit of metric `reynoldsNumber`", function(t) {
  let knownVariables = {
    velocity: [Math.floor(Math.random() * 5 + 1), "m/s"],
    diameter: [Math.random(), "m"],
    dynamicViscosity: [1.6e-3 * Math.random() + 0.1e-3, "Pa*s"],
    density: [Math.floor(Math.random() * 1000 + 1), "kg/m^3"]
  };

  t.equal(ReynoldsNumber2(knownVariables)["reynoldsNumber"][1], "");
  t.end();
});

test("`ReynoldsNumber2` returns correct value of imperial `reynoldsNumber`", function(t) {
  let knownVariables = {
    velocity: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    diameter: [Math.random() * 3, "ft"],
    dynamicViscosity: [3.6e-5 * Math.random() + 0.1e-5, "lb*s/ft^2"],
    density: [Math.floor(Math.random() * 1.94), "slugs/ft^3"]
  };

  let reynoldsNumber =
    (knownVariables.velocity[0] *
      knownVariables.density[0] *
      knownVariables.diameter[0]) /
    knownVariables.dynamicViscosity[0];

  t.equal(ReynoldsNumber2(knownVariables)["reynoldsNumber"][0], reynoldsNumber);
  t.end();
});

test("`ReynoldsNumber2` returns correct unit of imperial `reynoldsNumber`", function(t) {
  let knownVariables = {
    velocity: [Math.floor(Math.random() * 15 + 1), "ft/s"],
    diameter: [Math.random() * 3, "ft"],
    dynamicViscosity: [3.6e-5 * Math.random() + 0.1e-5, "lb*s/ft^2"],
    density: [Math.floor(Math.random() * 1.94), "slugs/ft^3"]
  };

  t.equal(ReynoldsNumber2(knownVariables)["reynoldsNumber"][1], "");
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
    "ReynoldsNumber2",
    "`topic` is `ReynoldsNumber2`"
  );
  t.looseEqual(
    getProblem("metric").problemStatement,
    "What is the Reynolds Number for a fluid flow with the following properties?",
    "`problemStatement` is `What is the Reynolds Number for a fluid flow with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("metric").knownVariables),
    ["velocity", "diameter", "dynamicViscosity", "density"],
    "`knownVariables` keys are `velocity`, `diameter`, `dynamicViscosity` and `density`"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.velocity[0],
    "number",
    "`velocity[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.diameter[0],
    "number",
    "`diameter[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.dynamicViscosity[0],
    "number",
    "`dynamicViscosity[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.density[0],
    "number",
    "`density[0]` is a number"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.velocity[1],
    "m/s",
    "`velocity[1]` is `m/s`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.diameter[1],
    "m",
    "`diameter[1]` is `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.dynamicViscosity[1],
    "Pa*s",
    "`dynamicViscosity[1]` is `Pa*s`"
  );

  t.looseEqual(
    getProblem("metric").knownVariables.density[1],
    "kg/m^3",
    "`density[1]` is `kg/m^3`"
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
    "ReynoldsNumber2",
    "`topic` is `ReynoldsNumber2`"
  );
  t.looseEqual(
    getProblem("imperial").problemStatement,
    "What is the Reynolds Number for a fluid flow with the following properties?",
    "`problemStatement` is `What is the Reynolds Number for a fluid flow with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("imperial").knownVariables),
    ["velocity", "diameter", "dynamicViscosity", "density"],
    "`knownVariables` keys are `velocity`, `diameter`, `dynamicViscosity` and `density`"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.velocity[0],
    "number",
    "`velocity[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.diameter[0],
    "number",
    "`diameter[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.dynamicViscosity[0],
    "number",
    "`dynamicViscosity[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.density[0],
    "number",
    "`density[0]` is a number"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.velocity[1],
    "ft/s",
    "`velocity[1]` is `ft/s`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.diameter[1],
    "ft",
    "`diameter[1]` is `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.dynamicViscosity[1],
    "lb*s/ft^2",
    "`dynamicViscosity[1]` is `lb*s/ft^2`"
  );

  t.looseEqual(
    getProblem("imperial").knownVariables.density[1],
    "slugs/ft^3",
    "`density[1]` is `slugs/ft^3`"
  );

  t.end();
});
