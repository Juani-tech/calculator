const displaySpan = document.querySelector('span');
const display = document.querySelector('.display');


function operate(operator, a , b){ 
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => {
        display.value = display.value + button.textContent;
    });
});