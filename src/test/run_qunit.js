"use strict";

/*
const phantom = require("phantomjs-prebuilt");
const page = require("webpage").create();

page.open("http://localhost:8080/test", function(status) {
  if (status != "success") {
    console.log("Unable to access network");
    phantom.exit(1);
  } else {
    // do the checks for tests
    let title = page.evaluate(function() {
      return document.title;
    });
  }
});
*/
var page = require("webpage").create();

page.open("http://localhost:8080/test", function() {
  setTimeout(function() {
    var passes = page.evaluate(function() {
      return [document.getElementsByClassName("pass").length, document.getElementsByClassName("fail").length;
    });

    console.log(passes.length);

    phantom.exit();
  }, 5000);
});
