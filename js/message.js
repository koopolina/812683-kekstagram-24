import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 5000;

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);
const errorButton = errorMessage.querySelector('.error__button');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successTemplate.cloneNode(true);
const successButton = successMessage.querySelector('.success__button');

const messageErrorCloseHandler = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', onEscKeydownErrorMessage);
};

function onEscKeydownErrorMessage(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    messageErrorCloseHandler();
  }
}

errorButton.addEventListener('click', messageErrorCloseHandler);

document.addEventListener('click', (evt) => {
  if (evt.target !== errorTemplate) {
    messageErrorCloseHandler();
  }
});

const showErrorMessage = (message) => {
  errorMessage.querySelector('.error__title').textContent = message;
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onEscKeydownErrorMessage);

  setTimeout(messageErrorCloseHandler, ALERT_SHOW_TIME);
};

const messageSuccessCloseHandler = () => {
  successMessage.remove();
  document.removeEventListener('keydown', onEscKeydownSuccessMessage);
};

function onEscKeydownSuccessMessage(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    messageSuccessCloseHandler();
  }
}

document.addEventListener('click', (evt) => {
  if (evt.target !== successTemplate) {
    messageSuccessCloseHandler();
  }
});

successButton.addEventListener('click', messageSuccessCloseHandler);

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onEscKeydownSuccessMessage);

  setTimeout(messageSuccessCloseHandler, ALERT_SHOW_TIME);
};

export { showErrorMessage, showSuccessMessage };
