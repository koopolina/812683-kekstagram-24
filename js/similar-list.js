const similarListElement = document.querySelector('.pictures');
const similarPostTemplate = document.querySelector('#picture').content;

const renderPosts = (posts) => {
  const similarListFragment = document.createDocumentFragment();

  posts.forEach(({url, likes, comments}) => {
    const postElement = similarPostTemplate.cloneNode(true);
    postElement.querySelector('.picture__img').src = url;
    postElement.querySelector('.picture__likes').textContent = likes;
    postElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.append(postElement);
  });

  similarListElement.appendChild(similarListFragment);
};

export {renderPosts};
