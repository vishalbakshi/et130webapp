exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let pressure1,
    velocity1,
    elevation1,
    pressure2,
    velocity2,
    elevation2,
    gamma,
    gravitationalConstant;

  if (unitSystem === "metric") {
    // assign metric values and units
    // variable = [Number value, String unit];
    pressure1 = [Math.floor(Math.random() * 500 + 1), "kPa"];
    velocity1 = [Math.floor(Math.random() * 5 + 1), "m/s"];
    velocity2 = [Math.floor(Math.random() * 5 + 1), "m/s"];
    elevation1 = [Math.floor(Math.random() * 5 + 1), "m"];
    elevation2 = [Math.floor(Math.random() * 5 + 1), "m"];
    gamma = [Math.floor(Math.random() * 9810) + 1, "N/m^3"];
    gravitationalConstant = [9.81, "m/s^2"];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
    pressure1 = [Math.floor(Math.random() * 10000 + 1), "psf"];
    velocity1 = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    velocity2 = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    elevation1 = [Math.floor(Math.random() * 15 + 1), "ft"];
    elevation2 = [Math.floor(Math.random() * 15 + 1), "ft"];
    gamma = [Math.floor(Math.random() * 62.4) + 1, "lb/ft^3"];
    gravitationalConstant = [32.2, "ft/s^2"];
  }

  let practiceProblem = {
    topic: "BernoulliEquationSimplified", // topic name goes here as String
    problemStatement:
      "What is the pressure in the pipe at point 2 given the following properties?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      pressure1: pressure1,
      velocity1: velocity1,
      elevation1: elevation1,
      velocity2: velocity2,
      elevation2: elevation2,
      gamma: gamma,
      gravitationalConstant: gravitationalConstant
    },
    unknownVariable: "pressure2", // String name of unknownVariable student will solve for
    relevantFormulas: "p1/gamma + v1^2/(2g) + z1 = p2/gamma + v2^2/(2g) + z2" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.BernoulliEquationSimplified = function BernoulliEquationSimplified(
  knownVariables
) {
  // Extract known variables from input
  let pressure1 = knownVariables.pressure1;
  let velocity1 = knownVariables.velocity1;
  let elevation1 = knownVariables.elevation1;
  let velocity2 = knownVariables.velocity2;
  let elevation2 = knownVariables.elevation2;
  let gamma = knownVariables.gamma;
  let gravitationalConstant = knownVariables.gravitationalConstant;

  // Calculate unknown variable(s)
  let pressure2 = [
    gamma[0] *
      (pressure1[0] / gamma[0] +
        Math.pow(velocity1[0], 2) / (2 * gravitationalConstant[0]) +
        elevation1[0] -
        Math.pow(velocity2[0], 2) / (2 * gravitationalConstant[0]) -
        elevation2[0]),
    "units"
  ];

  // get correct units of uknown variable based on input unit system
  pressure2[1] = pressure1[1];

  return { pressure2: pressure2 }; // {unknownVariable: [Number value, String unit] }
};
