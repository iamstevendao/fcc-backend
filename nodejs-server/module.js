var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, content) => {
    if (err) return callback(err);
    var files = [];
    content.forEach((file) => {
      if (path.extname(file) == '.' + ext) {
        files.push(file);
      }
    });
    callback(null, files);
  })
}