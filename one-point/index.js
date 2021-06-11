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

function loadScriptArr(src, callback) {
    src.forEach((el) => {
        const script = document.createElement('script');
        script.src = el;
        // Три раза обработался callback
        script.onload = callback;
        document.head.insertAdjacentElement('beforeend', script);
    });
}

// Домашнее задание №1 рассмотреть три варинта реализации loadScript, при условии,
// что в src хранятся несколько ссылок, либо вообще массив


// Вариант с массивом
loadScriptArr(['./common.js', './timer.js', './a.js'], () => {
    console.log('loadScriptArr');
});

/*
// Вариант с callback
loadScriptCallBack(() => {

});


// Вариант со строкой
loadScript('./common.js', () => {
    // Функция, которая находится в common.js
    log();

    console.log('index.js');
});
*/