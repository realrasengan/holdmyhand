# Handshake Naming System SPV with System Tray

Runs an hsd spv resolver on port 53.  Does not interfere with default hsd nor BoB.

## Installation
1. Install node, npm, node-gyp with brew, apt, chocolate, etc.
2. Run these commands:
```
git clone https://github.com/realrasengan/holdmyhand
cd holdmyhand
npm install hsd systray
```

## Run
```
node h.js
```

## Post Installation
#### Linux
1. Edit /etc/resolv.conf
```
nameserver 127.0.0.1
```

#### Mac OS X
1. Go to System Preferences -> Network -> Advanced -> DNS
2. Set your DNS to 127.0.0.1
3. Set the Search Domains to .

#### Windows
TODO

## Copyright
Copyright (C) 2020 The Handshake Community

MIT Licensed

