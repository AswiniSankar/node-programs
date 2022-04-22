const os = require('os');
const path = require('path');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var directoryName = path.parse(__filename);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Directory Name: ${directoryName}`);
