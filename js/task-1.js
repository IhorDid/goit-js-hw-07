const categoriesItems = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesItems.length);
categoriesItems.forEach(categoriesItem => {
  const categoryTitle = categoriesItem.querySelector('h2').textContent;
  const categoryItem = categoriesItem.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItem}`);
});
