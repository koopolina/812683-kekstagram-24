import { renderPostsDiscussed, renderPostsRandom, renderPosts } from './similar-list.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

const filterDiscussed = document.querySelector('#filter-discussed');
const filterRandom = document.querySelector('#filter-random');
const filterDefault = document.querySelector('#filter-default');

const debouncedRenderPostsDiscussed = debounce(renderPostsDiscussed, RERENDER_DELAY);
const debouncedRenderPostsRandom = debounce(renderPostsRandom, RERENDER_DELAY);
const debouncedRenderPostsDefault =debounce(renderPosts, RERENDER_DELAY);


const initFilterDiscussed = (posts) => {
  filterDiscussed.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    debouncedRenderPostsDiscussed (posts);
  });
};

const initFilterRandom = (posts) => {
  filterRandom.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    debouncedRenderPostsRandom(posts);
  });
};

const initFilterDefault = (posts) => {
  filterDefault.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    debouncedRenderPostsDefault(posts);
  });
};

export { initFilterDiscussed, initFilterRandom, initFilterDefault };
