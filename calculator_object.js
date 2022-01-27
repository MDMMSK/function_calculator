function Calc(key, a, b) {
	let operations = {
		"sub": a - b,
		"sum": a + b,
		"mult": a * b,
		"div": a / b,
	}
	if (key in operations) {
		if (typeof (a) == 'number' && typeof (b) == 'number') {
			return operations[key];
		} else {
			return ('error');
		}
	} else {
		return ('unknown operator');
	}
}
console.log(Calc('mult', 5, -2));
console.log(Calc('div', 5, 0));
console.log(Calc('sub', 5, -2));
console.log(Calc('sum', 5, 5));
console.log(Calc('marafon', 5, -2));
console.log(Calc('mult', 'dg', -2));
console.log(Calc('mult', 5));