const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const counterIncrement = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};
const counterDecrement = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

decrementEl.addEventListener('click', counterDecrement);
incrementEl.addEventListener('click', counterIncrement);