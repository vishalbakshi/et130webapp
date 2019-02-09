"use strict";

const page = require("webpage").create();
const port = process.env.PORT || 8080;
const url = "http://localhost:" + port + "/test";

page.open(url, function() {
  setTimeout(function() {
    var passes = page.evaluate(function() {
      return [document.getElementsByClassName("pass").length, document.getElementsByClassName("fail").length;
    });

    console.log(passes.length);

    phantom.exit();
  }, 5000);
});
