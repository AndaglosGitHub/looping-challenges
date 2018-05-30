console.log(`LOOPING PERTAMA`);

for (var i = 1; i <= 20; i++) {
	console.log(`${i} - I Love Coding`);

	if (i == 20) {
		console.log(`LOOPING KEDUA`);
		for (var j = i; j > 0; j--) {
			console.log(`${j} - I Will Become Developer`);
		}
	}
}