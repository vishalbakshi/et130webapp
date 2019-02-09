"use strict";

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
