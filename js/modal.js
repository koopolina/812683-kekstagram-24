import { isEscapeKey } from './util.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { sendData } from './api.js';
import { resetFilter } from './slider.js';

const HASHTAG_RE = /^#[a-zA-Zа-яА-Я0-9]+$/;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
const STEP = 25;
let currentValue = MAX_VALUE;

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const editPhoto = document.querySelector('.img-upload__overlay');
const closeButton = editPhoto.querySelector('#upload-cancel');
const textHashtag = editPhoto.querySelector('.text__hashtags');
const textDescription = editPhoto.querySelector('.text__description');
const imgPreview = editPhoto.querySelector('.img-upload__preview img');
const smallerScale = editPhoto.querySelector('.scale__control--smaller');
const biggerScale = editPhoto.querySelector('.scale__control--bigger');
const scaleValue = editPhoto.querySelector('.scale__control--value');
const effectLevel = document.querySelector('.effect-level');
const imgUploadForm = document.querySelector('.img-upload__form');

const changeScale = (step) => {
  const nextValue = currentValue + step;
  if (nextValue <= MAX_VALUE && nextValue >= MIN_VALUE) {
    currentValue = nextValue;
  }
  scaleValue.value = `${currentValue}%`;
  imgPreview.style.transform = `scale(${currentValue / 100})`;
};

smallerScale.addEventListener('click', () => changeScale(-STEP));
biggerScale.addEventListener('click', () => changeScale(STEP));

const resetScale = () => {
  currentValue = MAX_VALUE;
  imgPreview.style.transform = '';
};

const checkRepeat = (hashtags) => {
  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags.slice(i + 1).includes(hashtags[i])) {
      return true;
    }
  }
};

const inputStopPropagationOnEscHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const closeModal = () => {
  editPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', uploadFile);
  uploadFile.innerHTML = '';
  imgUploadForm.reset();
  resetFilter();
  resetScale();
};

uploadFile.addEventListener('change', () => {
  editPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  effectLevel.classList.add('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  });
});

closeButton.addEventListener('click', () => {
  closeModal();
});

textHashtag.addEventListener('keydown', inputStopPropagationOnEscHandler);

textDescription.addEventListener('keydown', inputStopPropagationOnEscHandler);

const checkHashtags = (textHashtagValue) => {
  if (textHashtagValue) {
    const hashtags = textHashtagValue.toLowerCase().split(/\s+/);
    const isRepeat = checkRepeat(hashtags);
    if (isRepeat) {
      return 'Один и тот же хэш-тег не может быть использован дважды';
    } else if (hashtags.length > 5) {
      return 'Нельзя указывать больше пяти хэш-тегов';
    } else {
      for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i][0] !== '#') {
          return 'Хэш-тег должен начинаться с символа # (решётка)';
        } else if (hashtags[i] === '#') {
          return 'Хэш-тег не может состоять только из одной решётки';
        } else if (!HASHTAG_RE.exec(hashtags[i])) {
          return 'Строка после решётки должна состоять из букв и чисел';
        } else if (hashtags[i].length > 20) {
          return 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
        }
      }
    }
  }
  return '';
};

const hashTagInputHandler = () => {
  const textHashtagValue = textHashtag.value.trim();
  const message = checkHashtags(textHashtagValue);
  textHashtag.setCustomValidity(message);
  textHashtag.reportValidity();
};

textDescription.addEventListener('invalid', () => {
  if (textDescription.validity.tooLong) {
    textDescription.setCustomValidity('Длина комментария не должна быть больше 140 символов');
  }
});

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  hashTagInputHandler();
  if (evt.target.checkValidity()) {
    sendData(
      showSuccessMessage,
      showErrorMessage,
      new FormData(evt.target),
    );
    closeModal();
  }
});
