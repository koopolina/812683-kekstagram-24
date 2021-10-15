import {createPosts} from '../js/data.js';

const userFeed = document.querySelector('.big-picture');
userFeed.classList.remove('hidden');

const similarListElement = document.querySelector('.pictures');

const similarPostTemplate = document.querySelector('#picture').content;

const similarPosts = createPosts();

const similarListFragment = document.createDocumentFragment();

similarPosts.forEach(({url, likes, comments}) => {
  const postElement = similarPostTemplate.cloneNode(true);
  postElement.querySelector('.picture').src = url;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comments;
  similarListFragment.append(postElement);
});

similarListElement.appendChild(similarListFragment);
