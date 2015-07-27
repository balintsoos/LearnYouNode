var myModule = require('./myModule.js');

var dir = process.argv[2];
var ext = process.argv[3];

myModule(dir, ext, function(err, filteredFiles){
  if(err) return console.error('Error!', err);

  filteredFiles.forEach(function (file) {
    console.log(file);
  });
});
