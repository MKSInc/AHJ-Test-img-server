const galleryEl = document.querySelector('[data-id="gallery"]');
const btnSend = document.querySelector('[data-id="btnSend"]');
btnSend.addEventListener('click', () => {
  const imgEl = document.createElement('img');
  imgEl.src = '2.jpg';
  galleryEl.append(imgEl);
});

const formEl = document.querySelector('[data-id="form"]');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log('formData file', formData.get('file'));
  console.log('formData description', formData.get('description'));

  const URL = 'https://ahj-test-img-server.herokuapp.com/server.js';
  // const URL = 'http://localhost:3000/server.js';
  const xhr = new XMLHttpRequest();

  xhr.open('POST', URL);
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.response);
      console.log('response', response);
    } else {
      console.error(xhr.status, xhr.responseText);
    }
  });

  xhr.addEventListener('error', () => {
    console.error(xhr.status, xhr.responseText);
  });

  xhr.send(formData);
});
