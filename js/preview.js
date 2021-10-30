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
const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
const commentList = previewModal.querySelector('.social__comments');

const MAX_COUNT = 5;

const clearComments = () => {
  commentList.textContent = '';
};

const renderComment = ({ avatar, name, message }) => {
  const commentElement = commentTemplate.cloneNode(true);
  const imgElement = commentElement.querySelector('.social__picture');
  imgElement.src = avatar;
  imgElement.alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  commentList.appendChild(commentElement);
};

const openPicture = (picture) => {
  bigPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;
  clearComments();
  const showComments = () => {
    picture.comments.slice(0, MAX_COUNT).forEach(renderComment);
    if (picture.comments.length <= MAX_COUNT) {
      commentLoader.classList.add('hidden');
    } else {
      commentLoader.classList.remove('hidden');
      if (showComments.length === picture.comments.length) {
        commentLoader.classList.add('hidden');
      }
    }
  };
  const showCount = () => {
    commentCount.textContent = `${renderComment.length} из ${picture.comments.length} комментариев`;
  };
  showComments();
  commentLoader.addEventListener('click', () => {
    showComments();
    showCount;
  });
};

const renderBigPicture = (post) => {
  openPicture(post);
  previewModal.classList.remove('hidden');
  body.classList.add('modal-open');
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    previewModal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

closeModal.addEventListener('click', () => {
  previewModal.classList.add('hidden');
  body.classList.remove('modal-open');
});

export { renderBigPicture };

