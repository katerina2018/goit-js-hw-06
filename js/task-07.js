const inputEl = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');
const currentSize = document.createElement('span');

inputEl.after(currentSize);
inputEl.addEventListener('input', () => {
    currentSize.textContent = `${inputEl.value}px`;

    changeText.style.fontSize = `${inputEl.value}px`;
});