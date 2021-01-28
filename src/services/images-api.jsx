const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19886282-56444a5241ae61181bc861379';

function fetchImages(name, page) {
  return fetch(
    `${BASE_URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject();
  });
}

const api = {
  fetchImages,
};

export default api;
