var module = require('./module');
module(process.argv[2], process.argv[3], function (err, file) {
  file.forEach(function (element) {
    console.log(element);
  });
});