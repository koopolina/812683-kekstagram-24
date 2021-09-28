function getRandomInt(min, max) {
  if(min >= max) {
    return false;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(0, 55);

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


const lengthRange = (inputtxt, maxLength) => {
  const userInput = inputtxt;
  if(userInput <= maxLength) {
    return userInput <= maxLength;
  }
  return false;
};

lengthRange(155, 140);
