const romanNumerals = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
]

document.getElementById('convert-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission
    const inputValue = document.getElementById('number').value;
    let number = parseInt(inputValue);
    const outputBox = document.getElementById('output');
    const resultText = document.getElementById('result');

    if (isNaN(number)) {
        resultText.textContent = 'Please enter a valid number';
        resultText.classList.add('error');
        outputBox.hidden = false;
        return;
    } else if (number < 1) {
        resultText.textContent = 'Please enter a number greater than or equal to 1';
        resultText.classList.add('error');
        outputBox.hidden = false;
        return;
    } else if (number > 3999) {
        resultText.textContent = 'Please enter a number less than or equal to 3999';
        resultText.classList.add('error');
        outputBox.hidden = false;
        return;
    };
    outputBox.hidden = false;

    let roman = '';
    for (let [value, symbol] of romanNumerals) {
        while (number >= value) {
            number -= value;
            roman += symbol;
        }
    }
    resultText.textContent = roman;
    resultText.classList.remove('error');
    outputBox.hidden = false;
});

