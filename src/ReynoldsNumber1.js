exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let velocity, diameter, kinematicViscosity, reynoldsNumber;

  if (unitSystem === "metric") {
    // assign metric values and units
    // variable = [Number value, String unit];
    velocity = [Math.floor(Math.random() * 5 + 1), "m/s"];
    diameter = [Math.random(), "m"];
    kinematicViscosity = [1.6e-6 * Math.random() + 0.1e-6, "m^2/s"];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
    velocity = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    diameter = [Math.random() * 3, "ft"];
    kinematicViscosity = [1.7e-5 * Math.random() + 0.1e-5, "ft^2/s"];
  }

  let practiceProblem = {
    topic: "ReynoldsNumber1", // topic name goes here as String
    problemStatement:
      "What is the Reynolds Number for a fluid flow with the following properties?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      velocity: velocity,
      diameter: diameter,
      kinematicViscosity: kinematicViscosity
    },
    unknownVariable: "reynoldsNumber", // String name of unknownVariable student will solve for
    relevantFormulas: "Re = v * D / nu" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.ReynoldsNumber1 = function ReynoldsNumber1(knownVariables) {
  // Extract known variables from input and convert to Double
  let velocity = Number(knownVariables.velocity[0]);
  let diameter = Number(knownVariables.diameter[0]);
  let kinematicViscosity = Number(knownVariables.kinematicViscosity[0]);

  // Calculate unknown variable(s)
  let reynoldsNumber = [
    (velocity * diameter) / kinematicViscosity,
    "unitless" // Reynolds Number is unitless
  ];

  // get correct units of uknown variable based on input unit system

  return { reynoldsNumber: reynoldsNumber }; // {unknownVariable: [Number value, String unit] }
};
