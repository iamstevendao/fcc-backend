var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, data) {
  data.forEach((value) => {
    if (path.extname(value) == '.' + process.argv[3]) {
      console.log(value);
    }
  });
})