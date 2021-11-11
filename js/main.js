import { renderPosts } from './similar-list.js';
import './similar-list.js';
import './preview.js';
import './slider.js';
import './modal.js';
import { getData } from './api.js';
import { initFilterDiscussed, initFilterRandom, initFilterDefault } from './filter.js';
import { showErrorMessage } from './message.js';

getData((posts) => {
  renderPosts(posts);
  initFilterDiscussed(posts);
  initFilterRandom(posts);
  initFilterDefault(posts);
}, showErrorMessage);
