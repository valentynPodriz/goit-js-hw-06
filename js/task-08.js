const formRef = document.querySelector(".login-form");
const formData = {};

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    !event.currentTarget.elements.email.value ||
    !event.currentTarget.elements.password.value
  ) {
    alert("Всі поля повинні бути заповнені!");
  }
  formData.email = event.currentTarget.elements.email.value;
  formData.password = event.currentTarget.elements.password.value;
  event.currentTarget.reset();
}
console.log(formData);
