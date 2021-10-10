//Alt + ↓          Переместить строку вниз
//Alt + Shift + ↓  Копировать текущую строку вниз
//Ctrl + F2        Выделить все вхождения текущего слова
//Alt + Shift + →  Расширить выделение

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
    destroyBoxes();
    let allDiv = '';
    let sizeDiv = 20;
    for (let i = 1; i <= amount; i++) {
        sizeDiv += 10;
        allDiv += `<div style="width: ${sizeDiv}px; height: ${sizeDiv}px; background-color: ${getRandomHexColor()};">${i} </div>`;
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