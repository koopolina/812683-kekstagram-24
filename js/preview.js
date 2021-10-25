// import { renderPosts } from '../js/similar-list.js';
// import { isEscapeKey } from '../js/util.js';
import { createPosts, createComments } from '../js/data.js';

const bodyTag = document.querySelector('body');
const previewModal = document.querySelector('.big-picture');
const commentCount = previewModal.querySelector('.social__comment-count');
const commentLoader = previewModal.querySelector('.comments-loader');
const closeModal = document.querySelector('#picture-cancel');
previewModal.classList.remove('hidden');
commentCount.classList.add('hidden');
commentLoader.classList.add('hidden');

const createModal = createPosts();

createModal.forEach(({ url, likes, comments, description }) => {
  previewModal.querySelector('.big-picture__img').src = url;
  previewModal.querySelector('.likes-count').textContent = likes;
  previewModal.querySelector('.comments-count').textContent = comments.length;
  previewModal.querySelector('.social__caption').textContent = description;
});

closeModal.addEventListener('click', () => {
  previewModal.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
});
