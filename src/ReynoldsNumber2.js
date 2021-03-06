exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let velocity, diameter, dynamicViscosity, density, reynoldsNumber;

  if (unitSystem === "metric") {
    // assign metric values and units
    // variable = [Number value, String unit];
    velocity = [Math.floor(Math.random() * 5 + 1), "m/s"];
    diameter = [Math.random(), "m"];
    dynamicViscosity = [1.6e-3 * Math.random() + 0.1e-3, "Pa*s"];
    density = [Math.floor(Math.random() * 1000 + 1), "kg/m^3"];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
    velocity = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    diameter = [Math.random() * 3, "ft"];
    dynamicViscosity = [3.6e-5 * Math.random() + 0.1e-5, "lb*s/ft^2"];
    density = [Math.floor(Math.random() * 1.94), "slugs/ft^3"];
  }

  let practiceProblem = {
    topic: "ReynoldsNumber2", // topic name goes here as String
    problemStatement:
      "What is the Reynolds Number for a fluid flow with the following properties?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      velocity: velocity,
      diameter: diameter,
      dynamicViscosity: dynamicViscosity,
      density: density
    },
    unknownVariable: "reynoldsNumber", // String name of unknownVariable student will solve for
    relevantFormulas: "Re = v * rho  * D / eta" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.ReynoldsNumber2 = function ReynoldsNumber2(knownVariables) {
  // Extract known variables from input and convert to Double
  let velocity = Number(knownVariables.velocity[0]);
  let diameter = Number(knownVariables.diameter[0]);
  let dynamicViscosity = Number(knownVariables.dynamicViscosity[0]);
  let density = Number(knownVariables.density[0]);

  // Calculate unknown variable(s)
  let reynoldsNumber = [
    (velocity * density * diameter) / dynamicViscosity,
    "unitless" // Reynolds Number is unitless
  ];

  // get correct units of uknown variable based on input unit system

  return { reynoldsNumber: reynoldsNumber }; // {unknownVariable: [Number value, String unit] }
};
