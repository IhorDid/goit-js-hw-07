// const categoriesItems = document.querySelectorAll('li.item');
// console.log('Number of categories:', categoriesItems.length);
// categoriesItems.forEach(categoriesItem => {
//   const categoryTitle = categoriesItem.querySelector('h2').textContent;
//   const categoryItem = categoriesItem.querySelectorAll('ul > li').length;
//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${categoryItem}`);
// });
const itemEl = document.querySelector('#categories');
const itemElTotal = itemEl.children;
console.log('Number of categories:', itemElTotal.length);
const linksEl = document.querySelectorAll('.item');
for (const linkEl of linksEl) {
  console.log('Category:', linkEl.firstElementChild.textContent);
  const linksItemEl = linkEl
    .querySelectorAll('ul')
    .forEach(link => console.log('Elements:', link.children.length));

  // console.log(linksItemEl);

  // console.log('Elements:', linksItemEl.children.length);
}
