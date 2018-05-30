/*Counter 1*/
for (var i = 1; i <= 100; i++) {	
	i % 2 == 0 ? console.log(`Genap`) : console.log(`Ganjil`);	
}
console.log(`\n`)

/*Counter 2*/
for (var i = 1; i <= 100;) {	
	i % 3 == 0 ? console.log(`${i} Kelipatan 3`) : '';	
	i += 2;
}
console.log(`\n`)

/*Counter 5*/
for (var i = 1; i <= 100;) {	
	i % 6 == 0 ? console.log(`${i} Kelipatan 6`) : '';	
	i += 5;
}
console.log(`\n`)

/*Counter 9*/
for (var i = 1; i <= 100;) {	
	i % 10 == 0 ? console.log(`${i} Kelipatan 10`) : '';	
	i += 9;
}