import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: '48309790-79d41aaa998d6ec4cf76c4434',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  };
  try {
    return axios.get('https://pixabay.com/api/', axiosOptions);
  } catch (error) {
    console.log(error);
  }
};
