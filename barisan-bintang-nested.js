var row = process.argv[2];

for (var i = 1; i <= row; i++) {
	var output = "";
	for (var j = row - 1; j >= i; j--) {
		output += "*"
	}
	for (var j = 1; j <= i; j++) {
		output += "*"
	}
	console.log(`${output}`);
}

/*
	OUTPUT

		node barisan-bintang-nested.js 3
		***
		***
		***

*/