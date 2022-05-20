function multiply () {
  const number1 = parseFloat(document.querySelector('#multOne').value);
  const number2 = parseFloat(document.querySelector('#multTwo').value);
  
  /* SOLUTION */
  console.log(number1 * number2);
}

function operation () {
const number1 = parseFloat(document.querySelector('#opOne').value);
  const number2 = parseFloat(document.querySelector('#opTwo').value);
  const operation = document.querySelector('#operator').value;
  
  /* SOLUTION */
  if (operation === 'addition') {
    console.log(number1 + number2);
  } else if (operation === 'subtraction') {
    console.log(number1 - number2);
  } else if (operation === 'division') {
    console.log(number1 / number2);
  } else if (operation === 'multiplication') {
    console.log(number1 * number2);
  }
}

function checkSame () {
  const number1 = parseFloat(document.querySelector('#checkOne').value);
  const number2 = parseFloat(document.querySelector('#checkTwo').value);
  
  /* SOLUTION */
  if (number1 === number2) {
    console.log(number1 * number2);
  } else {
    console.log(number1 / number2);
  }
}

function inRange () {
  const min = parseFloat(document.querySelector('#rangeMin').value);
  const max = parseFloat(document.querySelector('#rangeMax').value);
  const input = parseFloat(document.querySelector('#rangeInput').value);
  
  /* SOLUTION */
  if (input > min && input < max) {
    console.log('Yes, input is in the range');
  } else {
    console.log('No value is not in the range');
  }
}