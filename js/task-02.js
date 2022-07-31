
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/**
 * 
 * @param {string} root 
 * @param {Array} ingredientsArray 
 */

function createIngredientsList(root, ingredientsArray) {
  const rootNode = document.querySelector(root);
  console.log(rootNode);
  const finalListArray = [];
  for (let i = 0; i < ingredientsArray.length; i += 1) {
    const elem = document.createElement('li');
    elem.textContent = ingredientsArray[i];
    elem.classList.add('item');

    finalListArray.push(elem);
  }
  rootNode.append(...finalListArray);
}

createIngredientsList("#ingredients", ingredients);
