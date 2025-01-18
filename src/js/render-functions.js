export const createGalleryCardTemplate = imgInfo => {
  return `   
      <li class="gallery-card">
      <a class="gallery-link" href="${imgInfo.largeImageURL}"><img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" /></a>       
        <div class="gallery-info">
            <p class="info-item">Likes: <span class="span-info-item">${imgInfo.likes}</span></p>
            <p class="info-item">Views: <span class="span-info-item">${imgInfo.views}</span></p>
            <p class="info-item">Comments: <span class="span-info-item">${imgInfo.comments}</span></p>
            <p class="info-item">Downloads: <span class="span-info-item">${imgInfo.downloads}</span></p>
        </div>
      </li>
    `;
};
