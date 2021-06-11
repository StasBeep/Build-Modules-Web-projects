"use strict";

function loadScript(src, callback) {
    // Чтобы загрузить файл .js, надо добавить новый тег script в разметку

    // Создаём новый тег script
    const script = document.createElement('script');

    // В src тега вставляем всё что находится в переменной src
    script.src = src;

    // Отрабатываем объект callback, в котором находятся инструкции по действиям
    script.onload = callback;

    // Вставляем данных (созданный скрипт) в разметку
    document.head.insertAdjacentElement('beforeend', script);
}

// Домашнее задание №1 рассмотреть три варинта реализации loadScript, при условии,
// что в src хранятся несколько ссылок, либо вообще массив


// Вариант с массивом
loadScript(['./common.js', './timer.js', './a.js'], () => {

});

// Вариант с callback
loadScript(() => {

});

// Вариант со строкой
loadScript('./common.js', () => {
    // Функция, которая находится в common.js
    log();

    console.log('index.js');
});