var fs = require('fs');
var content = fs.readFileSync(process.argv[2]);
console.log(content.toString().split('\n').length - 1);

//avoid .toString() by add 'utf8' as second argument in readFileSync