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
ref.form.addEventListener('submit', handleSubmitForm);

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function formDataSave() {
  if (loadLocalStorageKey(LOCALSTORAGE_KEY)) {
    const outputFormData = loadLocalStorageKey(LOCALSTORAGE_KEY);
    const formKeys = Object.keys(outputFormData);

    formKeys.map(element => {
      document.querySelector(`[name='${element}']`).value =
        outputFormData[element];
    });
  }
}

function loadLocalStorageKey(key) {
  try {
    return localStorage.getItem(key) === null
      ? undefined
      : JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.console.error(error.message);
  }
}

function handleSubmitForm(event) {
  event.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  console.log(formData);
  formData.email = '';
  formData.message = '';
}
