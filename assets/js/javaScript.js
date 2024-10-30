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

});