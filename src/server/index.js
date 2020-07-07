const express = require('express');

const app = express();

const PORT = 5000;

const server = app.listen(PORT, () =>
  console.log(`Express server started on port ${PORT}...`),
);

const exitCleanup = () => {
  server.close();
};

process.on('exit', exitCleanup.bind(null, { cleanup: true }));
