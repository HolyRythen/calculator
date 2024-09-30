let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function appendSymbol(symbol) {
    if (currentInput === '') return;
    currentInput += symbol;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}
