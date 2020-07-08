const open = require('better-opn');
const devServer = require('./devServer');

// Change to be dynamic later
const PORT = 8000;

devServer.listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  open(`http://localhost:${PORT}`);
  console.log('React Management UI started on port ', PORT);
});
