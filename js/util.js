const getRandomInt = (min, max) => {
  if(min >= max) {
    throw 'До не может быть меньше или равно значению от';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInt, isEscapeKey};
