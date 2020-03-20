const os = require('os');
const {exec} = require('child_process');

let argv=process.argv;
let argc=argv.length;

if(argc!=2 && argc!=3) {
  console.log("node setns.js <ip (or blank to clear)>");
}
else {
  switch(os.platform()) {
    case "darwin":
      exec(`route -n get default | grep interface`, function(err,stdout,stderr) {
        result = stdout.split(':')[1].trim();
        exec(`networksetup -listnetworkserviceorder |grep `+result, function(err,stdout,stderr) {
          result = stdout.split(',')[0].split(':')[1].trim();

          console.log(`networksetup -setdnsservers `+result+(argc==3 ? ` `+argv[2] : ''));
          exec(`networksetup -setdnsservers `+result+(argc==3 ? ` `+argv[2] : ' 1.1.1.1'));
        });
      });
      break;
    case "linux":
      if(argc==3)
        exec(`cp /etc/resolv.conf /etc/resolv.conf.bak && echo nameserver `+argv[2]+` > /etc/resolv.conf`);
      else
        exec(`cp /etc/resolv.conf.bak /etc/resolv.conf`);
      break;
    case "windows":
      break;
  }
}
