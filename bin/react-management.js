#!/usr/bin/env node

const args = process.argv.slice(2);

if (args[0] === 'ui') {
  // Launch UI
  require('../src/webpack/devServer');
} else {
  console.log('Error!');
}
