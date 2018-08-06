const overrides = require('react-app-rewired/config-overrides');
const config = require('./config-overrides');
console.log(process.env.NODE_ENV, '+++++')
module.exports = overrides.webpack(config, process.env.NODE_ENV);