import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 5000;

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);
const errorButton = errorMessage.querySelector('.error__button');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successTemplate.cloneNode(true);
const successButton = successMessage.querySelector('.success__button');

const onEscKeydownErrorMessage = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorMessage.remove();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target !== errorTemplate) {
    errorMessage.remove();
  }
});

errorButton.addEventListener('click', () => {
  errorMessage.remove();
  document.removeEventListener('keydown', onEscKeydownErrorMessage);
});

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onEscKeydownErrorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ALERT_SHOW_TIME);
};

const onEscKeydownSuccessMessage = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successMessage.remove();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target !== successTemplate) {
    successMessage.remove();
  }
});

successButton.addEventListener('click', () => {
  successMessage.remove();
  document.removeEventListener('keydown', onEscKeydownSuccessMessage);
});

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onEscKeydownSuccessMessage);

  setTimeout(() => {
    successMessage.remove();
  }, ALERT_SHOW_TIME);
};

export { showErrorMessage, showSuccessMessage };
