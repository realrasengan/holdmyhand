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
node h.js &
```


## Post Installation
#### Mac and Linux
```
node setns.js 127.0.0.1
```

#### Windows
```
netsh interface ipv4 show config
```
Then
```
netsh interface ipv4 set dns name="INTERFACE" static 127.0.0.1
```

## Copyright
Copyright (C) 2020 The Handshake Community

MIT Licensed

