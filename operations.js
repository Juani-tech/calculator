const displaySpan = document.querySelector('span');
const display = document.querySelector('.display');


function operate(operator, a , b){ 
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '/':
            if (b === 0){
                return 'Error';
            }
            return a / b;
    }
}


function operations(operationsArray){
    if (operationsArray.length === 3){
        return operate(operationsArray[1], parseInt(operationsArray[0]), parseInt(operationsArray[2]));
    }
    if (operationsArray[1] === '-') {
        if (operationsArray[3] == '+' || operationsArray[3] == '-'){
            const res = operate(operationsArray[1], parseInt(operationsArray[0]), parseInt(operationsArray[2]));
            operationsArray.splice(0, 3, res);
            return operations(operationsArray);
        }
        return parseInt(operationsArray[0]) -  operations(operationsArray.slice(2));

    } else if (operationsArray[1] === '+') {
        if (operationsArray[3] == '+' || operationsArray[3] == '-'){
            const res = operate(operationsArray[1], parseInt(operationsArray[0]), parseInt(operationsArray[2]));
            operationsArray.splice(0, 3, res);
            return operations(operationsArray);
        }
        return parseInt(operationsArray[0]) +  operations(operationsArray.slice(2));
    }
    
    const res = operate(operationsArray[1], parseInt(operationsArray[0]), parseInt(operationsArray[2]));
    operationsArray.splice(0, 3, res);
    return operations(operationsArray);
}


const button = document.querySelectorAll('.number, .operand');
button.forEach((button) => {
    button.addEventListener('click', () => {
        display.value = display.value + button.textContent;
    });
});


const equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
    let displayValueAsArray = display.value.split(/(\+|\-|\x|\/)/g);
    val = operations(displayValueAsArray);
    display.value = val;
});


const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.value = '';
});


