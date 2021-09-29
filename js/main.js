function getRandomInt(min, max) {
  if(min >= max) {
    throw 'До не может быть меньше или равно значению от';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(0, 55);

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


const lengthRange = (inputtxt, maxLength) => {
  const userInput = inputtxt;
  return userInput <= maxLength;
};

lengthRange(135, 140);
