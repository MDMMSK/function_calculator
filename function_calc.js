function calculator(operator, a = 'string', b = 'string') {
	checkA = typeof (a);
	checkB = typeof (b);
	if (checkA == 'string' || checkB == 'string') {
		return 'Error';
	} else {
		switch (operator) {
			case 'summ':
				return a + b;
			case 'minus':
				return a - b;
			case 'divide':
				return a / b;
			case 'multiply':
				return a * b;
			case 'remainder':
				return a % b;
			case 'pow':
				return a ** b;
			default:
				return 'unknown operation'
		}
	}
}
console.log(calculator('minus', '552', 2));