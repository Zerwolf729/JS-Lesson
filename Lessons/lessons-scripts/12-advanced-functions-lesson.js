const add = () => {
  console.log(2 +3);
}

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(() => {
  console.log('12b');
})

runTwice(add);

function updateButton() {
  document.querySelector('.js-button')
  .addEventListener('click', () => {
    const button = document.querySelector('.js-button');

    button.innerHTML = 'Loading...';

    setTimeout(() => {
      button.innerHTML = 'Finished!';
    }, 1000);
  })
}

updateButton();

let timeoutId;

document.querySelector('.js-amazon-button')
.addEventListener('click', displayMessage)

function displayMessage () {
  const messageElement = document.querySelector('.js-message');

  messageElement.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    messageElement.innerHTML = '';
  }, 2000)
}

let messages = 2;

let intervalId2;

let isDisplayingNotification = false;

document.querySelector('.add-button')
.addEventListener('click', () => {
  messages++;
  displayNotification();
});

document.querySelector('.remove-button')
.addEventListener('click', () => {
  if (messages > 0) {
    messages--;
  } 
  
  if (messages === 0) {
    stopNotification()
  }
});

function displayNotification () {
  if(isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId2 = setInterval(() => {
    if (document.title === 'Advanced Functions Lesson') {
      document.title = `(${messages}) New Messages`;
    } else {
      document.title = 'Advanced Functions Lesson';
    }
  }, 1000)
}

function stopNotification() {
  isDisplayingNotification = false;

    clearInterval(intervalId2);
    document.title = 'Advanced Functions Lesson';
}

console.log(messages);


const multiply = (num1, num2) =>  num1 + num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

function countPositive(nums) {
  let positiveNumbers = 0;

  // nums.forEach((nums) => {
  // for 2 parameters
  nums.forEach(num => {
    if (num > 0) {
      positiveNumbers++;
    }
  });

  return positiveNumbers
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function addNum(array, num) {
  return array.map(value => value + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

function removeEgg(foods) {
  let eggsRemoved = 0

  return foods.filter(food => {
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));