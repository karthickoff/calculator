import "../src/style.css"
const muarr = [1, 2, 3];

console.log(muarr);
let display = document.querySelector('#display');
let buttons = Array.from(document.querySelectorAll('.button'));
var handle = function (event) {
    event.stopPropagation();// prevvents eve beeing called twice
    console.log("---add eventlistner call", event.target.innerText);

    switch (event.target.innerText) {
        case 'c':
            display.innerText = '';
            break;
        case '←':
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        case '=':
            try {
                display.innerText = eval(display.innerText);

            } catch (error) {
                display.innerText = error;
                alert("Invalid Expression.. Try again")

            }
            break;
        default:
            display.innerText += event.target.innerText;
            break;
    }

}
console.log(display, buttons);
console.log("-++++++--00");
console.log("-++++++--00");

buttons.map(button => {
    button.addEventListener('click', handle, false)
})
// function handleClick(num) {
//     console.log("clicked the num ", num);
// }
// function handleOperation(sym) {
//     console.log("clicked the sym ", sym);
// }
// function handleCalculation() {
//     console.log("----clicked caluclation---");
// }
// window.handleClick = handleClick;
// window.handleOperation = handleOperation;
// window.handleCalculation = handleCalculation;

