const os = require('os');
const {exec} = require('child_process');

let argv=process.argv;
let argc=argv.length;

if(argc!=3) {
  console.log("node setns.js <ip>");
}
else {
  switch(os.platform()) {
    case "darwin":
      exec(`route get handshake.org | grep interface`, function(err,stdout,stderr) {
        result = stdout.split(':')[1].trim();
        exec(`networksetup -listnetworkserviceorder |grep `+result, function(err,stdout,stderr) {
          result = stdout.split(',')[0].split(':')[1].trim();
          exec(`sudo networksetup -setdnsservers `+result+` `+argv[2]);
        });
      });
      break;
    case "linux":
      exec(`sudo echo nameserver `+argv[2]+` > /etc/resolv.conf`);
      break;
    case "windows":
      break;
  }
}
