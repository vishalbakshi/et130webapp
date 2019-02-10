// thanks ariya: https://ariya.io/2012/03/phantomjs-and-travis-ci
// https://github.com/ariya/phantomjs/blob/master/examples/run-qunit.js
"use strict";
var system = require("system");

/**
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */
function waitFor(testFx, onReady, timeOutMillis) {
  var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3001, //< Default Max Timout is 3s
    start = new Date().getTime(),
    condition = false,
    interval = setInterval(function() {
      if (new Date().getTime() - start < maxtimeOutMillis && !condition) {
        // If not time-out yet and condition not yet fulfilled
        condition = typeof testFx === "string" ? eval(testFx) : testFx(); //< defensive code
      } else {
        if (!condition) {
          // If condition still not fulfilled (timeout but condition is 'false')
          console.log("'waitFor()' timeout");
          phantom.exit(1);
        } else {
          // Condition fulfilled (timeout and/or condition is 'true')
          console.log(
            "'waitFor()' finished in " + (new Date().getTime() - start) + "ms."
          );
          typeof onReady === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
          clearInterval(interval); //< Stop this interval
        }
      }
    }, 10); //
}

if (system.args.length !== 2) {
  console.log("Usage: run-qunit.js URL");
  phantom.exit(1);
}

var page = require("webpage").create();
page.settings.resourceTimeout = 10000;

// Route "console.log()" calls from within the Page context to the main Phantom context (i.e. current "this")
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onResourceError = function(resourceError) {
  console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
  console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
};

page.open(system.args[1], function(status) {
  if (status !== "success") {
    console.log("Unable to access network");
    phantom.exit(1);
  } else {
    waitFor(
      function() {
        return page.evaluate(function() {
          var el = document.getElementById("qunit-testresult");
          if (el && el.innerText.match("completed")) {
            return true;
          }
          return false;
        });
      },
      function() {
<<<<<<< HEAD
=======
        let failedTest = page.evaluate(function() {
          let el = document.getElementById("qunit-tests");
          let failedTests = el.getElementsByClassName("fail");
          console.log(Array.isArray(failedTests));
        });

>>>>>>> 43b2e92e36206d5af93ddf0cb14b2c1af07885b9
        var failedNum = page.evaluate(function() {
          console.log(document.getElementsByClassName('fail')[0].innerText);
          var el = document.getElementById("qunit-testresult");
          console.log(el.innerText);
          try {
            return el.getElementsByClassName("failed")[0].innerHTML;
          } catch (e) {
            console.error("Error in qunit tests: ", e);
          }
          return 10000;
        });
        phantom.exit(parseInt(failedNum, 10) > 0 ? 1 : 0);
      }
    );
  }
});
