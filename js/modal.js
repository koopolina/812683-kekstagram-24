import {isEscapeKey} from '../js/util.js';

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const editPhoto = document.querySelector('.img-upload__overlay');
const closeButton = editPhoto.querySelector('#upload-cancel');
const textHashtag = editPhoto.querySelector('.text__hashtags');
const textDescription = editPhoto.querySelector('.text__description');
const HASHTAG_RE = /^[a-zA-Zа-яА-Я0-9]+$/;

const checkRepeat = (hashtags) => {
  for (let i=0; i < hashtags.length; i++) {
    if (hashtags.slice(i+1).includes(hashtags[i])) {
      return false;
    }
  }
};

function doNotClose (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
}

uploadFile.addEventListener('change', () => {
});

uploadFile.addEventListener('click', () => {
  editPhoto.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      editPhoto.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
});

closeButton.addEventListener('click', () => {
  editPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
});

textHashtag.addEventListener('keydown', (evt) => {
  doNotClose(evt);
});

textDescription.addEventListener('keydown', (evt) => {
  doNotClose(evt);
});

textHashtag.addEventListener('input', () => {
  const textHashtagValue = textHashtag.value;
  const hashtags = textHashtagValue.toLowerCase().split(/\s+/);
  const isRepeat = checkRepeat(hashtags);

  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags[i] === '') {
      textHashtag.setCustomValidity('Длина хэш-тега не может быть нулевой');
    }
    else if (hashtags[i][0] !== '#') {
      textHashtag.setCustomValidity('Хэш-тег должен начинаться с символа # (решётка)');
    }
    else if (hashtags[i] === '#') {
      textHashtag.setCustomValidity('Хэш-тег не может состоять только из одной решётки');
    }
    else if (!HASHTAG_RE.exec(hashtags[i])) {
      textHashtag.setCustomValidity('Строка после решётки должна состоять из букв и чисел');
    }
    else if (hashtags[i].length > 20) {
      textHashtag.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
    }
    else if (isRepeat) {
      textHashtag.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
    }
    else if (hashtags.length > 5) {
      textHashtag.setCustomValidity('Нельзя указывать больше пяти хэш-тегов');
    }
  }
});

textDescription.addEventListener('invalid', () => {
  if (textDescription.validity.tooLong) {
    textDescription.setCustomValidity('Длина комментария не должна быть больше 140 символов');
  }
});
