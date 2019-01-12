exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let resultantForce, heightOfFluid, gamma, wallLength, wallDepth;

  if (unitSystem === "metric") {
    // assign metric values and units
    // variable = [Number value, String unit];
    heightOfFluid = [Math.floor(Math.random() * 5 + 1), "m"];
    wallLength = [Math.floor(Math.random() * 5 + 1), "m"];
    wallDepth = [Math.floor(Math.random() * 5 + 1), "m"];
    gamma = [Math.floor(Math.random() * 9810), "N/m^3"];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
    heightOfFluid = [Math.floor(Math.random() * 15 + 1), "ft"];
    wallLength = [Math.floor(Math.random() * 15 + 1), "ft"];
    wallDepth = [Math.floor(Math.random() * 15 + 1), "ft"];
    gamma = [Math.floor(Math.random() * 62.4), "lb/ft^3"];
  }

  let practiceProblem = {
    topic: "VerticalWallForce", // topic name goes here as String
    problemStatement:
      "What is the resultant force of the fluid on the vertical wall given the following?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      heightOfFluid: heightOfFluid,
      gamma: gamma,
      wallLength: wallLength,
      wallDepth: wallDepth
    },
    unknownVariable: "resultantForce", // String name of unknownVariable student will solve for
    relevantFormulas: "F = gamma * h / 2 * A" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.VerticalWallForce = function VerticalWallForce(knownVariables) {
  // Extract known variables from input and convert to Double
  let heightOfFluid = Number(knownVariables.heightOfFluid[0]);
  let gamma = Number(knownVariables.gamma[0]);
  let wallLength = Number(knownVariables.wallLength[0]);
  let wallDepth = Number(knownVariables.wallDepth[0]);

  // Calculate unknown variable(s)
  let resultantForce = [
    ((gamma * heightOfFluid) / 2) * wallLength * wallDepth,
    "units"
  ];

  // get correct units of uknown variable based on input unit system
  if (knownVariables.heightOfFluid[1] === "m") resultantForce[1] = "N";
  if (knownVariables.heightOfFluid[1] === "ft") resultantForce[1] = "lbs";

  return { resultantForce: resultantForce }; // {unknownVariable: [Number value, String unit] }
};
