import { renderPostsDiscussed, renderPostsRandom, renderPosts } from './similar-list.js';
import { debounce, getRandomInt } from './util.js';

const RERENDER_DELAY = 500;
const RANDOM_PICTURES_COUNT = 10;

const filterDiscussed = document.querySelector('#filter-discussed');
const filterRandom = document.querySelector('#filter-random');
const filterDefault = document.querySelector('#filter-default');

const debouncedRenderPostsDiscussed = debounce((posts) => renderPostsDiscussed(posts), RERENDER_DELAY);
const debouncedRenderPostsRandom = debounce((posts) => renderPostsRandom(posts), RERENDER_DELAY);
const debouncedRenderPostsDefault = debounce((posts) => renderPosts(posts), RERENDER_DELAY);


const sortFilterDiscussed = (posts) => {
  filterDiscussed.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    debouncedRenderPostsDiscussed (posts);
  });
};

const sortFilterRandom = (posts) => {
  filterRandom.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    debouncedRenderPostsRandom(posts.slice(getRandomInt(0, RANDOM_PICTURES_COUNT)));
  });
};

const sortFilterDefault = (posts) => {
  filterDefault.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    debouncedRenderPostsDefault(posts);
  });
};

export { sortFilterDiscussed, sortFilterRandom, sortFilterDefault };
