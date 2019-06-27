var purify = require("purifycss")

var content = [];
var css = ['**/static/styles/*.css'];

var options = {
  minify: true,
  output: "./static/styles/super.css",
  rejected: true
};

purify(content, css, options, function (purifiedAndMinifiedResult) {
  console.log(purifiedAndMinifiedResult);
});