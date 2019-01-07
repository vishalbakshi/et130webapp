exports.getProblem = function getProblem(unitSystem) {
  let eta, delta_v, delta_y;
  if (unitSystem == "metric") {
    eta = [0.001 + Math.random(), "Pa*s"];
    delta_v = [Math.floor(Math.random() * 5 + 1), "m/s"];
    delta_y = [Math.floor(Math.random() * 5 + 1), "m"];
  }

  if (unitSystem == "imperial") {
    eta = [0.00003 + Math.random(), "lb*s/ft^2"];
    delta_v = [Math.floor(Math.random() * 15 + 1), "ft/s"];
    delta_y = [Math.floor(Math.random() * 15 + 1), "ft"];
  }

  let practiceProblem = {
    topic: "Shear Stress",
    problemStatement:
      "What is the shear stress inside of a fluid with the following properties?",
    knownVariables: {
      eta: eta,
      delta_v: delta_v,
      delta_y: delta_y
    },
    unknownVariable: "tau",
    relevantFormulas: "tau = eta * delta_v / delta_y"
  };
  return practiceProblem;
};

exports.ShearStress = function ShearStress(knownVariables) {
  // let variables = ["eta", "delta_v", "delta_y", "tau"];
  // Extract variables from input and convert to Double
  let eta = Number(knownVariables.eta[0]);
  let delta_v = Number(knownVariables.delta_v[0]);
  let delta_y = Number(knownVariables.delta_y[0]);

  // Calculate tau
  let tau = (eta * delta_v) / delta_y;

  // get correct units of tau
  if (knownVariables.delta_y[1] == "m") tauUnit = "Pa";
  if (knownVariables.delta_y[1] == "ft") tauUnit = "lb/ft^2";

  return { tau: [tau, tauUnit] };
};
