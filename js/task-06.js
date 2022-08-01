const validationInput = document.querySelector("#validation-input");
const validLength = validationInput.dataset.length;

validationInput.addEventListener('blur', () => {
  console.log(validationInput.value.length);
  if (validationInput.value.length >= validLength) {
    validationInput.classList.add("valid");
  }
  else if (validationInput.value.length < validLength) {
    validationInput.classList.add("invalid");
  }
});

