const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
process.stdout.write('prompt > ');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.includes('cat')) {
    let cmdArray = cmd.split(' ');
    cat(cmdArray[1]);
  } else if (cmd.includes('curl')){
      let cmdArray = cmd.split(' ');
      curl(cmdArray[1]);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write(' \nprompt > ');
  }
});