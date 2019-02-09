"use strict";

const page = require("webpage").create();
const port = process.env.PORT || 8080;
const url = "http://localhost:" + port + "/test";
console.log(url);
page.open(url, function() {
  setTimeout(function() {
    var passes = page.evaluate(function() {
      phantom.exit(0);
    });
  }, 100);
});
