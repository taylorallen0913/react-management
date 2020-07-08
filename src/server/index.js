const express = require('express');
const cors = require('cors');
const { closeDevServer } = require('../webpack');

const app = express();

app.use(cors());

// Change to be dynamic later
const PORT = 5000;

const server = app.listen(PORT, () =>
  console.log(`Express server started on port ${PORT}...`),
);

const closeProcesses = () => {
  return new Promise(async (resolve) => {
    await closeDevServer();
    server.close();
    resolve();
  });
};

const exitCleanup = async () => {
  await closeProcesses();
  process.exit(0);
};

process.on('SIGTERM', exitCleanup);
process.on('SIGINT', exitCleanup);
