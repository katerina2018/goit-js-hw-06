// вариант 1
const calculateCategoriesV1 = () => {
    const itemsEl = document.querySelector('#categories');
    const itemEl = Array.from(itemsEl.children);
    console.log('Number of categories:', itemEl.length);
    console.log('');
    for (const element of itemEl) {
        console.log('Category:', element.firstElementChild.textContent);
        console.log('Elements:', element.lastElementChild.children.length);
        console.log('');
    }
};
// calculateCategoriesV1();

// вариант 2

const calculateCategoriesV2 = () => {
    const itemEl = Array.from(
        document.querySelectorAll('ul#categories> li.item'),
    );

    console.log('Number of categories:', itemEl.length);
    console.log('');
    for (const element of itemEl) {
        console.log('Category:', element.querySelector('h2').textContent);
        console.log('Elements:', element.querySelectorAll('ul>li').length);
        console.log('');
    }
};
calculateCategoriesV2();