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

//   let sum = 0;
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


// console.log(summALL(1,2,3,4,5))



//  const suuMM = (a , b) => (a/b) // стрелочная функция

//  console.log(suuMM(4,2))



//  const summ2 = function (a,b){ // другой вид создания функции
//   return a/b
//  }
 
// console.log(summ2(6,2))