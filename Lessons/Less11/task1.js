function saySmth(phrase, name) {
  console.log(`${phrase} my dear ${name} today you will be happy!`);
}

setTimeout(saySmth, 3000, 'Hello', 'John')