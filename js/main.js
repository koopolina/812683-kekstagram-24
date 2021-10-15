import {createPosts} from '../js/data.js';
import '../js/picture.js';
import {renderPosts} from '../js/picture.js';

const similarPosts = createPosts();
renderPosts(similarPosts);
