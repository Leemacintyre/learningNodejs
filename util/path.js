const path = require("path");
const main = require("require-main-filename")();
module.exports = path.dirname(main);
