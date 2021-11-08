import { renderPosts } from './similar-list.js';
import './preview.js';
import './slider.js';
import './modal.js';
import { getData } from './api.js';

getData((posts) => {
  renderPosts(posts);
});

