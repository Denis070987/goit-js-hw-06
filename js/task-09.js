function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const currentСolor = document.querySelector('.color');
const clickMe = document.querySelector('.change-color');
clickMe.addEventListener('click', () => {
  let changeColor = [getRandomHexColor()];
  document.body.style.backgroundColor = changeColor;
  currentСolor.textContent = changeColor;
  console.log(currentСolor);
})


