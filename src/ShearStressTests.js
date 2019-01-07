const test = require("tape");
const ShearStress = require("./ShearStress").ShearStress;
// input argument for ShearStress function
let knownVariables = {
  eta: [1, "unit"],
  delta_v: [1, "unit"],
  delta_y: [1, "unit"]
};

// test if ShearStress is a function
test("ShearStress is a function", function(t) {
  t.equal(typeof ShearStress, "function");
  t.end();
});

// test if ShearStress returns an array
test("ShearStress returns an object", function(t) {
  t.equal(typeof ShearStress(knownVariables), "object");
  t.end();
});

// test if ShearStress return object has a key 'tau'
test("ShearStress return object has `tau` key", function(t) {
  t.looseEqual(Object.keys(ShearStress(knownVariables)), ["tau"]);
  t.end();
});

// test if ShearStress return object['tau'] is an array
test("ShearStress return object[`tau`] is an array", function(t) {
  t.looseEqual(Array.isArray(ShearStress(knownVariables)["tau"]), true);
  t.end();
});

// test if ShearStress calculates `tau` as expected value
test("ShearStress returns correct value of `tau`", function(t) {
  let knownVariables = {
    eta: [Math.floor(Math.random() * 10 + 1), "unit"],
    delta_v: [Math.floor(Math.random() * 10 + 1), "unit"],
    delta_y: [Math.floor(Math.random() * 10 + 1), "unit"]
  };

  let tau =
    (knownVariables.eta[0] * knownVariables.delta_v[0]) /
    knownVariables.delta_y[0];

  t.equal(ShearStress(knownVariables)["tau"][0], tau);
  t.end();
});

test("ShearStress returns correct unit of `tau`", function(t) {
  let knownVariables = {
    eta: [Math.floor(Math.random() * 10 + 1), "unit"],
    delta_v: [Math.floor(Math.random() * 10 + 1), "unit"],
    delta_y: [Math.floor(Math.random() * 10 + 1), "unit"]
  };

  t.equal(ShearStress(knownVariables)["tau"][1], "unit");
  t.end();
});
