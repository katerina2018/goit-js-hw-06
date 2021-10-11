const loginForm = document.querySelector('.login-form');
const loginFormElements = Array.from(loginForm.elements);
let arrayInput = [];
const resultArrayElements = [];

const checkOnlyInput = parameter => {
    let arrayInput = [];
    for (const element of parameter) {
        if (element.tagName === 'INPUT') {
            arrayInput.push(element);
        }
    }
    return arrayInput;
};

const createResultArray = valueFieldObject => {
    if (valueFieldObject) {
        let checkunique = resultArrayElements.map(element => element.email);

        if (!checkunique.includes(valueFieldObject.email)) {
            resultArrayElements.push(valueFieldObject);
            alert('Регистрация прошла успешно');

            loginForm.reset();
            return console.table(resultArrayElements);
        } else {
            alert('Такой пользователь уже существует');
        }
    }
};

const createObject = parameter => {
    let valueFieldObject = {};
    for (const item of parameter) {
        if (item.value === '') {
            alert(`Заполните поле ${item.name}`);
            break;
        }
        valueFieldObject[item.name] = item.value;
    }
    if (parameter.length === Object.keys(valueFieldObject).length) {
        return createResultArray(valueFieldObject);
    }
};

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const resultarrayInput = checkOnlyInput(loginFormElements);
    createObject(resultarrayInput);
});