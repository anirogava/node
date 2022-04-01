// npm - global command, comes with node
// npm --version

// local dependency - use it in any project
//npm install -g <packageName>

// package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create properies etc)
//npm init
// npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(items);
console.log(newItem);
