const numberButtons = Array.from(document.querySelectorAll('.numbers div button'));
const zeroButton = document.querySelector('.zero-equal').children[0];
const resultButton = document.querySelector('.zero-equal').children[1];
const operatorsButtons = document.querySelectorAll('.operators button');
const displayHistoric = document.querySelector('.display-container').children[0];
const displayScreen = document.querySelector('.display-container')
const onfOffButton = document.getElementById('on-off')
const display = document.querySelector('.display-container').children[1];

numberButtons.unshift(zeroButton);

let input = '';
let calc = '';
let operator = '';
let result = '';

function validCalc(input) {
    if (input !== '') {
        calc += input;
    }

    if (['/', '*', '-', '+'].includes(calc.slice(-1))) {
        calc = calc.slice(0, -1);
    }

    try {
        calc = String(parseFloat(eval(calc).toFixed(2)));
    } catch (e) {
        calc = 'Erro';
    }

    input = '';
    return calc;
}

numberButtons.forEach((button, i) => {
    button.addEventListener('click', function () {
        if (calc === result) {
            calc = '';
            result = '';
        }

        if (input.length <= 10) {
            input += button.textContent;
            display.textContent = input;
        }
    });
});

operatorsButtons.forEach((button, i) => {
    button.addEventListener('click', function () {
        switch (i) {
            case 0:
                displayScreen.classList.toggle('on-off')
                calc = '';
                input = '';
                result = '';
                display.textContent = '0';
                displayHistoric.textContent = '0';
                return;
            case 1: // Limpar tudo (C)
                calc = '';
                input = '';
                result = '';
                display.textContent = '0';
                displayHistoric.textContent = '0';
                return;

            case 2: // Apagar último caractere (←)
                input = '';
                display.textContent = input || '0';
                return;

            case 3:
                operator = '/';
                break;
            case 4:
                operator = '*';
                break;
            case 5:
                operator = '-';
                break;
            case 6:
                operator = '+';
                break;
        }

        calc = validCalc(input);
        calc += operator;
        input = '';

        display.textContent = '0';
        displayHistoric.textContent = calc;
    });
});

resultButton.addEventListener('click', function () {
    calc = validCalc(input);
    result = calc;
    input = '';
    display.textContent = result;
    displayHistoric.textContent = result;
});
