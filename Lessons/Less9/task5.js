const users =[
  {name : "Anton", email : "anton@gmail.com", age : 30},
  {name : "Robert", email : "robert@gmail.com", age : 80},
  {name : "valiiii", email : "valiii@gmail.com", age : 14}
]

for(let user of users){
  console.log(user)
}

for (let {name,email,age} of users){
  console.log(`My name is ${name}, if u have notif for me ${email}, today my birthday and my age ${age}`)
}

