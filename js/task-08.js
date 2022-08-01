const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const arrayElements = [...formElements];
  const formData = {};

  for (let i = 0; i < arrayElements.length; i += 1){    
    if (arrayElements[i].type !== 'submit') {
      if (arrayElements[i].value !== '') {
        const mail = formElements.email.value;
        const password = formElements.password.value;
        formData.mail = mail;
        formData.password = password;
      }
      else {
        alert("Всі поля повинні бути заповнені");
      }
    }
  }
  console.log(formData);
   event.target.reset(); 
})