import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderEl = document.querySelector('.loader');
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');

let page = 1;
let searchedQuery = '';

const showLoader = () => {
  loaderEl.style.display = 'block';
};

const hideLoader = () => {
  loaderEl.style.display = 'none';
};

const onSearchFormSubmit = async event => {
  event.preventDefault();

  try {
    searchedQuery = event.currentTarget.elements.user_query.value.trim();
    if (searchedQuery === '') {
      iziToast.error({
        message: 'The field must be filled in!',
      });
      return;
    }

    page = 1;
    loadMoreBtnEl.classList.add('is-hidden');
    showLoader();
    const { data } = await fetchPhotosByQuery(searchedQuery, page);
    hideLoader();
    console.log(searchedQuery);
    console.log(data);
    if (data.totalHits === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      galleryEl.innerHTML = '';
      searchFormEl.reset();
      return;
    }
    if (data.totalHits > 15) {
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryTemplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');
    galleryEl.innerHTML = galleryTemplate;
    lightbox.refresh();
    searchFormEl.reset();
  } catch (error) {
    console.log(error);
    hideLoader();
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onLoadMoreBtnClick = async event => {
  try {
    page++;
    const cardHeight =
      galleryEl.firstElementChild.getBoundingClientRect().height;

    loadMoreBtnEl.classList.add('is-hidden');
    showLoader();
    const { data } = await fetchPhotosByQuery(searchedQuery, page);
    hideLoader();
    loadMoreBtnEl.classList.remove('is-hidden');
    const galleryTemplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);
    lightbox.refresh();

    window.scrollBy({
      top: cardHeight * 6,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      loadMoreBtnEl.classList.add('is-hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
    hideLoader();
  }
};
