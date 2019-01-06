const test = require("tape");
const ShearStress = require("./ShearStress").ShearStress;

// test if ShearStress is a function
test("ShearStress is a function", function(t) {
  t.equal(typeof ShearStress, "function");
  t.end();
});

// test if ShearStress returns an array
test("ShearStress returns an object", function(t) {
  let knownVariables = {
    eta: [1, "unit"],
    delta_v: [1, "unit"],
    delta_y: [1, "unit"]
  };
  t.equal(typeof ShearStress(knownVariables), "object");
  t.end();
});

// test if ShearStress return object has a key 'tau'
test("ShearStress return object has `tau` key", function(t) {
  let knownVariables = {
    eta: [1, "unit"],
    delta_v: [1, "unit"],
    delta_y: [1, "unit"]
  };
  t.looseEqual(Object.keys(ShearStress(knownVariables)), ["tau"]);
  t.end();
});
