// Асинхронная функция для получения todo
async function getToDo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
  } catch (error) {
    console.error('Error fetching TODO:', error);
  }
}

// Асинхронная функция для получения user
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await response.json();
  } catch (error) {
    console.error('Error fetching USER:', error);
  }
}


async function fetchAllData() {
  try {
    const [todo, user] = await Promise.all([getToDo(), getUser()]);
    console.log('Promise.all result:', { todo, user });
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }
}


async function fetchRaceData() {
  try {
    const result = await Promise.race([getToDo(), getUser()]);
    console.log('Promise.race result:', result);
  } catch (error) {
    console.error('Error in Promise.race:', error);
  }
}


fetchAllData();
fetchRaceData();
