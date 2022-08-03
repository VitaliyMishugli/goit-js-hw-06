const validationInput = document.querySelector("#validation-input");
const validLength = validationInput.dataset.length;

validationInput.addEventListener('blur', (event) => {
 
  if (validationInput.value.length >= validLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
  else if (validationInput.value.length < validLength) {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});



