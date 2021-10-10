function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorResult = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', () => {
    let currentColor = '';
    currentColor = getRandomHexColor();
    document.querySelector('body').style.backgroundColor = currentColor;
    colorResult.textContent = currentColor;
});