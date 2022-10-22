const listId = document.querySelectorAll('H2')
console.log('Number of categories:', listId.length); 

const animals = document.querySelectorAll('.item')[0].lastElementChild.children
console.log('Category: Animals' + '\n' +
    'Elements:', animals.length);

const products = document.querySelectorAll('.item')[1].lastElementChild.children
console.log('Category: Products' + '\n' +
    'Elements:', products.length);

const technologies = document.querySelectorAll('.item')[2].lastElementChild.children
console.log('Category: Technologies' + '\n' +
    'Elements:', technologies.length);