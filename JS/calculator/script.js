const display = document.querySelector('.result');
const history = document.querySelector('.history');
const buttons = document.querySelectorAll('.btn');

// variable

let currentvalue = ""
let previousvalue = ""
let operator = ""
let result  = ""


buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const value = button.textContent;

        if (button.classList.contains('btn-number')) {
            handleNumber(value);
        }else if (button.classList.contains('btn-operator')) {
            handleOperator(value)
        } else if (button.classList.contains('btn-equals')){
            calculate()
        } else if (button.classList.contains('btn-clear')) {
            clear();
        }

        updateDisplay();
    })
});

function handleNumber(value) {
    if (result !== "") {
        clear()

    }
    currentvalue += value;

}


function handleOperator(value) {
    if (operator !== "") {
        calculate();

    }
    operator = value
    previousvalue = currentvalue
    currentvalue = ""
}

function calculate() {
    let computation;

    const prev = parseFloat(previousvalue);
    const current = parseFloat(currentvalue);

    if (isNaN(prev) || isNaN(current))
        return;

    switch(operator){
        case "+":
        computation = prev + currentvalue;
             break;
             case "-":
                computation = prev - current;
                case "×":
                computation = prev * current
                break;
                case "÷":
                computation = prev / current
                case "%":
                computation = prev % current
                break;
                default:
                    return;
    }

    result = computation.toString();
    previousvalue = ""
    currentvalue = result
    operator = ""
    
}

function clear() {
    previousvalue = ""
    currentvalue = ""
    operator = ""
    result = ""
}

function updateDisplay() {
    display.textContent = currentvalue || 0
    history.textContent = `${previousvalue} ${operator}`
}