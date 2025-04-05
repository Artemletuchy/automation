function task(num) {
	if (num <= 0) {
		return;
	}

	console.log(num);

	task(num - 1);
}

task(5);

console.log('____________________');

function task2(num) {
	for (let i = num; i > 0; i--) {
		console.log(i);
	}
}

task2(10);
