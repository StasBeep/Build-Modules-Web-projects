// Дефолтный импорт (Имя выбирается самостоятельно)
import render from './common.js';
// Импорт нескольких элементов (Имя указывается то, которое используется в экспорте)
import { diffDates } from './date.js';

const form = document.getElementById('form-date');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const date1 = evt.target.elements.date1.value;
    const date2 = evt.target.elements.date2.value;

    console.log(date1, date2);

    if (!date1 || !date2) {
        render('Введите оба значения');
        return;
    }

    render('');
    console.log(diffDates(date1, date2));

});