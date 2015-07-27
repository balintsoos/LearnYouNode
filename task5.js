var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, fileList) {
  if (err) throw err;

  //console.log(files);
  for(var file of fileList) {
  	if(path.extname(file) === '.' + process.argv[3]) {
  		console.log(file);
  	}
  }
});