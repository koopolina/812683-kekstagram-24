import { createPosts } from '../js/data.js';
import { renderPosts } from '../js/similar-list.js';
import '../js/modal.js';
import '../js/preview.js';

const similarPosts = createPosts();
renderPosts(similarPosts);
