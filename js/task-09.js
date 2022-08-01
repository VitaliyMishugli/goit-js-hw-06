function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const output = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  let color = getRandomHexColor();
  output.textContent = color;
  body.style.backgroundColor = color;
})