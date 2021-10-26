import { renderBigPicture } from './preview.js';

const similarListElement = document.querySelector('.pictures');
const similarPostTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPosts = (posts) => {
  const similarListFragment = document.createDocumentFragment();

  posts.forEach(({ post }) => {
    const postElement = similarPostTemplate.cloneNode(true);
    postElement.querySelector('.picture__img').src = post.url;
    postElement.querySelector('.picture__likes').textContent = post.likes;
    postElement.querySelector('.picture__comments').textContent = post.comments.length;
    similarListFragment.append(postElement);

    postElement.addEventListener('click', () => renderBigPicture(post));
  });

  similarListElement.appendChild(similarListFragment);
};

export { renderPosts };
