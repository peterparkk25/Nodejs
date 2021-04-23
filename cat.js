const fs = require('fs');

module.exports = function (name) {
  fs.readFile(name, (err, data) => {
    if (err) {
      throw err;
    } else {
      //process.stdout.write(files.join('\n'));
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    }
  });
};
