//Alt + ↓          Переместить строку вниз
//Alt + Shift + ↓  Копировать текущую строку вниз
//Ctrl + F2        Выделить все вхождения текущего слова
//Alt + Shift + →  Расширить выделение

const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const createGallery = images => {
    const itemsEl = document.querySelector('.gallery');
    let elementSlide = '';
    for (const { url, alt }
        of images) {
        elementSlide += `<li><img src='${url}' alt='${alt}'></li>`;
    }

    itemsEl.insertAdjacentHTML('beforeend', elementSlide);
};

createGallery(images);