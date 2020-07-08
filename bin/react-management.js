#!/usr/bin/env node

const args = process.argv.slice(2);
const { startDevServer } = require('../src/webpack');

if (args[0] === 'ui') {
  // Start server
  require('../src/server');

  // Launch UI
  startDevServer();
} else {
  console.log('Error!');
}
