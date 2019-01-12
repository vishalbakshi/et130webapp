exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  let roughness, diameter, relativeRoughness;

  if (unitSystem === "metric") {
    // assign metric values and units
    // variable = [Number value, String unit];
    roughness = [Math.random() * 30e-6 + 1e-6, "m"];
    diameter = [Math.random(), "m"];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
    roughness = [Math.random() * 30e-5 + 1e-5, "ft"];
    diameter = [Math.random() * 3, "ft"];
  }

  let practiceProblem = {
    topic: "RelativeRoughness", // topic name goes here as String
    problemStatement:
      "What is the relative roughness of a pipe with the following properties?", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
      roughness: roughness,
      diameter: diameter
    },
    unknownVariable: "relativeRoughness", // String name of unknownVariable student will solve for
    relevantFormulas: "Relative Roughness = epsilon/D" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.RelativeRoughness = function RelativeRoughness(knownVariables) {
  // Extract known variables from input and convert to Double
  let roughness = knownVariables.roughness;
  let diameter = knownVariables.diameter;

  // Calculate unknown variable(s)
  let relativeRoughness = [roughness[0] / diameter[0], ""];

  // get correct units of uknown variable based on input unit system

  return { relativeRoughness: relativeRoughness }; // {unknownVariable: [Number value, String unit] }
};
