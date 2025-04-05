// Task 4.1

let radius = 30;
let p = Math.PI;

function radiusCircleFun() {
	return p * radius ** 2;
}

console.log(radiusCircleFun().toFixed(2));

let radiusCircle = p * radius * radius;

console.log(radiusCircle.toFixed(2));

// Task 4.2
let length = 10;
let width = 15;

function radiusCircleFun2() {
	return length * width;
}

console.log(radiusCircleFun2().toFixed(2));

let radiusCircle2 = length * width;

console.log(radiusCircle2.toFixed(2));

//Task 4.3

let radius2 = 25;
let height = 40;

function volumeCyl() {
	return p * Math.pow(`${radius2}`, 2) * height;
}

console.log(volumeCyl().toFixed(2));

let volumeCyl2 = p * radius2 * radius2 * height;

console.log(volumeCyl2.toFixed(2));
