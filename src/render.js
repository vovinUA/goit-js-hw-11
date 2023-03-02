export function renderImages(hits, index) {
    return hits
      .map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
          <div class="photo-card">
            <a href="${largeImageURL}" class="photo-card__link">
              <div class="photo-card__wrapper">
                <div class="photo-card__container" data-aos="fade-down" data-aos-delay="${index * 50}">
                  <img class="photo-card__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
                </div>
              </div>
            </a>
            <div class="info">
              <p class="info__item" data-aos="fade-left" data-aos-delay="${index * 25}"><b>Likes</b> ${likes}</p>
              <p class="info__item" data-aos="fade-left" data-aos-delay="${index * 50}"><b>Views</b> ${views}</p>
              <p class="info__item" data-aos="fade-right" data-aos-delay="${index * 50}"><b>Comments</b> ${comments}</p>
              <p class="info__item" data-aos="fade-right" data-aos-delay="${index * 25}"><b>Downloads</b> ${downloads}</p>
            </div>
          </div>
        `,
      )
      .join('');
  }