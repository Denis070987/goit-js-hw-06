const sizeFont = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
sizeFont.addEventListener('input', () => {
    spanText.style.fontSize = `${Number(sizeFont.value)}px`
});


console.log(sizeFont);
console.log(spanText);