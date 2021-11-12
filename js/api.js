const API_URL = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(`${API_URL  }/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Не удалось загрузить фотографии');
    })
    .then(onSuccess)
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      throw new Error('Не удалось загрузить фотографию');
    })
    .catch(onFail);
};

export { getData, sendData };
