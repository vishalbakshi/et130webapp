const test = require("tape");
const RelativeRoughness = require("./RelativeRoughness").RelativeRoughness;
const getProblem = require("./RelativeRoughness").getProblem;

// ===== UNIT TESTS:  RelativeRoughness() ===== //
// input argument for RelativeRoughness function
let knownVariables = {
  roughness: [1, "m"],
  diameter: [1, "m"]
};

test("`RelativeRoughness` is a function", function(t) {
  t.equal(typeof RelativeRoughness, "function");
  t.end();
});

test("`RelativeRoughness` returns an object", function(t) {
  t.equal(typeof RelativeRoughness(knownVariables), "object");
  t.end();
});

test("`RelativeRoughness` return object has `relativeRoughness` key", function(t) {
  t.looseEqual(Object.keys(RelativeRoughness(knownVariables)), [
    "relativeRoughness"
  ]);
  t.end();
});

test("`RelativeRoughness` return object[`relativeRoughness`] is an array", function(t) {
  t.looseEqual(
    Array.isArray(RelativeRoughness(knownVariables)["relativeRoughness"]),
    true
  );
  t.end();
});

test("`RelativeRoughness` returns correct value of metric `relativeRoughness`", function(t) {
  let knownVariables = {
    roughness: [Math.random() * 30e-6 + 1e-6, "m"],
    diameter: [Math.random(), "m"]
  };

  let relativeRoughness =
    knownVariables.roughness[0] / knownVariables.diameter[0];

  t.equal(
    RelativeRoughness(knownVariables)["relativeRoughness"][0],
    relativeRoughness
  );
  t.end();
});

test("`RelativeRoughness` returns correct unit of metric `relativeRoughness`", function(t) {
  let knownVariables = {
    roughness: [Math.random() * 30e-6 + 1e-6, "m"],
    diameter: [Math.random(), "m"]
  };

  t.equal(RelativeRoughness(knownVariables)["relativeRoughness"][1], "");
  t.end();
});

test("`RelativeRoughness` returns correct value of imperial `relativeRoughness`", function(t) {
  let knownVariables = {
    roughness: [Math.random() * 30e-5 + 1e-5, "ft"],
    diameter: [Math.random() * 3, "ft"]
  };

  let relativeRoughness =
    knownVariables.roughness[0] / knownVariables.diameter[0];

  t.equal(
    RelativeRoughness(knownVariables)["relativeRoughness"][0],
    relativeRoughness
  );
  t.end();
});

test("`RelativeRoughness` returns correct unit of imperial `relativeRoughness`", function(t) {
  let knownVariables = {
    roughness: [Math.random() * 30e-5 + 1e-5, "ft"],
    diameter: [Math.random() * 3, "ft"]
  };

  t.equal(RelativeRoughness(knownVariables)["relativeRoughness"][1], "");
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
    "RelativeRoughness",
    "`topic` is `RelativeRoughness`"
  );
  t.looseEqual(
    getProblem("metric").problemStatement,
    "What is the relative roughness of a pipe with the following properties?",
    "`problemStatement` is `What is the relative roughness of a pipe with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("metric").knownVariables),
    ["roughness", "diameter"],
    "`knownVariables` keys are `roughness` and `diameter`"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.roughness[0],
    "number",
    "`roughness[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.diameter[0],
    "number",
    "`diameter[0]` is a number"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.roughness[1],
    "m",
    "`roughness[1]` is `m`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.diameter[1],
    "m",
    "`diameter[1]` is `m`"
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
    "RelativeRoughness",
    "`topic` is `RelativeRoughness`"
  );
  t.looseEqual(
    getProblem("imperial").problemStatement,
    "What is the relative roughness of a pipe with the following properties?",
    "`problemStatement` is `What is the relative roughness of a pipe with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("imperial").knownVariables),
    ["roughness", "diameter"],
    "`knownVariables` keys are `roughness` and `diameter`"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.roughness[0],
    "number",
    "`roughness[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.diameter[0],
    "number",
    "`diameter[0]` is a number"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.roughness[1],
    "ft",
    "`roughness[1]` is `ft`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.diameter[1],
    "ft",
    "`diameter[1]` is `ft`"
  );

  t.end();
});
