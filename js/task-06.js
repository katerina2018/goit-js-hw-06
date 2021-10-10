const inputEl = document.querySelector('#validation-input');
const checkEl = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length >= checkEl) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});