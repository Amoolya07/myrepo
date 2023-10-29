document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let pendingOperation = null;
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonValue = button.textContent;

            if (buttonValue >= '0' && buttonValue <= '9' || buttonValue === '.') {
                currentInput += buttonValue;
                display.value = currentInput;
            } else if (buttonValue === 'C') {
                currentInput = '';
                display.value = '0';
            } else if (buttonValue === '=') {
                if (pendingOperation) {
                    currentInput = operate(pendingOperation, firstOperand, parseFloat(currentInput));
                    pendingOperation = null;
                    firstOperand = null;
                    display.value = currentInput;
                }
            } else {
                if (pendingOperation) {
                    firstOperand = parseFloat(currentInput);
                    currentInput = '';
                } else {
                    firstOperand = parseFloat(currentInput);
                    currentInput = '';
                    pendingOperation = buttonValue;
                }
            }
        });
    });

    function operate(operator, a, b) {
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                if (b === 0) {
                    return "Error";
                }
                return (a / b).toString();
        }
    }
});
