const express = require('express');
const { closeDevServer } = require('../webpack');

const app = express();

app.post('/close', async (req, res) => {
  res.sendStatus(200);
  exitCleanup();
  // process.exit(0);
});

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
