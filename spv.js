const os = require('os');
const SPVNode = require('hsd/lib/node/spvnode');
const {exec} = require('child_process');

const node = new SPVNode({
  config: true,
  argv: true,
  env: true,
  logFile: true,
  logConsole: true,
  logLevel: 'debug',
  memory: false,
  workers: true,
  listen: false,
  network: 'main',
  prefix: '~/.holdmyhand',
  rsPort: 53,
  nsPort: 10052,
  httpPort: 10037,
  loader: require
});

setInterval(function() {
  if(os.platform()=="win32") {
    /* Not sure if this works? */
    exec('tasklist | FIND "node.exe h.js"',function(err,stdout,stdin) {
      if(!stdout)
        process.exit(1);
    });
  }
  else {
    exec('pgrep node h.js',function(err,stdout,stdin) {
      if(!stdout)
        process.exit(1);
    });
  }
},1000);

(async () => {
  await node.ensure();
  await node.open();
  await node.connect();

  node.startSync();

})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});

