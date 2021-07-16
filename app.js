const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryRef = document.querySelector('.js-gallery');
/// v. 1 через шаблонний рядок
// const makeGalleryItemsMarkup = ({preview, original, description}) => 
//   `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;  

// const  strWithGalleryItemsMarkup = galleryItems
//   .map(makeGalleryItemsMarkup)
//   .join('');

// galleryRef.insertAdjacentHTML('afterbegin', strWithGalleryItemsMarkup);

////////////////////////////////////////////////////////////////
/// v.2 через ф-ію для створення елементів для DOM
// // Функція для створення елементів для DOM
const createElement = (tagName, attributes = {}, children) => {
  
  const element = document.createElement(tagName);
  const attributesEntries = Object.entries(attributes);
  attributesEntries.forEach(attribute => {
    const [attributeName, attributeValue] = attribute;
    element.setAttribute(attributeName, attributeValue);
  });
  //console.log('object :>> ',element.tagName);
  //return element;
  return children ? element.appendChild(children) : element;
}

//////////////////////////////////////
// Создание разметки с помощью createElement
// const makeGalleryItemsMarkup = ({preview, original, description}) => {
//   const li = createElement(
//     'li', 
//     {class: 'gallery__item'}); 
//   const a = createElement(
//       'a', 
//       {class: 'gallery__link',
//        href: `${original}`,
//       }); 
//   const img = createElement(
//         'img', 
//         {class: 'gallery__image',
//          src: `${preview}`,
//          "data-source": `${original}`,
//          alt: `${description}`
//         })

//   li.appendChild(a.appendChild(img));         
//   return li; 
// };

// const arrItemsRef = galleryItems.map(makeGalleryItemsMarkup);
// galleryRef.append(...arrItemsRef);    

// Створення цілого піддерева розмітки за допомогою createElement
const makeGalleryItemsMarkup = ({preview, original, description}) => 
  createElement(
    'li', 
    {class: 'gallery__item'}, 
    createElement(
      'a', 
      {class: 'gallery__link',
       href: `${original}`,
      }, 
      createElement(
        'img', 
        {class: 'gallery__image',
         src: `${preview}`,
         "data-source": `${original}`,
         alt: `${description}`
        }
      )
    )
  );   

const arrItemsRef = galleryItems.map(makeGalleryItemsMarkup);
galleryRef.append(...arrItemsRef);

  //modal
const lightboxRef = document.querySelector('.js-lightbox');
const imageRef =    document.querySelector('.lightbox__image');
const btnCloseRef = document.querySelector('button[data-action="close-lightbox"]');
  
function attrSrcReplace (e, img) {
  console.log('img :>> ', img);
  e.preventDefault();
  lightboxRef.classList.add('is-open');
  imageRef.src = img.href;
}

function onBtnCloseClick () {
  lightboxRef.classList.remove('is-open');
}
const galleryLinksRef = document.querySelectorAll('.gallery__link');
[...galleryLinksRef].forEach(elem => elem.addEventListener('click', function (e) {
  attrSrcReplace (e, e.target)}));
  
btnCloseRef.addEventListener('click', onBtnCloseClick); 