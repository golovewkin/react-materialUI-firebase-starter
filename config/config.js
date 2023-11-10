const argv = require("yargs").argv;
const path = require("path");
const nconf = require("nconf");

let configFile;

if (process.env.NODE_ENV === "development" || argv.env === "development") {
  configFile = path.join(__dirname, "config_dev.json");
} else if (process.env.NODE_ENV === "production" || argv.env === "production") {
  configFile = path.join(__dirname, "config_prod.json");
} else {
  configFile = path.join(__dirname, "config_test.json");
}
module.exports = nconf.argv().env().file({ file: configFile });
