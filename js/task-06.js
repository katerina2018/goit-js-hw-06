const inputEl = document.querySelector('#validation-input');
const checkEl = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', () => {
    // вариант 1
    // inputEl.classList.add('invalid');
    // if (inputEl.value.length === checkEl) {
    //     inputEl.classList.replace('invalid', 'valid');
    // }
    // вариант 2
    if (inputEl.value.length === checkEl) {
        changeClass(inputEl, 'valid', 'invalid');
    } else {
        changeClass(inputEl, 'invalid', 'valid');
    }
});

function changeClass(elem, classAdd, classRemove) {
    elem.classList.add(classAdd);
    elem.classList.remove(classRemove);
}