const fs = require('fs');
module.exports = function (done) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('Something went Wrong!')
    } else {
      done(files.join('\n'))
      // process.stdout.write(files.join('\n'));
      // process.stdout.write('\nprompt > ');
    }
  });
};