$(document).ready(function() {
    let display = $('#display');
    let currentInput = '';
    let operator = '';
    let result = '';

    $('.button-clear').on('click',function () {
        currentInput = '';
        result = '';
        operator = '';
        display.text('0');

    });

    $('.button').on('click', function() {
        let value = $(this).data('value');

        if (value === '=') {
            try {
                result = eval(currentInput);
                display.text(result);
                currentInput = result;
            } catch (e) {
                display.text('Error');
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.text(currentInput);
        }
    });
});