
const path = require('path');

// Verificar qual comando está sendo executado
const scriptName = process.env.npm_lifecycle_event;

// Determinar qual arquivo de configuração usar
let configFile;
if (scriptName === 'build-global') {
  configFile = './config/build-global.js';
} else if (scriptName === 'build-components') {
  configFile = './config/build-components.js';
} else {
  // Fallback para build-global se o comando não for reconhecido
  configFile = './config/build-global.js';
}

const config = require(configFile);
const env = process.env.NODE_ENV || 'dev';
const version = process.env.npm_package_version || require('./package.json').version;

module.exports = config(env, version);
