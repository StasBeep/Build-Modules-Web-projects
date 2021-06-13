//* В node используется как и es6 модули, так и common.js модули

//! В gulp есть множество функций, которые позволяют выполнять какие-то действия
// В данном формате мы будем из gulp  использовать 2 функции:
//          src 
//          dest
const {src, dest} = require('gulp');

// Асинхронные действия (для быстроты действия)
module.exports.default = function(done) {
    console.log('gulp complite')
    //! Чтобы выполнился module, нужно обязательно
    done();

    // Для запуска введите в консоли npx gulp
}