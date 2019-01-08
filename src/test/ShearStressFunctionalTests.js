var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var Mocha = require("mocha");
var mocha = new Mocha({ ui: "tdd" });

chai.use(chaiHttp);

test("GET response contains correct page headers", function(done) {
  chai
    .request("http://localhost:8080")
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
