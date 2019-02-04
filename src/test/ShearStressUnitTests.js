const test = require("tape");
const ShearStress = require("../ShearStress").ShearStress;
const getProblem = require("../ShearStress").getProblem;

// ===== UNIT TESTS:  ShearStress() ===== //
// input argument for ShearStress function
let knownVariables = {
  eta: [1, "Pa*s"],
  delta_v: [1, "m/s"],
  delta_y: [1, "m"]
};

test("`ShearStress` is a function", function(t) {
  t.equal(typeof ShearStress, "function");
  t.end();
});

test("`ShearStress` returns an object", function(t) {
  t.equal(typeof ShearStress(knownVariables), "object");
  t.end();
});

test("`ShearStress` return object has `tau` key", function(t) {
  t.looseEqual(Object.keys(ShearStress(knownVariables)), ["tau"]);
  t.end();
});

test("`ShearStress` return object[`tau`] is an array", function(t) {
  t.looseEqual(Array.isArray(ShearStress(knownVariables)["tau"]), true);
  t.end();
});

test("`ShearStress` returns correct value of metric `tau`", function(t) {
  let knownVariables = {
    eta: [Math.floor(Math.random() * 10 + 1), "Pa*s"],
    delta_v: [Math.floor(Math.random() * 10 + 1), "m/s"],
    delta_y: [Math.floor(Math.random() * 10 + 1), "m"]
  };

  let tau =
    (knownVariables.eta[0] * knownVariables.delta_v[0]) /
    knownVariables.delta_y[0];

  t.equal(ShearStress(knownVariables)["tau"][0], tau);
  t.end();
});

test("`ShearStress` returns correct unit of metric `tau`", function(t) {
  let knownVariables = {
    eta: [Math.floor(Math.random() * 10 + 1), "Pa*s"],
    delta_v: [Math.floor(Math.random() * 10 + 1), "m/s"],
    delta_y: [Math.floor(Math.random() * 10 + 1), "m"]
  };

  t.equal(ShearStress(knownVariables)["tau"][1], "Pa");
  t.end();
});

test("`ShearStress` returns correct value of imperial `tau`", function(t) {
  let knownVariables = {
    eta: [Math.floor(Math.random() * 10 + 1), "lb*s/ft^2"],
    delta_v: [Math.floor(Math.random() * 10 + 1), "ft/s"],
    delta_y: [Math.floor(Math.random() * 10 + 1), "ft"]
  };

  let tau =
    (knownVariables.eta[0] * knownVariables.delta_v[0]) /
    knownVariables.delta_y[0];

  t.equal(ShearStress(knownVariables)["tau"][0], tau);
  t.end();
});

test("`ShearStress` returns correct unit of imperial `tau`", function(t) {
  let knownVariables = {
    eta: [Math.floor(Math.random() * 10 + 1), "lb*s/ft^2"],
    delta_v: [Math.floor(Math.random() * 10 + 1), "ft/s"],
    delta_y: [Math.floor(Math.random() * 10 + 1), "ft"]
  };

  t.equal(ShearStress(knownVariables)["tau"][1], "lb/ft^2");
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
    "ShearStress",
    "`topic` is `ShearStress`"
  );
  t.looseEqual(
    getProblem("metric").problemStatement,
    "What is the shear stress inside of a fluid with the following properties?",
    "`problemStatement` is `What is the shear stress inside of a fluid with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("metric").knownVariables),
    ["eta", "delta_v", "delta_y"],
    "`knownVariables` keys are `eta`, `delta_v` and `delta_y`"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.eta[0],
    "number",
    "`eta[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.delta_v[0],
    "number",
    "`delta_v[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("metric").knownVariables.delta_y[0],
    "number",
    "`delta_y[0]` is a number"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.eta[1],
    "Pa*s",
    "`eta[1]` is `Pa*s`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.delta_v[1],
    "m/s",
    "`delta_v[1]` is `m/s`"
  );
  t.looseEqual(
    getProblem("metric").knownVariables.delta_y[1],
    "m",
    "`delta_y[1]` is `m`"
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
    "ShearStress",
    "`topic` is `ShearStress`"
  );
  t.looseEqual(
    getProblem("imperial").problemStatement,
    "What is the shear stress inside of a fluid with the following properties?",
    "`problemStatement` is `What is the shear stress inside of a fluid with the following properties?`"
  );
  t.looseEqual(
    Object.keys(getProblem("imperial").knownVariables),
    ["eta", "delta_v", "delta_y"],
    "`knownVariables` keys are `eta`, `delta_v` and `delta_y`"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.eta[0],
    "number",
    "`eta[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.delta_v[0],
    "number",
    "`delta_v[0]` is a number"
  );
  t.looseEqual(
    typeof getProblem("imperial").knownVariables.delta_y[0],
    "number",
    "`delta_y[0]` is a number"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.eta[1],
    "lb*s/ft^2",
    "`eta[1]` is `lb*s/ft^2`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.delta_v[1],
    "ft/s",
    "`delta_v[1]` is `ft/s`"
  );
  t.looseEqual(
    getProblem("imperial").knownVariables.delta_y[1],
    "ft",
    "`delta_y[1]` is `ft`"
  );

  t.end();
});
