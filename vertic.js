function showVerticalMessage(str) {
	let strLength = str.length;
	let result = '';

	if (str[0] === 'м' && strLength > 10) {
		str = 'М' + str.substr(1, 9);
		strLength = 10;
	} else if (str[0] === 'м') {
		str = 'М' + str.slice(1);
	} else if (strLength > 10) {
		str = str.substr(0, 10);
		strLength = 10;
	}

	for (i = 0; i <= (strLength - 1); i++) {
		result = result + '\n' + str[i];
	};

	return result = result.slice(1);

};
console.log(showVerticalMessage('марафон последний'));