const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const createItemEl = ingredients => {
    const itemsEL = document.querySelector('#ingredients');
    let itemEl;
    const allItemEl = [];
    for (const element of ingredients) {
        itemEl = document.createElement('li');
        itemEl.textContent = element;
        itemEl.classList.add('item');

        allItemEl.push(itemEl);
    }

    itemsEL.append(...allItemEl);
};

createItemEl(ingredients);