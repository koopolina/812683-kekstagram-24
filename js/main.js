import { createPosts } from './data.js';
import { renderPosts } from './similar-list.js';
import './modal.js';
import './preview.js';

const similarPosts = createPosts();
renderPosts(similarPosts);
