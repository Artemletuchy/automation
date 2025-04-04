function handleNum(num, callback, callback2) {
	return num % 2 === 0 ? callback() : callback2();
}

function handleEven() {
	console.log('number is even');
}

function handleOdd() {
	console.log('number is odd');
}

handleNum(4, handleEven, handleOdd);
