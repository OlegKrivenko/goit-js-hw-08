// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Подключение библиотеки SimpleLightbox (1-й импорт)
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей библиотеки SimpleLightbox (2-й импорт)
import 'simplelightbox/dist/simple-lightbox.min.css';

const ref = {
  gallery: document.querySelector('.gallery'),
};

ref.gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

function createGalleryItems(arrayGalleryItems) {
  return arrayGalleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join('');
}

//      модальне вікно з великою фоткою SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
