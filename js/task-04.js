
let counterValue = 0;

const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}


refs.btnDecrement.addEventListener("click", () => {
    counterValue -= 1
    refs.value.textContent = counterValue
});

refs.btnIncrement.addEventListener("click", () => {
    counterValue += 1
    refs.value.textContent = counterValue
});