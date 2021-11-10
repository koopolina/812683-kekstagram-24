import { renderBigPicture } from './preview.js';
import { getRandomInt } from './util.js';

const RANDOM_PICTURES_COUNT = 10;

const similarListElement = document.querySelector('.pictures');
const similarPostTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFilters = document.querySelector('.img-filters');

const compareNumbers = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const clearRenderPosts = (pictures) => {
  pictures.forEach((item) => {
    item.remove();
  });
};

const renderPosts = (posts) => {
  const similarListFragment = document.createDocumentFragment();
  const pictures = similarListElement.querySelectorAll('.picture');
  clearRenderPosts(pictures);

  posts.forEach((post) => {
    const postElement = similarPostTemplate.cloneNode(true);
    postElement.querySelector('.picture__img').src = post.url;
    postElement.querySelector('.picture__likes').textContent = post.likes;
    postElement.querySelector('.picture__comments').textContent = post.comments.length;
    similarListFragment.append(postElement);

    postElement.addEventListener('click', () => renderBigPicture(post));
  });

  similarListElement.appendChild(similarListFragment);
  imgFilters.classList.remove('img-filters--inactive');
};

const renderPostsDiscussed = (posts) => {
  renderPosts(posts.slice().sort(compareNumbers));
};

const renderPostsRandom = (posts) => {
  const index = getRandomInt(0, RANDOM_PICTURES_COUNT);
  renderPosts(posts.slice(index, index+RANDOM_PICTURES_COUNT));
};

export { renderPosts, renderPostsDiscussed, renderPostsRandom };
