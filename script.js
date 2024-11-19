const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', (e) => {
    e.preventDefault();

    const lowerReplaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (textInput.value === "") {
        result.innerText = "Please input a value";
    } else if (textInput.value.length === 1) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else if (lowerReplaced === [...lowerReplaced].reverse().join('')) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else {
        result.innerText = `${textInput.value} is not a palindrome`;
    }

});