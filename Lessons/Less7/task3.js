function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('The typeof must be Number');
	}

	if (denominator === 0) {
		throw new Error('Denominator not be a zero');
	}

	return numerator / denominator;
}

try {
	console.log(divide(7, 0));
} catch (error) {
	console.log(error);
} finally {
	console.log('The End');
}

try {
	console.log(divide(7, 'zoro'));
} catch (error) {
	console.log(error);
} finally {
	console.log('The End');
}
