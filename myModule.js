var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {

  fs.readdir(dir, function (err, fileList) {
    if (err) return callback(err);
    
    var filteredList = fileList.filter(function (file) {
      return path.extname(file) === '.' + ext;
    });
    return callback(null, filteredList);
  });
}