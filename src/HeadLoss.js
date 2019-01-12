exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let resistanceCoefficient, velocity, headLoss, gravitationalConstant;
  resistanceCoefficient = [Math.random() * 200, ""];

  if (unitSystem === "metric") {
    // assign metric values and units
    // variable = [Number value, String unit];
    velocity = [Math.floor(Math.random() * 5 + 1), "m/s"];
    gravitationalConstant = [9.81, "m/s^2"];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
    velocity = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    gravitationalConstant = [32.2, "ft/s^2"];
  }

  let practiceProblem = {
    topic: "HeadLoss", // topic name goes here as String
    problemStatement: "What is the Head Loss given the following properties?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      resistanceCoefficient: resistanceCoefficient,
      velocity: velocity,
      gravitationalConstant: gravitationalConstant
    },
    unknownVariable: "headLoss", // String name of unknownVariable student will solve for
    relevantFormulas: "hL = K * v^2/2g" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.HeadLoss = function HeadLoss(knownVariables) {
  // Extract known variables from input and convert to Double
  let resistanceCoefficient = knownVariables.resistanceCoefficient;
  let velocity = knownVariables.velocity;
  let gravitationalConstant = knownVariables.gravitationalConstant;

  // Calculate unknown variable(s)
  let headLoss = [
    (resistanceCoefficient[0] * Math.pow(velocity[0], 2)) /
      (2 * gravitationalConstant[0]),
    "units"
  ];

  // get correct units of uknown variable based on input unit system
  if (velocity[1] === "m/s") headLoss[1] = "m";
  if (velocity[1] === "ft/s") headLoss[1] = "ft";

  return { headLoss: headLoss }; // {unknownVariable: [Number value, String unit] }
};
