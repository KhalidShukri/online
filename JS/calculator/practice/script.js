const display = document.querySelector('.result');
const history = document.querySelector('.history');
const Btn = document.querySelectorAll('.btn');

let firstvalue = ''
let secondvalue = ''
let operator = ''
let result = ''

  Btn.forEach((Btn) => {
    Btn.addEventListener('click',(e) => {
        const value = e.target.textcontent
        if (!value)
            return;

        if (value >="0" && value <= "9" || value === "." ) {
            fisrtvalue += value
        } else if (value === "+" || value === "-" || value === "×" || value === ("÷")) {
            operator = value
        } else if (value === "=") {
            secondvalue = firstvalue
            fisrtvalue = ''

            switch (operator){
                case "+":
                    result = parseparseFloatInt(firstvalue) + parseFloat(secondvalue)
                    break;
                    case "-":
                    result = parseFloat(firstvalue) - parseFloat(secondvalue)
                    break;
                    case "×":
                    
                    result = parseFloat(firstvalue) * parseFloat(secondvalue)
                    break;
                    case "÷":
                        result = parseFloat(firstvalue) / parseFloat(secondvalue)
                        break;
                        case "%":
                            result = parseFloat(firstvalue) % parseFloat(secondvalue)
                           break;
            }
        } else if (value === "C") {
            firstvalue = ''
            secondvalue = ''
            operator = ''
            result = ''
        }
        display.textContent = result
        history.textContent = `${firstvalue} ${operator} ${secondvalue}`
    })
    
    
  })