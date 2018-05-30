var kondisi1 = 1;

console.log(`LOOPING PERTAMA`);
while(kondisi1 <= 20){

	if (kondisi1 % 2 == 0) {
		console.log(`${kondisi1} - I Love Coding`);
	}

	if (kondisi1 == 20) {
		var kondisi2 = kondisi1;
		console.log(`LOOPING KEDUA`);
		while(kondisi2 > 0){
			if (kondisi2 % 2 == 0) {		
				console.log(`${kondisi2} - I Will Become Developer`);
			}
			kondisi2--;
		}
	}
	kondisi1++;
}