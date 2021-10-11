const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// вариант 1

// function createBoxes(amount) {
//     destroyBoxes();
//     let allDiv = '';
//     let sizeDiv = 20;
//     for (let i = 1; i <= amount; i++) {
//         sizeDiv += 10;
//         allDiv += `<div style="width: ${sizeDiv}px; height: ${sizeDiv}px; background-color: ${getRandomHexColor()};">${i} </div>`;
//     }
//     boxesDiv.insertAdjacentHTML('beforeend', allDiv);
// }

// function destroyBoxes() {
//     Array.from(boxesDiv.children).forEach(element => {
//         element.remove();
//     });
// }

// createBtn.addEventListener('click', () => {
//     const counter = document.querySelector('input').value;
//     createBoxes(counter);
// });
// destroyBtn.addEventListener('click', destroyBoxes);

// вариант 2

const makeArrayProperty = parameter => {
    const arrayProperty = [];
    let size = 20;

    for (let i = 1; i <= parameter; i += 1) {
        arrayProperty.push({ size: (size += 10), color: getRandomHexColor() });
    }

    return arrayProperty;
};

function createBoxes(amount) {
    destroyBoxes();
    const arrayProperty = makeArrayProperty(amount);
    let allDiv = '';
    for (const element of arrayProperty) {
        allDiv += `<div style="width: ${element.size}px; height: ${element.size}px; background-color: ${element.color};"> </div>`;
    }
    boxesDiv.insertAdjacentHTML('beforeend', allDiv);
}

function destroyBoxes() {
    Array.from(boxesDiv.children).forEach(element => {
        element.remove();
    });
}

createBtn.addEventListener('click', () => {
    const counter = document.querySelector('input').value;

    createBoxes(counter);
});

destroyBtn.addEventListener('click', destroyBoxes);