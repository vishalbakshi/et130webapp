exports.getProblem = function getProblem(unitSystem) {
  // Define variables associated with relevant formuals
  if (unitSystem === "metric") {
    // assign metric values and units
    // variable = [Number value, String unit];
  }

  if (unitSystem === "imperial") {
    // assign imperial values and units
    // variable = [Number value, String unit];
  }

  let practiceProblem = {
    topic: "", // topic name goes here as String
    problemStatement: "", // generalize problemStatement for all problems
    knownVariables: {
      // reference variable definitions above
    },
    unknownVariable: "", // String name of unknownVariable student will solve for
    relevantFormulas: "" // String of relevant formulas (right now just one)
  };
  return practiceProblem;
};

exports.TopicTemplate = function TopicTemplate(knownVariables) {
  // Extract known variables from input and convert to Double

  // Calculate unknown variable(s)

  // get correct units of uknown variable based on input unit system

  return; // {unknownVariable: [Number value, String unit] }
};
