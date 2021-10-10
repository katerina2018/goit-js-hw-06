const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');
const outputNameValueInitial = outputNameEl.textContent;

inputNameEl.addEventListener('input', () => {
    if (inputNameEl.value !== '') {
        outputNameEl.textContent = inputNameEl.value;
    } else {
        outputNameEl.textContent = outputNameValueInitial;
    }
});