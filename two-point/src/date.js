//! Первый способ подключения библиотеки (работа с датами)
// import {DateTime} from 'https://moment.github.io/luxon/es6/luxon.js';

// Второй способ подключения библиотеки
import {DateTime} from './luxon.js';


// Реализация обратного export, если несколько выносов нужно сделать
export function diffDates(date1, date2) {
    const iso1 = DateTime.fromISO(date1);
    const iso2 = DateTime.fromISO(date2);

    // Функция из библиотеки, которая отработает и получит разницу
    // Должен что-то возвращать!
    return iso2.diff(iso1,['years', 'months', 'days']).toObject();
}