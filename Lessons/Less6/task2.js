function howOld(age) {
	if (age >= 18) {
		return true;
	}
	return false;
}

console.log(howOld(25));
console.log(howOld(15));

function howOld2(age) {
	return age >= 18 ? 'The age is biggest 18 ? - ' + 'yes' : 'The age is biggest 18 ? - ' + 'no';
}

console.log(howOld2(18));
console.log(howOld2(11));

const howOld3 = (age) => (age >= 18 ? 'yes' : 'no');

console.log(howOld3(29));
console.log(howOld3(14));

const howOld4 = function (age) {
	if (age >= 18) {
		return 'Is the person an adult? - ' + true;
	} else {
		return 'Is the person an adult? - ' + false;
	}
};

console.log(howOld4(101));
console.log(howOld4(0));
