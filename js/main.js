import { renderPosts } from './similar-list.js';
import './similar-list.js';
import './preview.js';
import './slider.js';
import './modal.js';
import { getData } from './api.js';
import { sortFilterDiscussed, sortFilterRandom, sortFilterDefault } from './filter.js';

getData((posts) => {
  renderPosts(posts);
  sortFilterDiscussed(posts);
  sortFilterRandom(posts);
  sortFilterDefault(posts);
});
