/*
 * Ленивая загрузка изображений
 * - нативная поддержка
 * - событие загрузки изображений
 */

const lazyImages = document.querySelectorAll('img[data-src]');
//console.log('lazyImages :>> ', lazyImages);

lazyImages.forEach(image => image.addEventListener('load', onImageLoaded, {once: true}));
//once: true - загрузка будет только один раз, и после этого слушатель снимается автоматически 

function onImageLoaded (evt){
    //console.log(' evt.target :>> ',  evt.target);
    evt.target.classList.add('appear');
}

// feature Detection способ проверить, поддерживает ли браузер что-то
if ('loading' in HTMLImageElement.prototype) {
    // supported in browser
    //console.log('Поддерживает ленивую загрузку');
    addSrcAttrToLazyImages()
  } else {
    // fetch polyfill/third-party library
   // Динамически вешаем скрипт
   //console.log('НЕ поддерживает ленивую загрузку');
   addLazysizesScript()
  }

function addSrcAttrToLazyImages(){
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => img.src = img.dataset.src);
}  

function addLazysizesScript(){
   const script = document.createElement('script');
   script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" ;
   script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==" ;
   script.crossOrigin = "anonymous"; 
   script.referrerPolicy="no-referrer"; 
   document.body.appendChild(script);
}