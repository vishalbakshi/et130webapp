exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let pressure1,
    velocity1,
    elevation1,
    headLoss,
    headAdded,
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
    elevation1 = [Math.floor(Math.random() * 5 + 1), "m"];
    pressure2 = [Math.floor(Math.random() * 500 + 1), "kPa"];
    velocity2 = [Math.floor(Math.random() * 5 + 1), "m/s"];
    elevation2 = [Math.floor(Math.random() * 5 + 1), "m"];
    headLoss = [Math.floor(Math.random() * 10 + 1), "m"];
    gamma = [Math.floor(Math.random() * 9810) + 1, "N/m^3"];
    gravitationalConstant = [9.81, "m/s^2"];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
    pressure1 = [Math.floor(Math.random() * 10000 + 1), "psf"];
    velocity1 = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    elevation1 = [Math.floor(Math.random() * 15 + 1), "ft"];
    pressure2 = [Math.floor(Math.random() * 10000 + 1), "psf"];
    velocity2 = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    elevation2 = [Math.floor(Math.random() * 15 + 1), "ft"];
    headLoss = [Math.floor(Math.random() * 20 + 1), "ft"];
    gamma = [Math.floor(Math.random() * 62.4) + 1, "lb/ft^3"];
    gravitationalConstant = [32.2, "ft/s^2"];
  }

  let practiceProblem = {
    topic: "BernoulliEquationExpanded", // topic name goes here as String
    problemStatement:
      "How much head must a pump add to a system with the following properties?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      pressure1: pressure1,
      velocity1: velocity1,
      elevation1: elevation1,
      headLoss: headLoss,
      pressure2: pressure2,
      velocity2: velocity2,
      elevation2: elevation2,
      gamma: gamma,
      gravitationalConstant: gravitationalConstant
    },
    unknownVariable: "headAdded", // String name of unknownVariable student will solve for
    relevantFormulas:
      "p1/gamma + v1^2/(2g) + z1 - hL + hA = p2/gamma + v2^2/(2g) + z2" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.BernoulliEquationExpanded = function BernoulliEquationExpanded(
  knownVariables
) {
  // Extract known variables from input
  let pressure1 = knownVariables.pressure1;
  let velocity1 = knownVariables.velocity1;
  let elevation1 = knownVariables.elevation1;
  let headLoss = knownVariables.headLoss;
  let pressure2 = knownVariables.pressure2;
  let velocity2 = knownVariables.velocity2;
  let elevation2 = knownVariables.elevation2;
  let gamma = knownVariables.gamma;
  let gravitationalConstant = knownVariables.gravitationalConstant;

  // Calculate unknown variable(s)
  let headAdded = [
    (pressure2[0] - pressure1[0]) / gamma[0] +
      (Math.pow(velocity2[0], 2) - Math.pow(velocity1[0], 2)) /
        (2 * gravitationalConstant[0]) +
      elevation2[0] -
      elevation1[0] +
      headLoss[0],
    "units"
  ];

  // get correct units of uknown variable based on input unit system
  if (headLoss[1] === "ft") headAdded[1] = "ft";
  if (headLoss[1] === "m") headAdded[1] = "m";

  return { headAdded: headAdded }; // {unknownVariable: [Number value, String unit] }
};
