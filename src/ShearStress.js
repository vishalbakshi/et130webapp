exports.ShearStress = function ShearStress(knownVariables) {
  // let variables = ["eta", "delta_v", "delta_y", "tau"];
  // Extract variables from input and convert to Double
  let eta = Number(knownVariables.eta[0]);
  let delta_v = Number(knownVariables.delta_v[0]);
  let delta_y = Number(knownVariables.delta_y[0]);

  // Calculate tau
  let tau = (eta * delta_v) / delta_y;
  return [tau, "unit"];
};
