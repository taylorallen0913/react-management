#!/usr/bin/env node

const args = process.argv.slice(2);

if (args[0] === 'ui') {
  // Start server
  require('../src/server');

  // Launch UI
  require('../src/webpack');
} else {
  console.log('Error!');
}
