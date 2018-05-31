var row = 5;

for (var i = 1; i <= row; i++) {
	var output = "";
	for (var j = 1; j <= i; j++) {
		output += "*"
	}
	console.log(`${output}`);
}