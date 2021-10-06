const getRandomInt = (min, max) => {
  if(min >= max) {
    throw 'До не может быть меньше или равно значению от';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const NAMES = [
  'Алиса',
  'Женя',
  'Игорь',
  'Мила',
  'Аня',
  'Арнольд',
];

const POST_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

const NUMBER_MESSAGES = 25;

const createComments = (postID) => {
  const number = getRandomInt(1, 6);
  const randomTextIndex = getRandomInt(0, POST_MESSAGES.length);
  const randomNameIndex = getRandomInt(0, NAMES.length -1);

  return {
    id: postID,
    avatar: `img/avatar-${  number  }.` + 'svg',
    message: POST_MESSAGES[randomTextIndex],
    name: NAMES[randomNameIndex],
  };
};

// console.log(createComments());

const createPost = (postID) => {
  const randomLikesIndex = getRandomInt(15, 200);

  return {
    id: postID,
    url: `photos/${  postID  }.jpg`,
    description: 'Всем привет! Как дела?',
    likes: randomLikesIndex,
    comments: createComments(),
  };
};

const postList = Array(NUMBER_MESSAGES).fill(null).map((_, i) => createPost(i+1));

const similarPosts = Array.from({length: NUMBER_MESSAGES}, createPost);

// console.log(createPost());

// console.log(similarPosts);
