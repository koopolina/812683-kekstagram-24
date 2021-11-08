// import { createPosts } from './data.js';
import { renderPosts } from './similar-list.js';
// import './modal.js';
import './preview.js';
import './slider.js';
import { setUserFormSubmit} from './modal.js';
import { closeModal} from './modal.js';

// const similarPosts = createPosts();
// renderPosts(similarPosts);

fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((posts) => {
    renderPosts(posts);
  });

setUserFormSubmit(closeModal);
