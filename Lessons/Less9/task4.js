const person = {
	firstName: 'Den',
	lastname: 'Koval',
	age: 44,
};

person.email = 'fufan@gmail.com';
delete person.age;

console.log(person);
