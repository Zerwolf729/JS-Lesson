let words = ['hello', 'world', 'search', 'good'];
let index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);

words = ['not', 'found'];
index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);


function findIndex(array, word) {

for ( let i = 0; i < array.length; i++) {
  if (array[i] === word) {
    return i;
  }
}

return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));


  function removeEgg(foods) {
    const foodsCopy = foods.slice();
    const reversedFoods = foods.reverse();

  const result = [];
  let eggsRemoved = 0;

    for(let i = 0; i < reversedFoods.length; i++) {
      if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
        eggsRemoved++
        continue;
      } 

      result.push(reversedFoods[i]);
    }
    return result.reverse();
  }
  
  console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

  const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
      console.log(removeEgg(foods));
      console.log(foods);


  for (let i = 1; i <= 20; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }

    else if (i % 3 === 0)  {
      console.log('Fizz');
    }

    else if (i % 5 === 0) {
      console.log('Buzz');
    }

    else {
      console.log(i);
    }
  }


  function unique(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const word = array[i];

      if (findIndex(result, word) === -1) {
        result.push(word);
      }
    }
    return result;
  }

  console.log(unique(['green', 'red', 'blue', 'red']));
  console.log(unique(['red', 'green', 'green', 'red']));
