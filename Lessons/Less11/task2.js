
function getToDo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .catch(error => {
    console.error('Error ToDo:', error)
    })
}


function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .catch(error => {
    console.error('Error user:', error)
    })
}


const allPromises = Promise.all([getToDo(), getUser()])
  .then(([todo, user]) => {
  console.log('Promise.all result:', { todo, user })
  })

  .catch(error => {
  console.error('Error Prom all:', error)
  })


const racePromise = Promise.race([getToDo(), getUser()])
  .then(result => {
  console.log('Promise.race result:', result)
  })

  .catch(error => {
  console.error('Error Prom race:', error)
  })

