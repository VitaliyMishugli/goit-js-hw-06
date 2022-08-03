const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.dir(event.currentTarget);
  const formData = {};

      const mail = formElements.email.value;
      const password = formElements.password.value;
      if (mail && password) {
        formData.mail = mail;
        formData.password = password;
        console.log(formData);
        event.target.reset();
      }
    else {
      alert("Всі поля повинні бути заповнені");
    }
  })