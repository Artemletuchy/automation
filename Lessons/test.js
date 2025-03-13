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

