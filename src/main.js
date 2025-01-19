import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderEl = document.querySelector('.loader');
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const showLoader = () => {
  loaderEl.style.display = 'block';
};

const hideLoader = () => {
  loaderEl.style.display = 'none';
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    iziToast.error({
      message: 'The field must be filled in!',
    });
    return;
  }
  showLoader();
  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      hideLoader();
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        galleryEl.innerHTML = '';
        searchFormEl.reset();
        return;
      }
      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      galleryEl.innerHTML = galleryTemplate;
      lightbox.refresh();
      searchFormEl.reset();
    })
    .catch(err => {
      console.log(err);
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
