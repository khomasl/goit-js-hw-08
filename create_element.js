function createElement (tagName, attributes = {}, children = []) {
    const element = document.createElement(tagName);
    const attributesEntries = Object.entries(attributes);
    attributesEntries.forEach(attribute => {
      const [attributeName, attributeValue] = attribute;
      element.setAttribute(attributeName, attributeValue);
    });
  
    if (children.length !== 0){
      element.appendChild(createElement(...children));
    }
  
    return element;
    //return children.length !== 0 ? element.appendChild(createElement(children[0], children[1], children[2])) : element;
  }
  
  // Приклад Створення цілого піддерева розмітки за допомогою createElement
  const makeGalleryItemsMarkup = ({preview, original, description}) => 
    createElement(
      'li', 
      {class: 'gallery__item'}, 
      [
        'a', 
        {class: 'gallery__link',
         href: `${original}`,
        }, 
        [
          'img', 
          {class: 'gallery__image',
           src: `${preview}`,
           "data-source": `${original}`,
           alt: `${description}`
          }
        ]
      ]
    );   
  
  const arrItemsRef = galleryItems.map(makeGalleryItemsMarkup);
  //console.log('arrItemsRef :>> ', arrItemsRef);
  galleryRef.append(...arrItemsRef);