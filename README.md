# get-yo-rc-path
[![NPM version](https://badge.fury.io/js/get-yo-rc-path.svg)](https://badge.fury.io/js/get-yo-rc-path) [![Build Status](https://travis-ci.org/dustinspecker/get-yo-rc-path.svg)](https://travis-ci.org/dustinspecker/get-yo-rc-path) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/get-yo-rc-path.svg)](https://coveralls.io/r/dustinspecker/get-yo-rc-path?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/get-yo-rc-path/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/get-yo-rc-path) [![Dependencies](https://david-dm.org/dustinspecker/get-yo-rc-path.svg)](https://david-dm.org/dustinspecker/get-yo-rc-path/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/get-yo-rc-path/dev-status.svg)](https://david-dm.org/dustinspecker/get-yo-rc-path/#info=devDependencies&view=table)

> Get the path of the nearest .yo-rc.json file

## Install
```
npm install --save get-yo-rc-path
```

## Usage
### ES2015
```javascript
// directory structure
// /user/
//   - home/
//     - awesome-project/
//       - script.js
//     - .yo-rc.json

// script.js
import getYoRcPath from 'get-yo-rc-path';

getYoRcPath().then(yoRcPath => {
  // => yoRcPath = '/user/home/.yo-rc.json'
});

getYoRcPath.dir().then(yoRcDir => {
  // => yoRcPath = '/user/home'
});
```

### ES5
```javascript
// directory structure
// /user/
//   - home/
//     - awesome-project/
//       - script.js
//     - .yo-rc.json

// script.js
var getYoRcPath = require('get-yo-rc-path');

getYoRcPath().then(function (yoRcPath) {
  // => yoRcPath = '/user/home/.yo-rc.json'
});

getYoRcPath.dir().then(function (yoRcDir) {
  // => yoRcPath = '/user/home'
});
```

## API
### getYoRcPath()
Returns a Promise that resolves to a String of the full path or null if not found.

### getYoRcPath.dir()
Returns a Promise that resolves to a String of the directory or null if not found.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
