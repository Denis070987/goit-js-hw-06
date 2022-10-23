const textIn = document.querySelector('#name-input');

const textTitle = document.querySelector('#name-output')

const textReset = textTitle.textContent

textIn.addEventListener('input', event => {
    if (event.currentTarget.value) {
        textTitle.textContent = event.currentTarget.value; return;
    } textTitle.textContent = textReset
}) 

console.log(textIn)
console.log(textTitle)





