const display = document.querySelector('#display');
const equals = document.getElementById('equals');
const buttons = document.querySelectorAll('button');

function clearDisplay() {

}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});

equals.addEventListener('click', () => {
    calculate();
});

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}

function updateDisplay(input) {
    if (input == 'C') display.value = '';
    if (input == '&equals;') calculate();
    else { display.value += input; }
}
