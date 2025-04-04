// console.log("Привет, JavaScript в Node.js! 🚀");

// let Name = "Jone"; // String
// let age = 30; // Nubmer
// let isDeveloper = true; //Boolean
// let empty = null; // Null
// let undef = undefined // undefined
// let symbol = Symbol('id') // symbol
// let Bint = 12345678987654n //Bint

// console.log(typeof Name, Name);
// console.log(typeof age, age);
// console.log(typeof isDeveloper, isDeveloper);
// console.log(typeof empty, empty);
// console.log(typeof undef, undef);
// console.log(typeof symbol, symbol);
// console.log(typeof Bint, Bint);

// let obj = { name:  "test"} //обект
// let obр = ['Test'] // массив

// let age = 17;

// function canDrive(age){

//   if (age >= 18){
//     return true;
//   } else {
//     return false
//   }
// }

// console.log(CanDrive(age))

// let username = 4

// function greet(name){
//   if (name === "" || name === undefined){
//     return "Hi, my friend"
//   } else {
//     return "Hi, " + name + " !"
//   }
// }

// console.log(greet(username))

// let N = 6

// function isEven(number){
//   if(typeof number !== "number"){                            //"number" в ковычках потому что typeof всегда возвращает строку а не тип данных
//     return "Error it is not number"
//   }

//   if (number % 2 === 0){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isEven(N))

// let nameA = "Artem"
// let lastName = "Letuchy"

// console.log(`Log: ${nameA} ${lastName}`)

// console.log('Hello' === 'Hello' ? 1 : 0)

// console.log("age" === `${radius}` ? "Yes u best": "No it is not true") // он сравнивает и выдает да или нет неважно что там будет написано

// let firstName = null;
// let lastName = 'Guru';

// function makeFullName(firstName, lastName){

//   if(firstName === null || firstName ===  undefined){

//      firstName = "Unknown"

//   }
//   if(lastName === null || lastName ===  undefined){

//     lastName = "Unknown"

//  }
//  return firstName + " " + lastName
// }
// console.log(makeFullName(firstName, lastName))

// let firstName = null;

// function makeFullName(firstName){

//   return firstName = (firstName === null || firstName ===  undefined) ? "Un" : firstName

// }
// console.log(makeFullName(firstName))

// let a = 9;

// if (a === 9 ){
//   console.log("Molodec Golova")
// }
// else if (a === 10){
//   console.log("Molodec Golovaaaaaaaaa")
// }
// else {
//  console.log("Nu ne povezlo")
// }

// let fufan = 1;

// if (fufan === 1 || fufan === 2 || fufan === 3){
//   console.log("bolt")
// }
// else if (fufan ===4 && fufan === 5){
//   console.log("bolt 2")
// }
// else if (fufan === 1){
//   console.log("bolt 3")
// }
// else {
//   console.log("BOLTARA")
// }

// let f = undefined // если переменная или данные равны null or undefind тогда ?? сделают по дефолту tort

// let h = f ?? "tort"

// console.log(h)

// let Userid = 30;

// let type;

// switch (Userid){

//   case  2:{
//     console.log(type = "net")
//   }
//   break;

//   case 30:{
//     console.log(type = "no")
//   }
//   break

//   case  3:{
//     console.log(type = "true")
//   }

//     break;

//   default:
// 		type = 'Unknown';
//     console.log(type)

// }

//___________________________________________________

// function divide (a ,b){
//   if (b === 0 ){
//     throw new Error ('Cannot divide by zero')
//   }
//   return a / b
// }

// try {
//   console.log(divide(10 ,0))
// }
// catch (error) {
//   console.log(error)
// }
// finally {
//   console.log('This will always run') // этот блок всегда выполняется и нужен для того что бы даже если будет ошибка то выполнить действие которое нам важно выполнить - например закрытие коннекшена с базой данных
// }

// _____________________________________________

// function summALL(){ //  - массивовидный обьект

//   let sum = 5;
//   for (let i = 0; i < arguments.length; i++){
//      sum += arguments[i]
//   }
//   return sum
// }

// console.log(summALL())
// console.log(summALL(1,2,3,4,5))

// function summALL(...args){ // ...args - массив

//   console.log(args)
//   let sum = 0;
//   for (let i = 0; i < args.length; i++){
//      sum += args[i]
//   }
//   return sum
// }

// console.log(summALL())
// console.log(summALL(1,2,3,4,5))

// __________________________________________________

// function summALL(a,b,...args){

//   console.log(a);
//   console.log(b);
//   console.log(args);
//   let sum = 0;
//   for (let i = 0; i < args.length; i++){
//      sum += args[i];
//   }
//   return sum;
// }

// console.log(summALL("a","b",3,4,5," hui",true))

//  const suuMM = (a , b) => (a/b) // стрелочная функция

//  console.log(suuMM(4,2))

//  const summ2 = function (a,b){ // другой вид создания функции
//   return a/b
//  }

// console.log(summ2(6,2))

// function reverseString(str) {
//   return str = str.split("").reverse().join("");
//   }
// console.log(reverseString('Artem'))

// function reverseStr(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
// }
// reverseStr('hello');

// function Add(a,b){
// return a+b
// }
// console.log(Add(7,8))

// function isEven(n){
//   if (n%2=== 0){
//     return true
//   }
//   return false
// }
// console.log(isEven(6))
// console.log(isEven(7))

// function checkAge(age){
//   return age >= 18 ? "Доступ разрешен":'Доступ запрещен'
// }
// console.log(checkAge(16))

// function getGrade(score){
//   if (score < 60) return "F"
//   if (score >= 60 && score <= 70) return "D"
//   if (score >= 71 && score <= 80) return "C"
//   if (score >= 81 && score <= 90) return "B"
//   if (score >= 90 && score <= 100) return "A"

//   else return "Genii"
// }

// console.log(getGrade(101))

// function hui(a,b){
//   return a*b
// }
// console.log(hui(4,10000))

// let hui2 = function(a,b){
//   return a/b
// }
// console.log(hui2(4,10000))

// let hui3 = (a,b) => a+b

// console.log(hui3(4,10000))

// function checkOrder(available, ordered){
//   switch(true){
//       case available < ordered:
//          return `Your order is too large, we don’t have enough goods. We have only ${available}`

//       case ordered  === 0:
//           return  'Your order is empty'

//       default: return 'Your order is accepted'

//   }

// }

// console.log(checkOrder(1,10))

// const originalFunc = (num) => { return num + 2 };

// const Tapok = originalFunc

// console.log(Tapok.name)
// console.log(Tapok.toString())

// const isOdd = (n) => {
//   return n % 2 !== 0;
// }

// let printMsg = (callback, num) => {
//   const isNumOdd = callback(num);
//   console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
// }

// // Pass in isEven as the callback function
// printMsg(isOdd, 4);

// function Hui(first_name, sirpodzapunii, funtic, callback){ // Call back
//   console.log(`Hello ${first_name}`)
//   sirpodzapunii()
//   funtic()
//   callback()

// }

// function pizda(){
//   console.log('Ji')
// }

// function pizda2(){
//   console.log('Jiir')
// }

// function pizda3(){
//   console.log('Jiirnaya')
// }

// Hui("Mordjo", pizda,pizda2,pizda3 )

// const isOdd = (n) => {
//   return n % 2 !== 0;
// }

// let printMsg = (callback, num) => {
//   const isNumOdd = callback(num);
//   console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
// }

// // Pass in isEven as the callback function
// printMsg(isOdd, 4);

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(function(ggg) {
//   return ggg * ggg
// });

// console.log(squaredNumbers)
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// numbers.forEach(function(num) {
//   console.log(num);
// });

// const names = ["Анна", "Борис", "Виктория"];

// function processArray(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i])); // Применяем callback к каждому элементу
//   }
//   return result; // Возвращаем новый массив
// }

// // Функция-коллбэк для добавления "!" к каждому имени
// function addExclamation(name) {
//   return name + "!";
// }

// // Передаём массив и коллбэк-функцию
// const excitedNames = processArray(names, addExclamation);

// console.log(excitedNames); // ["Анна!", "Борис!", "Виктория!"]

// function handleNum(num, callback, callback2){

//    return num %2 === 0 ? callback():callback2()

// }

// function handleEven(){
// console.log("number is even")
// }

// function handleOdd(){
//   console.log("number is odd")
// }

// handleNum(4,handleEven,handleOdd)

// function Test(num){
//  return num + 6

// }

// let Bolt = Test

// console.log(Bolt.name)
// console.log(Bolt.toString())

// function Y(callback){

//      setImmediate(()=>{ // асинхронное выполнение кода
//      callback("Dato")
//   })

// }

// function J(name){
//   console.log('Hello ' + name)
// }

// Y(J)

// const Numbers = ["A","B","C","D"]

// const tumba = Numbers.map(function Res(num){
//  return num + " Yes "
// })

// console.log(tumba)

// const Numberss = [1,2,3,4]

// const tumbaa = Numberss.map(function Res(num){
//  return num + num
// })

// console.log(tumbaa)

// ⏩ Если используешь {}, всегда пиши return! 🚀 тут он выполняется автоматически const tumba = Numbers.map(num => num * num);

//  const Persone = {
//   first_name : 'Alex',
//   last_name : 'Bonashko',
//   age : 30,
//   F : function(){
//     return console.log(this.last_name)
//    }

//  }

//  Persone.F()

//  const Persone1 = {
//   first_name : 'Art',
//   last_name : 'Let',
//   age : 31,
//  }

//  const Persone2 = {
//   first_name : 'Arin',
//   last_name : 'Kak',
//   age : 20,
//  }

//  function whatData(){
//   console.log(this.first_name)
//   console.log(this.last_name)
//   console.log(this.age)
//   return

//  }

// whatData.call(Persone1)  //call() вызывает функцию и подставляет this из переданного объекта.

// whatData.apply(Persone2) //🔹 .apply() работает так же, но принимает массив аргументов.

// const Person = {
//   name : "Artem",
//   last_name : "Letuchi",
//   age : 31,
//   Poneslas : function(){
//     console.log(this.age)
//   }
// }
// Person.Poneslas()

// function Person(name){
// this.name = name;
// this.greet = function(){
//   console.log(`hmmmmm ${name}`)
// }
// }

// const Person1 = new Person("Anton")
// Person1.greet()

// const Person2 = new Person("Dima")
// Person2.greet()

// const brokenLinks = ["teliqon", "youtube", "facebook"];
// const brokenLinks2 = ["bloomex", "google", "inst"];
// const brokenLink3 = ["telegram", "1xbet", "poker"];

// const fixLinksarrey = function fix(massiv){

//   return massiv.map(function(brolink){
//     return 'https://'+ brolink + '.com'
//   })

// }
// console.log(fixLinksarrey(brokenLinks))

// function persone(name){
// this.name = name
// this.greet = function(){
//   console.log(`Hello my dear ${name}`)

// }

// }
// const Person1 = new persone("Dato")
// Person1.greet()

// const colors = ['red', 'green', 'blue', 'yellow'];

// for (const color of colors) {
//     console.log(color);
// }

// const sentence = "Це бречення має кілька слів";
// const words = sentence.split(' '); // Разделяет по чем то в данном случае по пробелам , если было бы каждое слово через запятую то по запятым а если с пустым знасением то по каждой букве
// console.log(words);

// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitString = fruits.join(" "); // соединение в одну строку по указанному разделителю
// console.log(fruitString);

// const numbers = [10, 20, 30, 40, 20];
// const index = numbers.indexOf(30); // показывает номер индекс первого вхождения в данном случае 2
// console.log(index);

// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("зелений"); // показывает содержит ли массив переданное значение и вернет true or false
// console.log(hasGreen);

// const stack = [1, 2];
// stack.push(3, 4); // добавляет один или несколько жлементов в конец массива
// console.log(stack);

// const stack = [1, 2, 3, 4];
// const poppedValue = stack.pop(); // удаляет последний жлемент массива и возвращает его значение
// console.log(poppedValue); // 4
// console.log(stack);

// const queue = ["A", "B", "C"];
// const shiftedValue = queue.shift(); // удаляет первый жлемент массива и возвращает его значение
// console.log(shiftedValue); // "A"
// console.log(queue);

// const queue = ["B", "C"];
// queue.unshift("A", "H"); // добаляет один или несколько элементов в начало массива
// console.log(queue);

// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(2,4); // выбирает значения от указанного индекса вклучительно до конца массива или если указанного то до него но не включая его
// const slicedArray2 = numbers.slice(2);
// console.log(slicedArray)
// console.log(slicedArray2)

// const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 0, "жовтий", "оранжевий"); // первый индекс говорит о том с какого элемента массива мы начинаем , второй какой следует удалить  и потом данные которые надо поместить это значит "Начинай изменения перед colors[1] (то есть перед "зелений")".
// console.log(colors);

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(2,2); // Видаляємо 2 елементи починаючи з індекса 2
// console.log(numbers);

// const animals = ["кіт", "собака", "зебра", "слон"];
// animals.splice(1, 2, "тигр", "лев"); // удаление со вставкой типо начиная с певого жлемента удали 2 после него и вствсь
// console.log(animals);

// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2); // обьединение массивов в один массив
// console.log(concatenatedArray);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => { // дозволяє виконати задану функцію для кожного елементу масиву без створення нового масиву.
//   console.log(number * 2);
// });

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0); // створює новий масив з елементами, які задовольняють певну умову.
// console.log(evenNumbers)

// const numbers = ["calgary", "vancouver", "halifax", "toronto", "ottawa"];

// const burger = numbers.length-1
// console.log(numbers[burger])

// console.log(numbers.length-1)
// // const evenNumbers = numbers.indexOf("vancouver")

// const BBB = numbers.slice(1,4)
// // numbers.splice(evenNumbers,1)
// console.log(BBB)
// const matrix = [
//   ["calgary", "vancouver", "halifax"],
//   ["dog", "cat", "catdog"],
//   ["blue", 8, 9],
// ];

// console.log(matrix[0][2])
// console.log(matrix[1][1])
// console.log(matrix[2][2])

// const colors = ['red', 'green', 'blue', 'yellow'];

// for (const hui of colors) {
//     console.log(hui);
// }

// const sentence = "Hello world";
// const words = sentence.split(" ");
// console.log(words);

// const numbers = [10, 20, "ottawa", 40, 50];
// const BBB = numbers.indexOf("ottawa");
// const JJJ = numbers.splice(2,1, "Halifax")
// console.log(numbers);
// console.log(BBB);
// console.log(JJJ);

// const first= ["calgary", "vancouver", "halifax"]
// const second = ["dog", "cat", "catdog"]

// const full = first.concat(second)
// console.log(full)

// const numbers = [1, 2, 3, 4, 5];

//  const PPP = numbers.map( function BBB(hui){
//   return hui * 2
// })

// console.log(PPP)

//______________________________________________

// const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

// let positiveCount = 0
// let negativeCount = 0
// let zeroCount = 0

// for (let i = 0; i < numbers.length; i ++){

//   if ( numbers[i] < 0){
//     negativeCount += 1
//   }
//   else if ( numbers[i] > 0){
//     positiveCount += 1

//   }
//   else if( numbers[i] === 0){
//     zeroCount++
//   }

// }

// console.log(`Кількість позитивних чисел: ${positiveCount}`)
// console.log(`Кількість негативних чисел: ${negativeCount}`)
// console.log(`Кількість нульових чисел: ${zeroCount}`)

// // __________________________________________________________

// const massiv = [1, 2, 3, 4, 5]

//  const mutatedNumbers = massiv.map(function BBB(num,index){
//    return num * index
//  })

// console.log(mutatedNumbers)

// //_________________________________________________________

// const mass = [10, 20, 30, 40, 50]

// const resultum = mass.reduce(function HHH(accum,curr){
//   return accum + curr

// })

// console.log(resultum)

// //_________________________________________________________

// const massives = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const itogi = massives.filter(function LLL(chislo){
//   return chislo % 2 === 0
// })
// console.log(itogi)

// //_________________________________________________________

// const firstArray = [10, 20, 30]
// const secondArray = [40, 50, 60]

// const resultat = firstArray.concat(secondArray)

// console.log(resultat)

//_________________________________________________________

// const numbersList = [1,10,14,2,4,5,43,34]

// const copiedArray = numbersList.slice()

// const SS = copiedArray.sort(function UUU(a,b){
//   return a - b

// })
// console.log(SS)

// const person = {
//   name: {
//     "first name": "John",
//     last: "Doe"
//   },
//   age: 30
// };

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// person.country = "USA";
// console.log(person);

// delete person.age
// console.log(person);

// const person = {
//   name: "John",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   gender : null
// };

// person.greet();

// const DF = person?.name
// console.log(DF)

// const Def = person.gender ?? "Hui"
// console.log(Def)

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (let hui in person) {
//   console.log(hui + ': ' + person[hui]);
// }
// const array = Object.entries(person)
// console.log(array);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Mike", age: 40 }
// ];

// for (const person of people) {
//   console.log(person)
//   console.log(`${person.name} is ${person.age} years old`);

// }

// const person = {
//   name: "John",
//   age: 30,
//   gender: "male",
//   greet : function(a,b){
//     return a + b
//   },
//   piski: 55
// };

// const {name,age,gender,greet,piski = 14} = person

// console.log(name)
// console.log(greet(1,2))
// console.log(piski)

// const people = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 }
// ];

// for (const { name, age } of people) {
//   console.log(`${name} is ${age} years old`);
// }

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10

// const originalObject = { name: 'John', age: 30 };
// const copiedObject = Object.assign({}, originalObject);

// console.log(copiedObject)

// const myMap = new Map();
// myMap.set("name", 'debil')
// myMap.set("age", 30)

// console.log (myMap)
// console.log(myMap.get("name"))
// console.log(myMap.get("age"))

// console.log(myMap.delete("age"))
// console.log (myMap)

// console.log(myMap.get("age"))
// myMap.clear();
// console.log (myMap)

// function filterNumbers(arr, threshold) {
//  console.log(arr)
//  console.log(threshold)
//  return arr.filter(function NNN(num){
//   return num > threshold
//  })
// }

// console.log(filterNumbers([1, 5, 10, 20], 5)); // Ожидаемый результат: [10, 20]

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 15 }
// ];

// function getAdultUsers(users) {
//   return users.filter(function(user) {
//     return user.age > 18;
//   })
//   .map(function(user) {
//     return user.name;
//   });
// }

// console.log(getAdultUsers(users)); // Ожидаемый результат: ["Bob", "Charlie"]

// function filterLongWords(words, maxLength) {
//   return words.filter(function(stingus){
//   return stingus.length <= maxLength
//   })
// }

// console.log(filterLongWords(["apple", "banana", "kiwi", "grape"], 5));
// // Ожидаемый результат: ["apple", "kiwi", "grape"]

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ];

// function addCountry(users, country) {
//  return users.map(function(object){
//    object.country = country
//    return object
//  })
// }

// console.log(addCountry(users, "USA"));
// Ожидаемый результат:
// [
//   { name: "Alice", age: 25, country: "USA" },
//   { name: "Bob", age: 30, country: "USA" }
// ]

// const cart = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];

// function getTotalPrice(cart) {
//   console.log(cart)

//   return cart.reduce(function(sum, object) {
//     return sum + object.price; // Накопление суммы
//   }, 0); // Начальное значение суммы - 0

//   }

// console.log(getTotalPrice(cart));
// // Ожидаемый результат: 1800

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }
// const person1 = new Person("aren", 20)
// console.log(person1)
// person1.greet()

// class Person {
//   constructor(name, age) {
//     name + age
//   }
// }

// Person("ara", 30)

// class MathHelper {
//   static square(number) {
//     return number * number;
//   }
//    function (numberT) {
//     return numberT + numberT;
//   }
// }
// const JJJ = new

// console.log(MathHelper.square(5));
// console.log(MathHelper(10));

// class MathHelperr {
//   constructor(number) {
//      this.number = number
//   }
//   squaree() {
//     return this.number * this.number;
//   }
// }

// const BBB = new MathHelperr(6)
// console.log(BBB.squaree())

// class Shape {
// 	constructor(color) {
// 		this.color = color;
// 	}

// 	draw() {
// 		console.log(`Drawing a shape with ${this.color} color.`);
// 	}
// }

// class Circle extends Shape {
// 	constructor(color, radius) {
// 		super(color);
// 		this.radius = radius;
// 	}

// 	printInfo() {
// 		console.log(`INFO: Radius : ${this.radius}, color: ${this.color}`);
// 	}

// 	draw() {
// 		console.log(`Drawing a circle with ${this.color} color and radius ${this.radius}.`);
// 	}
// }

// const circle = new Circle('blue', 5);
// circle.draw(); // Drawing a circle with blue color and radius 5.
// circle.printInfo(); // INFO: Radius : 5, color: blue

// const person = {
//   name: 'John',
//   age: 42
// };

// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty('toString')); // false

// setTimeout(function(phrase, name, age) {
//   console.log(`[${Date.now()}] ${phrase} ${name} ${age}!`);
// }, 3000, 'Hello', 'John', 15);

// function saySmth(phrase, name, age) {
//   console.log(`[${Date.now()}] ${phrase} ${name} ${age}!`);
// }

// setTimeout(saySmth, 3000, 'Hello', 'John', 15);

// setTimeout((phrase, name, age) => {
//   console.log(`[${Date.now()}] ${phrase} ${name} ${age}!`);
// }, 3000, 'Hello', 'John', 15);

// function saySmth(phrase, name) {
//   console.log(`${phrase} ${name}!`);
// }

// // Запускаємо функцію saySmth кожну секунду (кожні 1000 мілісекунд)
// setInterval(saySmth, 1000, 'Hello', 'John');

// let timerId = setTimeout(function tick() {
//   console.log("hello")
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// async function asyncFunction(a, b) {
//   return a / b;
// }

// asyncFunction(2, "test")
//   .then(result => {
//     if (Number.isNaN(result)) {
//       throw new Error("Result is NaN");
//     }
//     console.log(result);
//   })
//   .catch(e => {
//     console.log("test");
//     console.error(e);
//   });
