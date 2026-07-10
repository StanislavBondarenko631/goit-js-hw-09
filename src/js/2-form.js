const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input[name="email"]');
const messageInput = document.querySelector(
  '.feedback-form textarea[name="message"]'
);

const saveData = localStorage.getItem(STORAGE_KEY);
if (saveData) {
  const parsedData = JSON.parse(saveData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log({
    email: formData.email.trim(),
    message: formData.message.trim(),
  });

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData.email = '';
  formData.message = '';
}
