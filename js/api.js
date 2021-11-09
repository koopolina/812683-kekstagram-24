const getData = (onSuccess, onFail) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram/',
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
