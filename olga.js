//Olga
//let currentImg;
let counter = 0;
const arr = document.querySelectorAll('.gallery__item');

function newonClickRightOrLeft(e) {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") {
    return;
  }
  const imgSource = e.target.parentNode.querySelector('.gallery__image').dataset.source;
  
  arr.forEach((el, index , array) => {
    if (imgSource === el.querySelector('.gallery__image').dataset.source) {   
    //if (refs.image.src === el.querySelector('.gallery__image').dataset.source) {  
    //if (refs.image.src === el.firstChild.href) {    
      counter = index + 1;
    }
  })

  refs.image.src = arr[counter].querySelector('.gallery__image').dataset.source;
  refs.image.alt = arr[counter].querySelector('.gallery__image').alt;  
};

//let counter;
//const arr = document.querySelectorAll(".gallery__item");

function onClickRightOrLeft(e) {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") {
    return;
  }
  
  //const img = e.target.parentNode.querySelector('.gallery__image').dataset.source;
  arr.forEach((el, index) => {
    //if (img === el.querySelector('.gallery__image').dataset.source) {
    if (refs.lightbox.querySelector('.lightbox__image').src === el.querySelector('.gallery__image').dataset.source) {
    counter = index + 1;
    }  
  } );

  refs.lightbox.querySelector('.lightbox__image').src = arr[counter].querySelector('.gallery__image').dataset.source;
  refs.lightbox.querySelector('.lightbox__image').alt = arr[counter].querySelector('.gallery__image').alt;

}

//listEl.addEventListener('keydown', onClickRightOrLeft);
//galleryRef.addEventListener('keydown', onClickRightOrLeft);