import { isEscapeKey } from './util.js';

const MAX_COUNT = 5;

const bodyTag = document.querySelector('body');
const previewModal = document.querySelector('.big-picture');
const closeModal = document.querySelector('#picture-cancel');
const bigPicture = previewModal.querySelector('.big-picture__img img');
const likesCount = previewModal.querySelector('.likes-count');
const commentsCount = previewModal.querySelector('.comments-count');
const socialCaption = previewModal.querySelector('.social__caption');
const commentCount = previewModal.querySelector('.social__comment-count');
const commentLoader = previewModal.querySelector('.comments-loader');
const commentLoaderTemplate = commentLoader.cloneNode(true);
const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
const commentList = previewModal.querySelector('.social__comments');

const clearComments = () => {
  commentList.textContent = '';
};

const setCommentCounter = (renderedCommentCount, currentCount) => {
  commentCount.textContent = `${renderedCommentCount} из ${currentCount} комментариев`;
};

const renderComment = ({ avatar, name, message }) => {
  const commentElement = commentTemplate.cloneNode(true);
  const imgElement = commentElement.querySelector('.social__picture');
  imgElement.src = avatar;
  imgElement.alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
};

const loadMoreHandler = (commentsLoaderElement, comments) => {
  const renderedComments = document.querySelectorAll('.social__comment').length;
  const slicedComments = comments.slice(renderedComments, renderedComments + MAX_COUNT);
  commentList.append(...slicedComments.map(renderComment));
  setCommentCounter(renderedComments + slicedComments.length, comments.length);
  if (renderComment <= MAX_COUNT || renderedComments + slicedComments.length === comments.length) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
};

const openPicture = (picture) => {
  bigPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;
  clearComments();
  const newCommentsLoaderElement = commentLoaderTemplate.cloneNode(true);
  previewModal.querySelector('.comments-loader').replaceWith(newCommentsLoaderElement);
  loadMoreHandler(newCommentsLoaderElement, picture.comments);
  newCommentsLoaderElement.addEventListener('click', () => loadMoreHandler(newCommentsLoaderElement, picture.comments));
};

const closeBigPictureHandler = () => {
  previewModal.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
  commentLoader.replaceWith(commentLoaderTemplate.cloneNode(true));
  document.removeEventListener('keydown', closeBigPictureHandler);
};

const renderBigPicture = (post) => {
  openPicture(post);
  previewModal.classList.remove('hidden');
  bodyTag.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPictureHandler();
      clearComments();
    }
  });
};

closeModal.addEventListener('click', closeBigPictureHandler);

export { renderBigPicture };

