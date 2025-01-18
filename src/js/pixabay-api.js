export const fetchPhotosByQuery = searchedQuery => {
  return fetch(
    `https://pixabay.com/api/?key=48309790-79d41aaa998d6ec4cf76c4434&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
