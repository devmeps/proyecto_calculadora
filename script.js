let displayValue = '';

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function appendChar(char) {
  displayValue += char;
  updateDisplay();
}

function calculate() {
  const display = document.getElementById('display');
  try {
    displayValue = eval(display.value);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}
