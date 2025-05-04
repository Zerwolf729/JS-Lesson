let calculation = (localStorage.getItem('calculator')) || '';

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation () {
  document.querySelector('.js-calculation')
  .innerHTML = calculation;
}
