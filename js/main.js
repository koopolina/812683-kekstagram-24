/* eslint-disable no-useless-concat */
/* eslint-disable no-shadow */
/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
function getRandomInt(min, max) {
  if(min >= max) {
    throw 'До не может быть меньше или равно значению от';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// const lengthRange = (string, maxLength) => {
//   const userInput = string;
//   return userInput <= maxLength;
// };

// lengthRange(135, 140);

const names = [
  'Алиса',
  'Женя',
  'Игорь',
  'Мила',
  'Аня',
  'Арнольд',
];

const text = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

const count = 25;

const createComments = () => {
  const randomIdIndex = getRandomInt(1, 25);
  const number = getRandomInt(1, 6);
  const randomTextIndex = getRandomInt(0, text.length);
  const randomNameIndex = getRandomInt(0, names.length -1);

  return {
    id: randomIdIndex,
    avatar: `img/avatar-${  number  }.` + 'svg',
    message: text[randomTextIndex],
    name: names[randomNameIndex],
  };
};

// console.log(createComments());

const createPost = () => {
  const randomIdIndex = getRandomInt(1, 25);
  const i = getRandomInt(1, 25);
  const randomLikesIndex = getRandomInt(15, 200);
  const createComments = getRandomInt(1, 5);

  return {
    id: randomIdIndex,
    url: `photos/${  i  }.jpg`,
    description: 'Всем привет! Как дела?',
    likes: randomLikesIndex,
    comments: createComments,
  };
};

const similarPost = Array.from({length: count}, createPost);

// console.log(createPost());

// console.log(similarPost);
