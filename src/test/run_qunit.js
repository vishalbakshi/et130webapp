"use strict";

const page = require("webpage").create();
const port = process.env.PORT || 8080;
const url = "http://localhost:" + port + "/test";

page.open(url, function() {
  phantom.exit(0);
});
