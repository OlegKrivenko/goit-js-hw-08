import throttle from 'lodash.throttle';

const ref = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
  submit: document.querySelector('[type="submit"]'),
};
const formData = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';

formDataSave();

ref.form.addEventListener('input', throttle(onInput, 500));
ref.form.addEventListener('submit', onSubmit);

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function formDataSave() {
  const localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (localStorageData === null) {
    return;
  }
  ref.email.value = localStorageData.email;
  ref.message.value = localStorageData.message;
}

function onSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  console.log(formData);
}
