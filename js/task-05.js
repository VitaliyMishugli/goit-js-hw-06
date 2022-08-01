const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', () => {
  console.log(input.value);
  if (input.value === '') {
    output.textContent = "Anonymous";
  }
  else {
    output.textContent = input.value;
  }
})