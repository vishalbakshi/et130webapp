const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const Mocha = require("mocha");
const mocha = new Mocha({ ui: "tdd" });
const selenium = require("selenium-webdriver");
const server = require("../server.js")
chai.use(chaiHttp);

const port = process.env.PORT || 8080;

test("GET response contains correct page headers", function(done) {
  chai
    .request("http://localhost:" + port)
    .get("/")
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "Topic");
      assert.include(res.text, "Problem Statement");
      assert.include(res.text, "Known Variables");
      assert.include(res.text, "Unknown Variable");
      assert.include(res.text, "Known Variables");
      assert.include(res.text, "Relevant Formulas");
      assert.include(res.text, "Answer");
      done();
    });
});

test("User can select topic and receive problems from that topic", function(done) {
  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "PressureHeight" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "PressureHeight");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "VerticalWallForce" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "VerticalWallForce");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "ReynoldsNumber1" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "ReynoldsNumber1");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "ReynoldsNumber2" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "ReynoldsNumber2");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "RelativeRoughness" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "RelativeRoughness");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "BernoulliEquationSimplified" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "BernoulliEquationSimplified");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "BernoulliEquationExpanded" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "BernoulliEquationExpanded");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .query({ topic: "HeadLoss" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "HeadLoss");
    });

  chai
    .request("http://localhost:8080")
    .get("/")
    .query({ topic: "ShearStress" })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "ShearStress");
    });

  chai
    .request("http://localhost:" + port)
    .get("/")
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "ShearStress");
      done();
    });
    
});

