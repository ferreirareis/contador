var currentNumberWrapper = document.getElementById("currentNumber"); /* pega o elemento do HTML pelo ID */
var currentNumber = 0

function increment(){
    currentNumber = currentNumber + 1; /* adiciona +1 no número atual */
    currentNumberWrapper.innerHTML = currentNumber /* transforma o texto do html pra var currentNumber */
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}