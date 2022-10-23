let counterValue = 0

const clickPlus = document.querySelector('[data-action="increment"]')
clickPlus.addEventListener('click', plus);
function plus() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue
}

const clickMinus = document.querySelector('[data-action="decrement"]');
clickMinus.addEventListener('click', minus);
function minus() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue
}


console.log(counterValue)
console.log(clickPlus)
console.log(clickMinus)