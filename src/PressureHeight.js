exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let delta_p, delta_h, gamma;

  if (unitSystem === "metric") {
    delta_h = [Math.floor(Math.random() * 5 + 1), "m"];
    gamma = [Math.floor(Math.random() * 9810), "N/m^3"];
  }

  if (unitSystem === "imperial") {
    delta_h = [Math.floor(Math.random() * 15 + 1), "ft"];
    gamma = [Math.floor(Math.random() * 62.4), "lb/ft^3"];
  }

  let practiceProblem = {
    topic: "PressureHeight", // topic name goes here as String
    problemStatement:
      "What is the difference in pressure between two points inside a continuous static body of fluid given the following?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      delta_h: delta_h,
      gamma: gamma
    },
    unknownVariable: "delta_p", // String name of unknownVariable student will solve for
    relevantFormulas: "delta_p = gamma * delta_h" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.PressureHeight = function PressureHeight(knownVariables) {
  // Extract known variables from input and convert to Double
  let delta_h = Number(knownVariables.delta_h[0]);
  let gamma = Number(knownVariables.gamma[0]);

  // Calculate unknown variable(s)
  let delta_p = [delta_h * gamma, "units"];

  // get correct units of uknown variable based on input unit system
  if (knownVariables.delta_h[1] === "ft") delta_p[1] = "lb/ft^2";
  if (knownVariables.delta_h[1] === "m") delta_p[1] = "Pa";

  return { delta_p: delta_p }; // {unknownVariable: [Number value, String unit] }
};
