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

let tabInd = 0;
let galleryItemsLength = galleryItems.length;

const galleryRef = document.querySelector('.js-gallery');

// // v. 1 ?????????????????? ???????????????? ?????????? ?????????????????? ??????????
// const makeGalleryItemsMarkup = ({preview, original, description}) => {
//  tabInd += 1;
//  return `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//       tabIndex: "${tabInd}"
//     />
//   </a>
// </li>`;
//}

// const  strWithGalleryItemsMarkup = galleryItems
//   .map(makeGalleryItemsMarkup)
//   .join('');

// galleryRef.insertAdjacentHTML('afterbegin', strWithGalleryItemsMarkup);

////////////////////////////////////////////////////////////////
/// v.2 ?????????????????? ???????????????? ?????????? ??-???? ?????? ?????????????????? ?????????????????? ?????? DOM
//  ?????????????? ?????? ?????????????????? ?????????????????? ?????? DOM
////  children - array
function createElement (tagName, attributes = {}, textContent = "", children = []) {
  const element = document.createElement(tagName);
  const attributesEntries = Object.entries(attributes);
  attributesEntries.forEach(attribute => {
    const [attributeName, attributeValue] = attribute;
    element.setAttribute(attributeName, attributeValue);
  });
  element.textContent = textContent;

  if (children.length !== 0){
    children.map(child => element.appendChild(createElement(...child)));
  }

  return element;
  //return children.length !== 0 ? element.appendChild(createElement(children[0], children[1], children[2])) : element;
}

// ?????????????????? ???????????? ?????????????????? ???????????????? ???? ?????????????????? createElement
const makeGalleryItemsMarkup = ({preview, original, description}) => {
  tabInd += 1;
  return createElement(
    'li',
    {class: 'gallery__item'},
    '',
    [['a',
       {class: 'gallery__link',
        href: `${original}`,
       },
       '',
       [['img',
         {class: 'gallery__image',
          src: `${preview}`,
          "data-source": `${original}`,
          alt: `${description}`,
          tabIndex: `${tabInd}`
         }
        ]
       ]
      ]
    ]
  );
}
const arrItemsRef = galleryItems.map(makeGalleryItemsMarkup);
//console.log('arrItemsRef :>> ', arrItemsRef);
galleryRef.append(...arrItemsRef);

//   //modal v. 1 ?????????? ?????????????????? ????????????
// const refs = {
//   lightbox: document.querySelector('.js-lightbox'),
//   image: document.querySelector('.lightbox__image'),
//   closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
//   overlay: document.querySelector('.lightbox__overlay'),
// };

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = galleryRef.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// };

// let ulRef;
// let liRef;
// let aRef;
// let img;

// function onArrowLeftDown (){
//     liRef = liRef.previousElementSibling;
//     liRef = liRef !== null ? liRef : ulRef.lastElementChild;
//     const link = liRef.firstElementChild;
//     refs.image.src = link.href;
//     refs.image.alt = link.firstElementChild.alt;
// }

// function onArrowRightDown (){
//     liRef = liRef.nextElementSibling;
//     liRef = liRef !== null ? liRef : ulRef.firstElementChild;
//     const link = liRef.firstElementChild;
//     refs.image.src = link.href;
//     refs.image.alt = link.firstElementChild.alt;
// }

// function onKeyDown (eKey){
//   //console.log('eKey.target :>> ', eKey.target);
//   //galleryRef.addEventListener('keydown', onChangeImg);
//   switch (eKey.code){
//     case 'ArrowLeft':
//       onArrowLeftDown();
//       break;

//     case 'ArrowRight':
//       onArrowRightDown();
//       break;

//     case 'Escape':
//       onCloseModal();
//       break;
//   }
// }
// function onOpenModal (event) {
//   event.preventDefault();
//   img = event.target;
//   ulRef = event.currentTarget;
//   //const aRef = img.parentNode;
//   aRef = img.parentNode;

//   // ?????????????????????? ?????? ??????????, ???????? ???? ?????????????????? - ???????????????? ?? ?????????????? -
//   // ???? ???????????????????? ???????????????????????????? ?????????? ???? ???? ????????
//    if (aRef.nodeName !== "A") return;

//  // setActiveLink(aRef);

//   liRef = aRef.parentNode;

//   refs.lightbox.classList.add('is-open');
//   refs.image.src = aRef.href;
//   refs.image.alt = img.alt;

//   window.addEventListener('keydown', onKeyDown);
// };

// function onCloseModal () {
//   window.removeEventListener('keydown', onKeyDown);

//   refs.lightbox.classList.remove('is-open');
//   refs.image.src = "";//?????? ???? ?????????? ?????????????????? ????????????????????
//   refs.image.alt = "";
// };

// function onOverlayClick (event) {
//   if (event.currentTarget === event.target){
//     onCloseModal();
//   };
// };

// galleryRef.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// //refs.overlay.addEventListener('click', onCloseModal); // v. 1
// refs.overlay.addEventListener('click', onOverlayClick); // v. 2

////////////////////////////////////////////////////

//modal v. 2 ?????????? setActiveLink(nextActiveLink)
// const refs = {
//   lightbox: document.querySelector('.js-lightbox'),
//   image: document.querySelector('.lightbox__image'),
//   closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
//   overlay: document.querySelector('.lightbox__overlay'),
// };

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = galleryRef.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// };

// function setImage (aRef){
//   setActiveLink(aRef);
//   refs.image.src = aRef.href;
//   refs.image.alt = aRef.firstElementChild.alt;
// }

// function onArrowLeftDown (){
//   const liRef = galleryRef.querySelector('.active').parentNode;
//   const ulRef = liRef.parentNode;
//   const previousLiRef = liRef.previousElementSibling;
//   const newCurrentLiRef = previousLiRef !== null ? previousLiRef : ulRef.lastElementChild;
//   setImage(newCurrentLiRef.firstElementChild);
// }

// function onArrowRightDown (){
//   const liRef = galleryRef.querySelector('.active').parentNode;
//   const ulRef = liRef.parentNode;
//   const nextLiRef = liRef.nextElementSibling;
//   const newCurrentLiRef = nextLiRef !== null ? nextLiRef : ulRef.firstElementChild;
//   setImage(newCurrentLiRef.firstElementChild);
// }

// function onKeyDown (eKey){
//   switch (eKey.code){
//     case 'ArrowLeft':
//       onArrowLeftDown();
//       break;

//     case 'ArrowRight':
//       onArrowRightDown();
//       break;

//     case 'Escape':
//       onCloseModal();
//       break;

//     default: return;
//   }
// }
// function onOpenModal (event) {
//   event.preventDefault();
//   //const aRef = event.target.parentNode;
//   const aRef = event.target.closest('.gallery__link');
//   // ?????????????????????? ?????? ??????????, ???????? ???? ?????????????????? - ???????????????? ?? ?????????????? -
//   // ???? ???????????????????? ???????????????????????????? ?????????? ???? ???? ????????
//    if (aRef.nodeName !== "A") return;

//   refs.lightbox.classList.add('is-open');
//   setImage(aRef);

//   window.addEventListener('keydown', onKeyDown);
// };

// function onCloseModal () {
//   window.removeEventListener('keydown', onKeyDown);

//   refs.lightbox.classList.remove('is-open');
//   refs.image.src = "";//?????? ???? ?????????? ?????????????????? ????????????????????
//   refs.image.alt = "";
// };

// function onOverlayClick (event) {
//   event.stopPropagation();
//   onCloseModal();
//   // ????????????
//   // if (event.currentTarget === event.target){
//   //   onCloseModal();
//   // };
// };

// galleryRef.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// //refs.overlay.addEventListener('click', onCloseModal); // v. 1
// refs.overlay.addEventListener('click', onOverlayClick); // v. 2

////////////////////////////////////

// modal v. 3 ?????????? tabIndex - ?????????????????? ??????????????, ???? ???? ???????????????? ?????? ????????????????

const refs = {
  lightbox: document.querySelector('.js-lightbox'),
  image: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  overlay: document.querySelector('.lightbox__overlay'),
};

function setImage (img){
  refs.image.src = img.original;
  refs.image.alt = img.description;
}

function onArrowLeftDown (){
  tabInd = tabInd !== 1 ? tabInd - 1 : galleryItemsLength;
  setImage(galleryItems[tabInd - 1]);
}

function onArrowRightDown (){
  tabInd = tabInd !== galleryItemsLength ? tabInd + 1 : 1;
  setImage(galleryItems[tabInd - 1]);
}

function onKeyDown (eKey){
  switch (eKey.code){
    case 'ArrowLeft':
      onArrowLeftDown();
      break;

    case 'ArrowRight':
      onArrowRightDown();
      break;

    case 'Escape':
      onCloseModal();
      break;

    default: return;
  }
}

function onOpenModal (event) {
  event.preventDefault();
  tabInd = Number(event.target.getAttribute('tabindex'));
  const aRef = event.target.closest('.gallery__link');
  // ?????????????????????? ?????? ??????????, ???????? ???? ?????????????????? - ???????????????? ?? ?????????????? -
  // ???? ???????????????????? ???????????????????????????? ?????????? ???? ???? ????????
   if (aRef.nodeName !== "A") return;

  refs.lightbox.classList.add('is-open');

  setImage(galleryItems[tabInd-1]);
  // ??
  window.addEventListener('keydown', onKeyDown);

  //olga
  //window.addEventListener('keydown', onClickRightOrLeft);
};

function onCloseModal () {
  window.removeEventListener('keydown', onKeyDown);

  refs.lightbox.classList.remove('is-open');
  refs.image.src = "";//?????? ???? ?????????? ?????????????????? ????????????????????
  refs.image.alt = "";
};

function onOverlayClick (event) {
  event.stopPropagation();
  onCloseModal();
  // ????????????
  // if (event.currentTarget === event.target){
  //   onCloseModal();
  // };
};

 galleryRef.addEventListener('click', onOpenModal);
 refs.closeModalBtn.addEventListener('click', onCloseModal);
//refs.overlay.addEventListener('click', onCloseModal); // v. 1
 refs.overlay.addEventListener('click', onOverlayClick); // v. 2

