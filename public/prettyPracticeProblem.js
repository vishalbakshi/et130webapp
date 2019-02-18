// Manages some of the formatting of variable names and values


let topics = {
    ShearStress: 'Shear Stress (Stationary-Free End Conditions)',
    PressureHeight: 'Pressure-Height Relationship (Static Fluids)',
    VerticalWallForce: 'Vertical Wall Fluid Force',
    ReynoldsNumber1: "Reynold's Number (Kinematic Viscosity)",
    ReynoldsNumber2: "Reynold's Number (Dynamic Viscosity)",
    RelativeRoughenss: "Relative Roughness",
    BernoulliEquationSimplified: "Bernoulli Equation (Simplified)",
    BernoulliEquationExpanded: "Bernoulli Equation (Expanded)",
    HeadLoss: "Head Loss"
};

let variables = {
    'eta': '\\(\\eta\\)',
    'delta_v': '\\(\\Delta\\)v',
    'delta_y': '\\(\\Delta\\)y',
    'delta_h': '\\(\\Delta\\)h',
    'delta_p': '\\(\\Delta\\)p',
    'tau': '\\(\\tau\\)',
    'gamma': '\\(\\gamma\\)',
    'heightOfFluid': '\\(h_{fluid}\\)',
    'wallLength': '\\(L_{wall}\\)',
    'wallDepth': '\\(D_{wall}\\)',
    'resultantForce': '\\(F_{R}\\)',
    'velocity': '\\(v\\)',
    'diameter': '\\(D\\)',
    'kinematicViscosity': '\\(\\nu\\)',
    'dynamicViscosity': '\\(\\eta\\)',
    'reynoldsNumber': '\\(Re\\)',
    'roughness': '\\(\\epsilon\\)',
    'relativeRoughness': '\\(\\frac{\\epsilon}{D}\\)',
    'density': '\\(\\rho\\)',
    'pressure1': '\\(p_{1}\\)',
    'pressure2': '\\(p_{2}\\)',
    'velocity1': '\\(v_{1}\\)',
    'velocity2': '\\(v_{2}\\)',
    'elevation1': '\\(z_{1}\\)',
    'elevation2': '\\(z_{2}\\)',
    'gravitationalConstant': '\\(g\\)',
    'headLoss': '\\(h_{L}\\)',
    'headAdded': '\\(h_{A}\\)',
    'resistanceCoefficient': '\\(K\\)'
}


let formulas = {
    'tau = eta * delta_v / delta_y': '\\(\\tau = \\eta * \\frac{\\Delta v}{\\Delta y}\\)'
}


$(document).ready(function(){
    $('p[class=topic').text(topics[$('p[class=topic').text()]);
    $('span[class=variable]').each(function(idx, el){
        console.log(variables[$(el).text()], el);
        $(el).text(variables[$(el).text()]);

    })

    $('span[class=formula]').text(formulas[$('span[class=formula]').text()])

    $('span[class=number]').each(function(idx, el){
        let textVal = $(el).text();
        if (textVal.split('').includes('.')){
            $(el).text(Number(textVal).toFixed(5))
        }
    })
})