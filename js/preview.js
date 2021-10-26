import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const previewModal = document.querySelector('.big-picture');
const closeModal = document.querySelector('#picture-cancel');
const bigPicture = previewModal.querySelector('.big-picture__img img');
const likesCount = previewModal.querySelector('.likes-count');
const commentsCount = previewModal.querySelector('.comments-count');
const socialCaption = previewModal.querySelector('.social__caption');
const commentCount = previewModal.querySelector('.social__comment-count');
const commentLoader = previewModal.querySelector('.comments-loader');

const openPicture = (picture) => {
  bigPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;
};

const renderBigPicture = (post) => {
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  previewModal.classList.remove('hidden');
  body.classList.add('modal-open');
  openPicture(post);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      previewModal.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};

closeModal.addEventListener('click', () => {
  previewModal.classList.add('hidden');
  body.classList.remove('modal-open');
});

export { renderBigPicture };
