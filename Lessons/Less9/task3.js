const car1 ={
  brand : "Ferrari",
  model : "F 40",
  year : 1987

}

const car2 ={
  brand : "Lamborgini",
  model : "Mursilago",
  owner : "Ferruccio Lamborghini"
}

const car3 = {...car1,...car2}

console.log(car3)