const tech = [
    {label: 'HTML'},
    {label: 'CSS'},
    {label: 'JavaScript'},
    {label: 'Node.js'},
    {label: 'React'},
    {label: 'Vue'},
    {label: 'Next.js'},
    {label: 'Mobx'},
    {label: 'Redux'},
    {label: 'React Router'},
    {label: 'GraphQl'},
    {label: 'PostgreSQL'},
    {label: 'MongoDB'},
];
/*
    1. Рендерим разметку элементов списка
    2. Слушаем изменения фильтра
    3. Фильтруем данные и рендерим новые элемента
*/
const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};
// 1.
//const listItemsMarkup = createListItemsMarkup(tech);
populateList(tech);

// 2.
refs.input.addEventListener('input', _.throttle(onFilterChange, 300));

// 3.
function onFilterChange(evt){
    const filter = evt.target.value.toLowerCase();

    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

    populateList(filteredItems);
}

/////
function createListItemsMarkup(items){
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function populateList(markup){
    refs.list.innerHTML = createListItemsMarkup(markup);;
}
//// v. 2
// function createElement (tagName, attributes = {}, textContent = "", children = []) {
//     const element = document.createElement(tagName);
//     const attributesEntries = Object.entries(attributes);
//     attributesEntries.forEach(attribute => {
//       const [attributeName, attributeValue] = attribute;
//       element.setAttribute(attributeName, attributeValue);
//     });
//     element.textContent = textContent;
  
//     if (children.length !== 0){
//       element.appendChild(createElement(...children));
//     }
  
//     return element;
//     //return children.length !== 0 ? element.appendChild(createElement(children[0], children[1], children[2])) : element;
//   }

// function createListItemsMarkup(){
//    return tech.map(item => createElement('li',{},item.label,[])); 
// }

// function populateList(markup){  
//   refs.list.append(...createListItemsMarkup());  
// };