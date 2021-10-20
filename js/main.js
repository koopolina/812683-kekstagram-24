import {createPosts} from '../js/data.js';
import {renderPosts} from '../js/similar-list.js';
import '../js/modal.js';

const similarPosts = createPosts();
renderPosts(similarPosts);
