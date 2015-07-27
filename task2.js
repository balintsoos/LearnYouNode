
var sum = 0,
	length = process.argv.length;

for(var i = 2; i<length; i++){
	sum += Number(process.argv[i]);
}

console.log(sum);