const merge = require("webpack-merge");

const dev = require("./dev");
const prod = require("./prod");
const common = require("./common");

const lifeCycle = process.env.npm_lifecycle_event || process.env.NODE_ENV;
console.log(`Start lifecycle=${lifeCycle}`);

let config;
switch (lifeCycle) {
  case "start":
    config = merge.smart(dev, common);
    break;
  case "build":
    config = merge.smart(common, prod);
    break;
  default:
    config = merge.smart(dev, common);
}

module.exports = config;
