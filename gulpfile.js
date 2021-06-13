//* В node используется как и es6 модули, так и common.js модули

//! В gulp есть множество функций, которые позволяют выполнять какие-то действия
// В данном формате мы будем из gulp  использовать 2 функции:
//          src - определение пути до работы
//          dest - путь +  папка со сборкой
const {
    src,
    dest
} = require('gulp');

//* При установке gulp-sass - нужно подключить
const sass = require('gulp-sass');

// Асинхронные действия (для быстроты действия)
module.exports.default = function (done) {
    console.log('gulp complite')
    //! Чтобы выполнился module, нужно обязательно
    done();

    // Для запуска введите в консоли npx gulp
}

// Превращение стилей scss в css
module.exports.copy = async function () {
    return src('scss/index.scss')
        .pipe(sass())
        .pipe(dest('build'))
    // return src('scss/index.scss')
    //     .pipe(dest('build')) - это не сработает с scss корректно,
    // если не установить дополнительную библиотеку для gulp
    //* (в консоли: npm install -D gulp-sass)

    // Для запуска введите в консоли npx gulp copy


    //! Нужно build:
    // Стили, картинки, index.html
}