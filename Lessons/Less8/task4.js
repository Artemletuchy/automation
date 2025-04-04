const massives = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const itogi = massives.filter(function LLL(chislo) {
	return chislo % 2 === 0;
});
console.log(itogi);
