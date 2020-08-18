# SYS-GENERIC

It's a template for webservices and command line tools...

## Deploy
First, go to the `server` folder and transpille all:
```bash
$ cd server
$ npx tsc
```

Download all dependencies and transpile:
```bash
$ npm i
```

Later test with mocha:
```bash
$ npm test
```

## Usage
This app contains some example commands such as:
- help
- setup
- server

For execute some of the commands listed bellow, go to the `server` folder:
```bash
$ cd server
```

...and layer execute in console:
```bash
$ npm start [command]
```

For example:
```bash
$npm start server
```