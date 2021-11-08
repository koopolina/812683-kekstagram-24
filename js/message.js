import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 5000;

const mainTag = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);
const errorButton = errorTemplate.querySelector('.error__button');

errorButton.addEventListener('click', () => {
  errorMessage.remove();

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessage.remove();
    }
  });
});

const showAlert = (message) => {
  mainTag.appendChild(errorMessage);
  const alertElement = document.createElement('div');
  alertElement.textContent = message;
  document.body.append(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert };
