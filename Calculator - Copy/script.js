let runningTotal = 0;
let previousOperator;
let ans = 0;
let result = 0;
let buffer = '';
let display = '0';
const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value) && value !== 'Ans') {
        handleSymbol(value);//choose symbol
    } else if (!isNaN(value) || value === 'Ans') {
        handleNumber(value);//choose number
    }
    // console.log(buffer);
    screen.innerText = display;
}


function handleSymbol(value) {
    switch (value) {
        case 'c':
            display = '0';
            buffer = '';
            result = 0;
            ans = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            try {
                buffer = buffer.replace('Ans', ans);
                result = eval(buffer);
                display = result;
                console.log(result);
                buffer = '';
                ans = result;
            } catch (error) {
                display = "Syntas error";
            }
            break;
        case '←':
            if (buffer.slice(-1) === 's') {
                if (buffer.length === 3) {
                    buffer = '';
                    display = '0';
                } else if (buffer.length > 3){
                    buffer = buffer.substring(0, buffer.length - 3);
                    display = display.substring(0, display.length - 3);
                }
            } else {
                if (buffer.length === 1) {
                    buffer = '';
                    display = '0';
                } else if (buffer.length > 1){
                    buffer = buffer.substring(0, buffer.length - 1);
                    display = display.substring(0, display.length - 1);
                }
            }
            break;
        case '+':
            if (buffer === '' && ans != 0) {
                buffer += 'Ans';
                display = "Ans";
            }
            buffer += '+';
            display += '+';
            break;
        case '−':
            if (buffer === '' && ans != 0) {
                buffer += 'Ans';
                display = "Ans";
            }
            buffer += '-';
            display += '−';
            break;
        case '×':
            if (buffer === '' && ans != 0) {
                buffer += 'Ans';
                display = "Ans";
            }
            buffer += '*';
            display += '×';
            break;
        case '÷':
            if (buffer === '' && ans != 0) {
                buffer += 'Ans';
                display = "Ans";
            }
            buffer += '/';
            display += '÷';
            break;
        case '.':
            if (buffer === '' && ans != 0) {
                buffer += 'Ans';
                display = "Ans";
            }
            buffer += '.';
            display += '.';
            break;
    }

}


function handleNumber(numberString) {
    if (buffer.slice(-1) !== 's') {
        if (buffer === '') {
            buffer = numberString;
            display = numberString;
        } else {
            buffer += numberString;
            display += numberString;
            }
        }
    }

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (event) {
        buttonClick(event.target.innerText);
    })
}

init();