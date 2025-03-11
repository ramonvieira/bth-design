const stage = require("./config/" + process.env.npm_lifecycle_event);

const env = process.env.NODE_ENV;
const version = process.env.npm_package_version;
module.exports = stage(env, version);
