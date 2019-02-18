const prettyPracticeProblem = require('../../public/prettyPracticeProblem');
const test = require("tape");

const topics = [
    'ShearStress',
    'PressureHeight',
    'VerticalWallForce',
    'ReynoldsNumber1',
    'ReynoldsNumber2',
    'RelativeRoughness',
    'BernoulliEquationExpanded',
    'BernoulliEquationExpanded',
    'HeadLoss'
];

test('prettyPracticeProblem returns an imperial practiceProblem object for all topics', function(t){
    topics.forEach(function(topic){
        
        let practiceProblem = require('../' + topic).getProblem('imperial');
        t.looseEqual(Object.keys(prettyPracticeProblem(practiceProblem)), Object.keys(practiceProblem), topic);
        
    });
    t.end();
});

test('prettyPracticeProblem returns an metric practiceProblem object for all topics', function(t){
    topics.forEach(function(topic){
        
        let practiceProblem = require('../' + topic).getProblem('metric');
        t.looseEqual(Object.keys(prettyPracticeProblem(practiceProblem)), Object.keys(practiceProblem), topic);
        
    });
    t.end();
});