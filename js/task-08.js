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
        return valueFieldObject;
    }
};

const createResultArray = valueFieldObject => {
    if (valueFieldObject) {
        let checkunique = resultArrayElements.map(element => element.email);

        if (!checkunique.includes(valueFieldObject.email)) {
            resultArrayElements.push(valueFieldObject);
            alert('Регистрация прошла успешно');
        } else {
            alert('Такой пользователь уже существует');
        }
    }
    return resultArrayElements;
};

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const resultarrayInput = checkOnlyInput(loginFormElements);
    const resultvalueFieldObject = createObject(resultarrayInput);
    console.table(createResultArray(resultvalueFieldObject));
    loginForm.reset();
});